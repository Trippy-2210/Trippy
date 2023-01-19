import {useState, useEffect} from 'react';
import axios from 'axios';
import MyTrips from '../../components/trips/MyTrips.js';
import Header from '../../components/header/Header.js';
import ChatBox from '../../components/ChatBox.js';
import AttendeeList from '../../components/AttendeeList.js';

const Messages = function({userId}) {
  const user = userId || 1;
  const [trip, setTrip] = useState(null);

  var getUserTrips = function() {
    axios.get('/api/messages/getUserTrips', {params: {userId: user}})
      .then(function(response) {
        setTrip(response.data[0]);
      })
  };

  useEffect(getUserTrips, []);

  return (
    <>
      <Header />
      <div className='messagesContainer h'>
        <MyTrips className='messagesTrips v'/>
        <ChatBox user={user} trip={trip}/>
        <AttendeeList trip={trip}/>
      </div>
    </>
  );
};

export default Messages;
