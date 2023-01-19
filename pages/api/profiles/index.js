import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const profiles = await schemas.Profile.find();
  res.status(200).json(profiles);
}