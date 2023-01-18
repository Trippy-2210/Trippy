import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (token) => {
  let [url, users] = token;
  const response = await axios.get(url, { params: { users } });
  return response.data;
};

function Attendees(props) {

  const [requestStatus, setRequestStatus] = useState('');

  useEffect(() => {
    props.requests.forEach((request) => {
      if (request.userId === props.userId) {
        setRequestStatus(request.status);
      }
    })
  }, [props.requests]);


  async function handleRequestToJoin() {
    return axios.post('/api/trips/tripRequest', {
      tripId: props.tripId,
      userId: props.userId
    }).then(res => {
      props.mutate();
    })
  }

  const { data, error } = useSWR(props.attendees ? [`/api/trips/usernames`, JSON.stringify(props.attendees)] : null, fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      {requestStatus !== 'accepted' &&
      <Button
        variant='contained'
        disabled={requestStatus === 'denied' || requestStatus === 'pending'}
        onClick={handleRequestToJoin}
      >
        {requestStatus === 'pending' ? 'Request pending' : 'Request to join trip'}
      </Button>}

      <h2>Attendees:</h2>
      <div>
        {data.map((attendee, index) => (
          <p key={index}>{attendee.firstName} {attendee.lastName}</p>
        ))}
      </div>
    </div>
  )
};

export default Attendees;