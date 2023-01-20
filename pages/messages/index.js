import {useState, useEffect} from 'react';
import {headers} from 'next/headers';
import axios from 'axios';
import MyTrips from '../../components/messages/MyTripsMsg.js';
import Header from '../../components/header/Header.js';
import ChatBox from '../../components/ChatBox.js';
import AttendeeList from '../../components/AttendeeList.js';

const Messages = function() {
  const [user, setUser] = useState(null);
  const [trip, setTrip] = useState(null);
  const [trips, setTrips] = useState([]);

  var getUserTrips = function() {
    axios.get('/api/messages/getUserTrips')
      .then(function(response) {
        setTrip(response.data.trips[0]);
        setTrips(response.data.trips);
        setUser(response.data.userId);
      })
  };

  useEffect(getUserTrips, []);

  return (
    <>
      <Header />
      <div className='messagesContainer h'>
        <MyTrips trips={trips}/>
        <ChatBox user={user} trip={trip}/>
        <AttendeeList trip={trip}/>
      </div>
    </>
  );
};

export default Messages;
