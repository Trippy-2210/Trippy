
import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  let userId = req.headers.userid;
  const { tripId } = req.query;
  const trip = await schemas.Trip.findById(tripId);
  let data = {
    userId,
    trip,
  }
  res.status(200).json(data);
}