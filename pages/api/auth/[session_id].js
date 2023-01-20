import sql from '../../../lib/db.js';

export default async function handler(req, res) {
  let session = String(req.query.session_id);
  let results = await sql`SELECT * FROM sessions WHERE session_id = ${session}`;
  if (!results[0]) {
    await sql`INSERT INTO sessions (session_id, user_id) VALUES (${session}, null);`;
    res.send({session_id: session, user_id: null});
  } else {
    res.send(results[0]);
  }
}