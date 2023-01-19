import useSWR from 'swr'
import axios from 'axios'
import MyTrips from '../../../components/trips/MyTrips.js'

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
    <MyTrips trips={trips}/>
  )
}

export default UserTrips;
