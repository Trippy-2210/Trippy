import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';


function Requests(props) {

  const [requests, setRequests] = useState(null);

  useEffect(() => {
    Promise.all(props.requests.map((request) => {
      let users = JSON.stringify([request.userId]);
      return axios.get('/api/trips/usernames', { params: { users } }).then((user) => {
        let userData = user.data[0];
        return ({
          status: request.status,
          userId: request.userId,
          userName: `${userData.firstName} ${userData.lastName}`
        })
      })
    })).then((userRequests) => {
      console.log(userRequests);
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
    <div>
      <h2>Requests:</h2>
      <h3>Pending:</h3>
      {requests && <div>
        {requests.map((request) => {
          if (request.status === 'pending') {
            return (
              <div key={request.userId}>
                {request.userName}
                <Button
                  variant='contained'
                  onClick={() => {
                    handleUpdateRequest(request.userId, 'accepted')
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant='contained'
                  onClick={() => {
                    handleUpdateRequest(request.userId, 'denied')
                  }}
                >
                  Deny
                </Button>
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
              <div key={request.userId}>
                {request.userName}
                <Button
                  variant='contained'
                  onClick={() => {
                    handleUpdateRequest(request.userId, 'denied', true)
                  }}
                >
                  Remove from trip
                </Button>
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
              <div key={request.userId}>
                {request.userName}
                <Button
                  variant='contained'
                  onClick={() => {
                    handleUpdateRequest(request.userId, 'accepted')
                  }}
                >
                  Add to trip
                </Button>
              </div>
            )
          }
        })}
      </div>}
    </div>
  )
};

export default Requests;