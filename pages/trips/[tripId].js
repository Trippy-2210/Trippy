import { useRouter } from 'next/router';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async(tripId) => {
  const response = await axios.get(`http://localhost:3000/api/trips/${tripId}`)
  return response;
};

const TripDetails = (props) => {

  let router = useRouter();
  let { tripId } = router.query;

  const useSWR('trip data', fetcher);

  return (
    <div>
      Trip details for trip {tripId}
    </div>
  )
}

export default TripDetails;