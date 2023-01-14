import db from '../../lib/db.js'

export default function handler(req, res) {
  db.query('SELECT * FROM books;')
    .then(response => res.status(200).json(response.rows));
}