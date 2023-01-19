import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const userId = req.query.userId;

  schemas.Profile.find({userId: userId})
    .then(function(profile) {
      var promises = [];
      var trips = [];

      var getTrip = function(tripId) {
        return schemas.Trip.find({_id: tripId})
          .then(function(trip) {
            trips.push(trip[0])
          })
      }

      profile[0].trips.map(function(tripId) {
        promises.push(getTrip(tripId))
      })

      Promise.all(promises)
        .then(function() {
          res.status(200).json(trips);
        })
    });
};