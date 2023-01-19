import {useState, useEffect} from 'react';
import axios from 'axios';
import MyTrips from '../../components/trips/MyTrips.js';
import Header from '../../components/header/Header.js';


const Messages = function({userId}) {
  const user = userId || 1;
  const [trip, setTrip] = useState(null);
  const [messageData, setMessages] = useState([]);

  var getUserTrips = function() {
    axios.get('/api/messages/getUserTrips', {params: {userId: user}})
      .then(function(response) {
        setTrip(response.data[0]);
      })
  };

  var getMessages = function() {
    if (!trip) {return;}

    axios.get('/api/messages/' + trip._id)
      .then(function(response) {
        setMessages(response.data);
      })

  };

  useEffect(getUserTrips, []);
  useEffect(getMessages, [trip]);

  return (
    <>
      <Header />
      <div className='messagesContainer h'>
        <MyTrips className='messagesTrips v'/>
        {/* <ChatBox messageData={messageData}/> */}
        <div className='messagesMain v'>test</div>
        <div className='messagesAttendees v'>test</div>
      </div>
    </>
  );
};

export default Messages;
