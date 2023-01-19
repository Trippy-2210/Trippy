import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const profile = await schemas.Profile.find({userId: req.query.id});
  if (profile !== null) {
    res.status(200).json(profile);
  } else {
    res.status(404).json({message: `Profile of user-id: ${req.query.id} not found`})
  }
}
