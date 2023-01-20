import { useRouter } from 'next/router';
import TripInfo from '../../components/trips/tripInfo.js';
import Requests from '../../components/trips/requests.js';
import Attendees from '../../components/trips/attendees.js';
import Header from './../../components/header/Header.js';

import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const TripDetails = (props) => {

  // extract tripId from url
  let router = useRouter();
  let { tripId } = router.query;

  // fetch data for trip
  const { data, error, mutate } = useSWR(tripId ? `/api/trips/${tripId}` : null, fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  let {trip, userId} = data;

  console.log(userId, typeof userId);
  console.log(trip.ownerId, typeof trip.ownerId);


  return (
    <>
      {/* <Header onSubmitHandler={onSubmitHandler} /> */}
      <div id="tripDetailsMainContainer">
        <div id='tripInfoHeader'>
          <h1 className='tripInfoTitle'>{trip.tripTitle}</h1>
          <p>{trip.destination} | {new Date(trip.startDate).toLocaleDateString('en-US')} - {new Date(trip.endDate).toLocaleDateString('en-US')} | {('$').repeat(trip.budget)}
          </p>
        </div>
        <div id='tripDetailsContentContainer'>
          <TripInfo
            data={trip}
          />
          {userId === trip.ownerId
            ? <Requests
              mutate={mutate}
              userId={userId}
              tripId={tripId}
              requests={trip.requests}
            />
            : <Attendees
              userId={userId}
              tripId={tripId}
              ownerId={trip.ownerId}
              mutate={mutate}
              requests={trip.requests}
              attendees={trip.users}
            />
          }
        </div>
      </div>
    </>
  )
}

export default TripDetails;