import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

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
  }, [props.requests, props.userId]);


  async function handleRequestToJoin() {
    return axios.post('/api/trips/tripRequest', {
      tripId: props.tripId,
      userId: props.userId,
      ownerId: props.ownerId,
    }).then(res => {
      props.mutate();
    })
  }

  const { data, error } = useSWR(props.attendees ? [`/api/trips/usernames`, JSON.stringify(props.attendees)] : null, fetcher);

  if (error) {
    console.log(error);
    return <div>failed to load</div>
  }
  if (!data) return <div>loading...</div>

  return (
    <div className='tripAttendeesContainer'>
      <div className='tripRequestButtonContainer'>
        {requestStatus === 'accepted' &&
          <Button
            variant='contained'
            color='success'
            disableRipple={true}
            sx={{ width: '100%', height: 50 }}
          >
            You&apos;re going on this trip!
          </Button>
        }
        {requestStatus === 'pending' &&
          <Button
            variant='contained'
            color='primary'
            sx={{ width: '100%', height: 50 }}
            disableRipple={true}
          >
            Request pending
          </Button>
        }
        {requestStatus === 'denied' &&
          <Button
            variant='contained'
            color='primary'
            disabled
            sx={{ width: '100%', height: 50 }}
          >
            Request to join trip
          </Button>
        }
        {requestStatus === '' &&
          <Button
            variant='contained'
            color='success'
            disableRipple={true}
            sx={{ width: '100%', height: 50 }}
            onClick={handleRequestToJoin}
          >
            Request to join trip
          </Button>
        }
      </div>
      <h2>Attendees:</h2>
      <div>
        {data.map((attendee, index) => (
          <div className='userContainer' key={index}>
            <div className='attendeePhotoContainer'>
              <img
                className='attendeePhoto'
                src={attendee.photo}
                alt='user profile photo'
              />
            </div>
            <Link href={`/users/profile/${attendee.userId}`}>
              <p>{attendee.firstName} {attendee.lastName[0]}.</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Attendees;

// /users/profile/userID