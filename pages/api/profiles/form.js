import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const body = req.body;

  if (!body.firstName || !body.lastName) {
    return res.status(400).json({ data: 'First or last name not found' })
  }
  await schemas.Profile.create({
    userId: req.headers.userid,
    firstName: body.firstName,
    lastName: body.lastName,
    bio: body.bio,
    photo: body.photo
  })
  res.status(200).json({ data: body })
}
