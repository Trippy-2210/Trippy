import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let tripId = req.body.tripId;
    let userId = req.body.userId;
    let ownerId = req.body.ownerId;
    let reqObj = {
      'userId': userId,
      'status': 'pending',
    };

    const joinRequest = await schemas.Trip.findOneAndUpdate(
      { _id: tripId },
      { $push: { requests: reqObj } },
    );

    // create new notification document
    const notif = await schemas.Notification.create({
      userId: ownerId,
      tripId,
      type: 'joinRequest',
      sender: userId,
    })
    let notifId = notif._id.toHexString();

    // add notification id to owner's notifications array
    const userNotif = await schemas.Profile.findOneAndUpdate(
      { 'userId': ownerId },
      { '$push': { 'notifications': notifId }}
    )


    res.status(201).send();
  } else if (req.method === 'PUT') {
    let _id = req.body.tripId;
    let userId = req.body.userId;
    let status = req.body.status;
    let remove = req.body.remove;
    let sender = req.body.sender;

    const updateRequest = await schemas.Trip.findOneAndUpdate(
      { _id, 'requests.userId': userId },
      { $set: { 'requests.$.status': status }}
    )
    if (status === 'accepted') {
      const updateUsers = await schemas.Trip.findOneAndUpdate(
        { _id },
        { $push: { users: userId }}
      )

      const notif = await schemas.Notification.create({
        userId,
        tripId: _id,
        type: 'accepted',
        sender,
      })
      let notifId = notif._id.toHexString();

      // add notification id to users notifications array
      const userNotif = await schemas.Profile.findOneAndUpdate(
        { 'userId': userId },
        { '$push': { 'notifications': notifId }}
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
