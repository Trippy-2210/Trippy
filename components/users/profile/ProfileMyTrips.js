import ProfileTripCard from './ProfileTripCard.js';
import TripCard from '../../../components/trips/TripCard.js';
import Link from 'next/link';

const ProfileMyTrips = ({ trips }) => {
  return (
    <>
      <h1 style={{fontWeight: "bold", width: "180px", padding: "20px", margin: "0 auto"}}>My Trips</h1>
      {trips.length > 0 ? <div
        className='myTrips'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          rowGap: '20px',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'rgba(130, 160, 205, 0.8)',
          zIndex: '-4',
          borderRadius: '25px',
          // border: '1px solid rgba(130, 160, 205, 0.8)',
          padding: "25px",
          borderRadius: "9px",
          boxShadow: "5px 5px 5px rgba(82, 101, 130, 0.5)"
        }}
      >
        {trips && trips.map(trip => {
        return <TripCard trip={trip} key={trip._id}/>
        })}
      </div> : <Link href='/trips/addtrip' style={{fontSize: '1.5rem'}}>Click here to Add a trip!</Link>}

    </>
  );
};

export default ProfileMyTrips;
