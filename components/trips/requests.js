import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import axios from 'axios';


function Requests(props) {

  const [requests, setRequests] = useState(null);

  useEffect(() => {
    Promise.all(props.requests.map((request) => {
      let users = JSON.stringify([request.userId]);
      return axios.get('/api/trips/usernames', { params: { users } }).then((response) => {
        let userData = response.data[0];
        return ({
          status: request.status,
          userId: request.userId,
          userName: `${userData.firstName} ${userData.lastName[0]}.`,
          photo: userData.photo,
        })
      })
    })).then((userRequests) => {
      setRequests(userRequests);
    })
  }, [props.requests])

  function handleUpdateRequest(userId, status, remove = false) {
    axios.put('/api/trips/tripRequest', {
      tripId: props.tripId,
      userId,
      status,
      remove,
      sender: props.userId,
    }).then(res => {
      props.mutate();
    })
  }

  return (
    <div className='tripAttendeesContainer'>
      <h2 id='requestsHeader'>Requests</h2>
      <h3>Pending:</h3>
      {requests && <div>
        {requests.map((request) => {
          if (request.status === 'pending') {
            return (
              <div className='userRequestContainer' key={request.userId}>
                <div className='attendeeInfoContainer'>
                  <div className='attendeePhotoContainer'>
                    <img
                      className='attendeePhoto'
                      src={request.photo}
                      alt='user profile photo'
                    />
                  </div>
                  <Link href={`/users/profiles/${request.userId}`}>
                    <p>{request.userName}</p>
                  </Link>
                </div>
                <div className='userRequestButtonContainer'>
                  <Button
                    color='success'
                    variant='contained'
                    sx={{ width: '45%', height: 35 }}
                    onClick={() => {
                      handleUpdateRequest(request.userId, 'accepted')
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    color='error'
                    variant='contained'
                    sx={{ width: '45%', height: 35 }}
                    onClick={() => {
                      handleUpdateRequest(request.userId, 'denied')
                    }}
                  >
                    Deny
                  </Button>
                </div>
              </div>
            )
          }
        })}
      </div>}
      <h3>Accepted:</h3>
      {requests && <div>
        {requests.map((request) => {
          if (request.status === 'accepted') {
            return (
              <div className='userRequestContainer' key={request.userId}>
                <div className='attendeeInfoContainer'>
                  <div className='attendeePhotoContainer'>
                    <img
                      className='attendeePhoto'
                      src={request.photo}
                      alt='user profile photo'
                    />
                  </div>
                  <Link href={`/users/profiles/${request.userId}`}>
                    <p>{request.userName}</p>
                  </Link>
                </div>
                <div className='userRequestButtonContainer'>
                  <Button
                    color='error'
                    variant='contained'
                    sx={{ width: '100%', height: 35, padding: 0 }}
                    onClick={() => {
                      handleUpdateRequest(request.userId, 'denied', true)
                    }}
                  >
                    Remove from trip
                  </Button>
                </div>
              </div>
            )
          }
        })}
      </div>}
      <h3>Denied:</h3>
      {requests && <div>
        {requests.map((request) => {
          if (request.status === 'denied') {
            return (
              <div className='userRequestContainer' key={request.userId}>
                <div className='attendeeInfoContainer'>
                  <div className='attendeePhotoContainer'>
                    <img
                      className='attendeePhoto'
                      src={request.photo}
                      alt='user profile photo'
                    />
                  </div>
                  <Link href={`/users/profiles/${request.userId}`}>
                    <p>{request.userName}</p>
                  </Link>
                </div>
                <div className='userRequestButtonContainer'>
                  <Button
                    color='success'
                    variant='contained'
                    sx={{ width: '100%', height: 35, padding: 0 }}
                    onClick={() => {
                      handleUpdateRequest(request.userId, 'accepted')
                    }}
                  >
                    Add to trip
                  </Button>
                </div>
              </div>
            )
          }
        })}
      </div>}
    </div>
  )
};

export default Requests;