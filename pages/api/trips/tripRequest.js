import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let _id = req.body.tripId;
    let joinReq = {
      userId: req.body.userId,
      status: 'pending',
    };

    const users = await schemas.Trip.findOneAndUpdate(
      { _id },
      { $push: { requests: joinReq } },
    );
    res.status(201).send();
  } else if (req.method === 'PUT') {
    let _id = req.body.tripId;
    let userId = req.body.userId;
    let status = req.body.status;
    let remove = req.body.remove;

    console.log(_id, userId, status)

    const updateRequest = await schemas.Trip.findOneAndUpdate(
      { _id, 'requests.userId': userId },
      { $set: { 'requests.$.status': status }}
    )
    if (status === 'accepted') {
      const updateUsers = await schemas.Trip.findOneAndUpdate(
        { _id },
        { $push: { users: userId }}
      )
    }
    if (remove) {
      const removeUser = await schemas.Trip.findOneAndUpdate(
        { _id },
        { $pull: { 'users': userId } }
      )
    }
    res.status(201).send();
  }
}
