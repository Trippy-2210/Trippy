import ProfileTripCard from './ProfileTripCard.js';

const ProfileMyTrips = ({ trips }) => {
  return (
    <div
      className='myTrips'
      style={{
        // width: '300px',
        // height: '80vh',
        display: 'flex',
        flexDirection: 'row', // changed to row from column
        flexWrap: 'wrap',
        rowGap: '20px',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#82A0CD',
        zIndex: '-4',
        borderRadius: '25px', // added
        padding: "25px", // added
        borderRadius: "9px" // added
      }}
    >
      <h1 style={{fontWeight: "bold", width: "180px", padding: "20px"}}>My Trips</h1>
      {trips && trips.map(trip => {
       return <ProfileTripCard trip={trip} key={trip._id}/>
      })}


    </div>
  );
};

export default ProfileMyTrips;
