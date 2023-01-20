import {useState, useEffect} from 'react';
import {IoMdSend as Send} from 'react-icons/io';
import {FaPoll as Poll}   from 'react-icons/fa';
import axios from 'axios';

import CreatePolls from '../pages/messages/createPoll.js';
import ViewPoll    from '../pages/messages/viewPoll.js';

const ChatBox = function({user, trip}) {
  const [messageData, setMessages] = useState([]);
  const [pollCreation, togglePoll] = useState(false);
  const [pollResults, togglePollResults] = useState(false);
  const [polls, setPolls] = useState([]);

  var renderMessages = function() {
    if (!user) {return;}

    var messages = [];
    var lastUser = null;

    messageData.map(function(msg, i) {
      var thisUser = msg.user;
      var headText = thisUser === lastUser ? '' : msg.user;

      messages.push(
        <div className='message h' key={'message' + i}>
          <div className='messageHead'>{headText}</div>
          <div className='messageText'>{msg.content}</div>
        </div>
      )

      lastUser = thisUser;
    })

    return messages;
  };

  var renderPoll = function() {
    if (!pollCreation) {return;}

    var showResults = function() {
      togglePoll(false);
      togglePollResults(true);
    };

    var poll = (
      <div className='pollModal v'>
        <CreatePolls pollToggle={()=>{togglePoll(false)}} resultToggle={showResults}/>
      </div>
    );

    return poll;
  };

  var renderPollResults = function() {
    if (!pollResults) {return;}

    var results = (
      <div className='pollModal v'>
        <ViewPoll pollToggle={()=>{togglePollResults(false)}}/>
      </div>
    );

    return results;
  };

  var sendMessage = function(e) {
    var form = document.getElementById('form');

    e.preventDefault();

    var message = {
      tripId: trip._id,
      userId: user,
      content: form.chatInput.value,
      createdAt: new Date().toISOString()
    };

    var msgs = messageData;

    setMessages([...msgs, message]);

    axios.put('/api/messages/addMessage', message);

    form.reset();
  };

  var getMessages = function() {
    if (!trip) {return;}

    axios.get('/api/messages/' + trip._id)
      .then(function(response) {
        setMessages(response.data);
      })
  };

  useEffect(getMessages, [trip]);

  return (
    <div className='messagesMain v'>
      {renderPoll()}
      {renderPollResults()}
      <div className='chat v'>
        {renderMessages()}
      </div>
      <form id='form' onSubmit={sendMessage}>
        <div className='chatBox h'>
          <input
            className='chatInput'
            name='chatInput'
            type='text'
            placeholder='Send a message!'
            autoComplete='off'
          />
          <Poll className='chatButton' size={30} onClick={()=>{togglePoll(!pollCreation)}}/>
          <Send className='chatButton' size={30} onClick={sendMessage}/>
        </div>

        <input type='submit' style={{display: "none"}}/>
      </form>
    </div>
  );
};

export default ChatBox;
