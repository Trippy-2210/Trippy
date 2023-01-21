import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const user = await schemas.Profile.find({userId: req.headers.userid});
  res.status(200).json(user);

  // let query = JSON.parse(req.query)

}