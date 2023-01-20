import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const { tripId } = req.query;
  const messages = await schemas.Message.find({tripId: tripId}).sort({createdAt: 1});

  var messageData = [];
  var attendees = [];
  var promises = [];

  console.log(messages);

  messages.map(function(msg) {
    var message = {
      createdAt: msg.createdAt,
      content: msg.content,
      user: null
    };

    messageData.push(message);

    promises.push(schemas.Profile.findOne({userId: msg.userId})
      .then(function(profile) {
        message.user = profile.firstName + ' ' + profile.lastName;
      })
    )
  });

  Promise.all(promises)
    .then(function() {
      res.status(200).json(messageData);
    })
};