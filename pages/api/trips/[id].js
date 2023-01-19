import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const trip = await schemas.Trip.findById(req.query.id);
  console.log(`***** trip: ${trip} *****`)
  if (trip !== null) {
    res.status(200).json(trip);
  } else {
    res.status(404).json({message: `Trip of user-id: ${req.query.id} not found`})
  }
}