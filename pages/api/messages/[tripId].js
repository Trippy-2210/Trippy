import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  console.log('received API request');
  const { tripId } = req.query;
  const messages = await schemas.Messages.find({tripId: tripId});

  res.status(200).json(messages);
};