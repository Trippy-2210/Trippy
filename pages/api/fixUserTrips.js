import schemas from '../../utils/db.js';

export default async function handler(req, res) {
  const users = await schemas.Profile.find();

  users.map(function(user) {
    var fixedTrips = [];
    var promises = [];

    user.trips.map(function(trip, i) {
      if (!trip.tripTitle) {
        console.log(trip);

        promises.push(schemas.Trip.findOne({_id: trip})
          .then(function(result) {
            fixedTrips.push(result);
          })
        )
      } else {
        console.log(trip);

        promises.push(schemas.Trip.findOne(trip)
          .then(function(result) {
            fixedTrips.push(result);
          })
        )
      }
    });

    Promise.all(promises)
      .then(function() {
        schemas.Profile.updateOne(user, {trips: fixedTrips})
          .then(function(result) {
            console.log(result);
          })
      })
  })

  res.status(200).json('Okay.');
}