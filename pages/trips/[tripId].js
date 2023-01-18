import { useRouter } from 'next/router';
import TripInfo from '../../components/tripInfo.js';
import Requests from '../../components/requests.js';
import Attendees from '../../components/attendees.js';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const TripDetails = (props) => {

  // need to figure out how to get userId
  let userId = 2;

  // extract tripId from url
  let router = useRouter();
  let { tripId } = router.query;

  // fetch data for trip
  const { data, error, mutate } = useSWR(tripId ? `/api/trips/${tripId}` : null, fetcher);


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <TripInfo
        data={data}
      />
      {userId === data.ownerId
      ? <Requests
          mutate={mutate}
          userId={userId}
          tripId={tripId}
          requests={data.requests}
        />
      : <Attendees
          userId={userId}
          tripId={tripId}
          mutate={mutate}
          requests={data.requests}
          attendees={data.users}
        />
      }
    </div>
  )
}

export default TripDetails;