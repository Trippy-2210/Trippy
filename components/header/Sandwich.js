import React, { useState, useEffect } from 'react';
import NotificationsDropdown from './NotificationsDropdown.js'
import styles from './header.module.css'



const Sandwich = ({data, notes}) => {

  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({})


  return(
    <div
    className={styles.sandwich}
    onClick={() => {
      setShow(!show)
      !show ? setStyle({
        boxShadow: '1px 3px 4px 0px black',
        transform: 'translate(-10px, -1px)'}) : setStyle({})
    }}

    style={style}
    >
      <div className={styles.sandwichLines}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {notes.length > 0 ? <div className={styles.numberOfNotifications}>{notes.length}</div> : null}
      <img
      className={styles.sandwichPhoto}
      src='https://m.media-amazon.com/images/I/41hjCc+ZlDL._AC_SX425_.jpg'
      ></img>
      {show ? <NotificationsDropdown data={notes}/> : null}
    </div>

    )

};

export default Sandwich;