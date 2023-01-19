import schemas from '../../../../utils/db.js';

export default async function handler(req, res) {
  const trips = await schemas.Trip.find({ownerId: req.query.id});
  // console.log(`***** trips: ${trips} *****`)
  if (trips !== null) {
    res.status(200).json(trips);
  } else {
    res.status(404).json({message: `Trips of user-id: ${req.query.id} not found`})
  }
}