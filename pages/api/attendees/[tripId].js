import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const { tripId } = req.query;
  const attendees = await schemas.Profile.find({tripId: tripId});

  res.status(200).json(attendees);
};