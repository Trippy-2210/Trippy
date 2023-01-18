import React, { useState } from 'react';
import NotificationsDropdown from './NotificationsDropdown.js'

const Sandwich = ({data}) => {

  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({})

  return(
    <div
    className='sandwich'
    onClick={() => {
      setShow(!show)
      !show ? setStyle({
        boxShadow: '1px 3px 4px 0px black',
        transform: 'translate(-10px, -1px)'}) : setStyle({})
    }}

    style={style}
    >
      <div className='sandwich-lines'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img
      className='sandwich-photo'
      src='https://m.media-amazon.com/images/I/41hjCc+ZlDL._AC_SX425_.jpg'
      ></img>
      {show ? <NotificationsDropdown /> : null}
    </div>

    )

};

export default Sandwich;