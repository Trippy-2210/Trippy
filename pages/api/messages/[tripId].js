import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const { tripId } = req.query;
  const messages = await schemas.Message.find({tripId: tripId}).sort({createdAt: 1});

  var messageData = [];
  var attendees = [];
  var promises = [];

  messages.map(function(msg) {
    promises.push(schemas.Profile.findOne({userId: msg.userId})
      .then(function(profile) {
        var message = {
          createdAt: msg.createdAt,
          content: msg.content,
          user: profile.firstName + ' ' + profile.lastName
        };

        messageData.push(message);
      })
    )
  });

  Promise.all(promises)
    .then(function() {
      res.status(200).json(messageData);
    })
};