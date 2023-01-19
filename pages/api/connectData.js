import schemas from '../../utils/db.js';

export default async function handler(req, res) {
  const trips = await schemas.Trip.find();

  trips.map(function(trip, i) {
    trip.users.map(function(userId) {
      var filter = {userId: userId};
      var update = {$push: {trips: trip._id}};
      var option = { "upsert": true };

      schemas.Profile.find({userId: userId, trips: trip._id})
        .then(function(result) {
          if (result[0]) {
            return;
          }

          schemas.Profile.update(filter, update, function(err, response) {
            console.log(update, response);
          });
        })
    })
  })
};