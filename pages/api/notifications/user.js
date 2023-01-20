import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const notification = await schemas.Notification.findOne({_id: req.body.query});
  res.status(200).json(notification);
  console.log(req.headers.userid, notification)

  // let query = JSON.parse(req.query)

}