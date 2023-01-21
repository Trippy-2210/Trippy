import TripCard from './TripCardMsg.js';

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
      {trips && renderTrips()}
    </div>
  );
};

export default MyTrips;
