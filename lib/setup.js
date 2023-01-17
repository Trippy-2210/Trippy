import sql from './db.js';

await sql`CREATE TABLE IF NOT EXISTS sessions (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(128),
  user_id INT
)`;

await sql`CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(128),
  password VARCHAR(64),
  salt VARCHAR(64)
)`;

await sql`CREATE INDEX email_idx ON users(email);`
await sql`CREATE INDEX session_id_idx ON sessions(session_id);`

console.log('Tables for users and sessions have been created');