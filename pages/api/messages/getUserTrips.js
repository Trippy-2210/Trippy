import schemas from '../../../utils/db.js';

export default async function handler(req, res) {
  const userId = req.headers.userid;

  schemas.Profile.findOne({userId: userId})
    .then(function(profile) {
      var promises = [];
      var trips = [];
      var sendBody = {};

      var getTrip = function(tripId) {
        return schemas.Trip.findOne({_id: tripId})
          .then(function(trip) {
            trips.push(trip);
          })
      };

      profile.trips.map(function(tripId) {
        promises.push(getTrip(tripId));
      })

      Promise.all(promises)
        .then(function() {
          res.status(200).json({trips: trips, userId: userId});
        })
    });
};