import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const trips = await schemas.Trip.find({destination : {$regex: new RegExp(req.body.query, 'i')}});
  res.status(200).json(trips);

  // let query = JSON.parse(req.query)

}