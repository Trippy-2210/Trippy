import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  var message = req.body;

  schemas.Message.create(message)
    .then(function(response) {
      res.status(201).json('Message saved.');
    })
};