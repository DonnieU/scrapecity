// Setup the db
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';



const adapter = new FileSync('db.json');
const db = lowdb(adapter);
db.defaults({ twitter: [], instagram: [] }).write();

export default db;