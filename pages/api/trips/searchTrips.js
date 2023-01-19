import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  console.log(req.body, 'Request heard for all trips route')
  const trips = await schemas.Trip.find({tripTitle : {$regex: new RegExp(req.body.query, 'i')}});
  console.log(trips)
  res.status(200).json(trips);

  // let query = JSON.parse(req.query)

}