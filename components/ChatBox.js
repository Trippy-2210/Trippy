import {useState, useEffect} from 'react';
import axios from 'axios';

const ChatBox = function({user, trip}) {
  const [messageData, setMessages] = useState([]);

  var renderMessages = function() {
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

  var sendMessage = function(e) {
    e.preventDefault();

    var message = {
      tripId: trip._id,
      userId: user,
      content: e.target.chatInput.value,
      createdAt: new Date().toISOString()
    };

    axios.put('/api/messages/addMessage', message)
      .then(function(response) {
        getMessages();
      })

    e.target.reset();
  };

  var getMessages = function() {
    if (!trip) {return;}

    axios.get('/api/messages/' + trip._id)
      .then(function(response) {
        setMessages(response.data);

        console.log(response.data);
      })
  };

  useEffect(getMessages, [trip]);

  return (
    <div className='messagesMain v'>
      <div className='chat v'>
        {renderMessages()}
      </div>
      <form onSubmit={sendMessage}>
        <input className='chatInput' name='chatInput' type='text' placeholder='Send a message!'/>
        <input type='submit' style={{display: "none"}}/>
      </form>
    </div>
  );
};

export default ChatBox;
