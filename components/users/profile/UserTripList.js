import useSWR from 'swr'
import UserTripListItem from './UserTripListItem.js'
import axios from 'axios'

const UserTrips = ({ ownerId }) => {

  const fetcher = async (url) => {
    const res = await axios.get(url);
    return res.data;
  }

  const { data, error, isLoading } = useSWR(`/api/profiles/userTrips/${ownerId}`, fetcher)

  if (isLoading) return <h2>Loading...</h2>
  if (error) {
    console.log(error)
    return <h2>Failed to load trips</h2>
  }
  let trips = data;

  return (
    <>
      <div className="user-trips">
        {trips.map((trip, i) =>  <UserTripListItem key={i} trip={trip}/>)}
      </div>
    </>
  )
}

export default UserTrips;
