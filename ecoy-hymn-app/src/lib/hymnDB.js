// src/lib/hymnDB.js
import { openDB } from 'idb';

const DB_NAME = 'hymn-db';
const STORE_NAME = 'hymns';

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: '$id' });
      }
    },
  });
}

export async function saveHymns(hymns) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');

  for (const hymn of hymns) {
    await tx.store.put(hymn); // Ensures each hymn gets written properly
  }

  await tx.done;
}

export async function getAllHymns() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}

export async function getHymnById(id) {
  const db = await initDB();
  return db.get(STORE_NAME, id);
}

export async function clearHymns() {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.store.clear();
  await tx.done;
}
