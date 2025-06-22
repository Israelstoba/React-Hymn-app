import { openDB } from 'idb';

const DB_NAME = 'ecoy-hymns-db';
const STORE_NAME = 'hymns';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: '$id' });
    }
  },
});

export async function saveHymnsToDB(hymns) {
  const db = await dbPromise;
  const tx = db.transaction(STORE_NAME, 'readwrite');
  hymns.forEach((hymn) => tx.store.put(hymn));
  await tx.done;
}

export async function getAllHymnsFromDB() {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}
