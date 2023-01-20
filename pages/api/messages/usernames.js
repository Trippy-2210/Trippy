import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  let userIds = JSON.parse(req.query.users)
  const users = await schemas.Profile.find({ 'userId': { $in: userIds }}, {_id: 1, firstName: 1, lastName: 1, photo: 1 });
  res.status(200).json(users);
}
