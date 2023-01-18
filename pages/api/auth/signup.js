import crypto from 'crypto';
import sql from '../../../lib/db.js';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
  let pw = req.body.pw;
  let email = req.body.email;
  let checkEmail = await sql`SELECT * FROM users WHERE email = ${email};`;

  if (checkEmail[0]) {
    res.send('wrong');
    return;
  }


  let token = crypto.randomBytes(20).toString('hex');
  const salt = crypto.createHash('sha256').update(token).digest('hex');
  let hash = crypto.createHash('sha256').update(pw + salt).digest('hex');
  let session_id = req.headers.session_id;

  let id = await sql`INSERT INTO users (email, password, salt) VALUES (${email}, ${hash}, ${salt}) RETURNING id;`;
  await sql`UPDATE sessions SET user_id = ${id[0].id} WHERE session_id = ${session_id};`;


  res.status(200).send();
}