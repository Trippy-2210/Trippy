
import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  console.log('received API request');
  const { tripId } = req.query;
  const trip = await schemas.Trip.findById(tripId);
  res.status(200).json(trip);
}