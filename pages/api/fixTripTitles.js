import schemas from '../../utils/db.js';

export default async function handler(req, res) {
  const mods = ['to Gotham', 'to Smallville', 'of your Lifetime.', 'to the Nile.', 'Heaven', 'to the Moon!'];
  const users = await schemas.Profile.find();

  users.map(function(user) {
    var fixedTrips = [];
    var promises = [];

    user.trips.map(function(trip) {
      if (typeof trip === 'string') {
        promise.push(schemas.Trip.findOne({_id: trip})
          .then(function(result) {
            fixedTrips.push(result);
          })
        )
      } else {
        fixedTrips.push(trip);
      }
    })

    Promise.all(promises)
      .then(function(result) {
        console.log(result);
      })
  })

  // trips.map(function(trip) {
  //   var mod = mods[Math.floor(Math.random() * 6)];

  //   schemas.Trip.update({_id: trip._id}, {tripTitle: 'Trip ' + mod})
  //     .then(function(response) {
  //       console.log(response);
  //     })
  // })

  res.status(200).json('Okay.');
}