import schemas from '../../utils/db.js';

export default async function handler(req, res) {
  const mods = ['to Gotham', 'to Smallville', 'of your Lifetime.', 'to the Nile.', 'Heaven', 'to the Moon!'];


  const trips = await schemas.Trip.find();

  trips.map(function(trip) {
    var mod = mods[Math.floor(Math.random() * 6)];

    schemas.Trip.update({_id: trip._id}, {tripTitle: 'Trip ' + mod})
      .then(function(response) {
        console.log(response);
      })
  })

  res.status(200).json('Okay.');
}