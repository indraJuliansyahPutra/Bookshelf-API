const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = lowdb(adapter);

// Inisialisasi data jika kosong
if (!db.has('books').value()) {
  db.set('books', []).write();
}

module.exports = db.get('books');