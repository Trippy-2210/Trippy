import React, {useState} from 'react';



const NotificationsDropdown = ({}) => {
  let notes = {messages: 0, trips:0}
  let data = {notifications: ['message', 'added', 'message', 'message', 'request', 'added']}
  if (data.notifications.length) {
    data.notifications.forEach(item => {
      if (item === 'message') notes.messages++
      else notes.trips++
    })
  }


  return(
    <div className='notificationsDropdown'>

      <div className='notificationsContainer'>

        <div>Profile</div>
        {notes.messages ? <div>Messages <span style={{color: 'red'}}>&#40;{notes.messages}&#41;</span></div> : <div>Messages</div>}
        {notes.trips ? <div>Trips <span style={{color: 'red'}}>&#40;{notes.trips}&#41;</span></div> : <div>Trips</div>}

      </div>

    </div>

    )

};

export default NotificationsDropdown;