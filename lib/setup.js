import db from './db.js';

await db.query(`CREATE TABLE IF NOT EXISTS sessions (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(128),
  user_id INT
)`);

console.log('sessions table created')