import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const { tripId } = req.query;

  schemas.Trip.findOne({_id: tripId})
    .then(function(trip) {
      var attendees = [];
      var promises = [];

      trip.users.map(function(userId) {
        promises.push(schemas.Profile.findOne({userId: userId})
          .then(function(user) {
            attendees.push(user);
          })
        )
      })

      Promise.all(promises)
        .then(function() {
          res.status(200).json(attendees);
        })
    });
};