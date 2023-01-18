import crypto from 'crypto';
import sql from '../../../lib/db.js';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
  let pw = req.body.pw;
  let email = req.body.email;
  let result = await sql`SELECT * FROM users WHERE email = ${email};`

  if (!result[0]) {
    res.send('wrong');
    return;
  }

  let salt = result[0].salt;
  let dbPass = result[0].password;
  let hash = crypto.createHash('sha256').update(pw + salt).digest('hex');
  let session_id = req.headers.session_id;

  if (dbPass === hash) {
    await sql`UPDATE sessions SET user_id = ${result[0].id} WHERE session_id = ${session_id};`;
    res.status(200).send();
  } else {
    res.send('wrong');
  }
}