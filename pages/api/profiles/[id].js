import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const profile = await schemas.Profile.findById(req.query.id);
  console.log(`***** profile: ${profile} *****`)
  if (profile == true) {
    res.status(200).text(profile);
  } else {
    res.status(404).json({message: `Profile of user-id: ${req.query.id} not found`})
  }
}