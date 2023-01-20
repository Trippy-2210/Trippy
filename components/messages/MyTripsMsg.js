import TripCard from '../trips/TripCard.js';

const MyTrips = ({trips, setTrip}) => {
  var renderTrips = function() {
    var rendered = [];

    trips.map(trip => {
      rendered.push(<TripCard trip={trip} key={trip._id}/>);
     })

    return rendered;
  };

  return (
    <div className='myTripsMsg v'>
      <h1>My Trips</h1>
      {trips && renderTrips()}
    </div>
  );
};

export default MyTrips;
