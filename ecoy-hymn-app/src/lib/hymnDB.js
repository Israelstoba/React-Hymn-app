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
  hymns.forEach((hymn) => tx.store.put(hymn));
  await tx.done;
}

export async function getAllHymns() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}
