import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const trips = await schemas.Trip.find();
  res.status(200).json(trips);
  console.log(req.headers.userid)
  // let query = JSON.parse(req.query)

}


