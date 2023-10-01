import { openDB } from 'idb';
import { header } from './header';

const initdb = async () => {
  const db = await openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const count = await store.count();

  if (count === 0) {
    console.log('Database is empty, adding header');
    await putDb(header);
  }
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.add({ content });
  console.log('Content added to the database', content);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Getting all the content from the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate','readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const allRecords = await store.getAll();
  const result = await request;
  console.log('results.value', result);
  return allRecords.length > 0 ? allRecords[allRecords.length - 1].content : header; 
};


initdb();
