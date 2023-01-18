import UserTripListItem from './UserTripListItem.js'

const UserTrips = ({ trips }) => {
  return (
    <>
      <div className="user-trips">
        {trips.map((trip, i) => <UserTripListItem key={i} trip={trip}/>)}
      </div>
    </>
  )
}

export default UserTrips;
