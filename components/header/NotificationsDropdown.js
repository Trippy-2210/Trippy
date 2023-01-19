import React, {useState} from 'react';
import styles from './header.module.css'
import Link from 'next/link'

const NotificationsDropdown = ({data}) => {

  let notes = {messages: 0, trips:0}

  if (data.notifications.length) {
    data.notifications.forEach(item => {
      if (item === 'message') notes.messages++
      else notes.trips++
    })
  }

  <Link href="/blog/hello-world">Blog Post</Link>

  return(
    <div className={styles.notificationsDropdown}>

      <div className={styles.notificationsContainer}>

        <Link href="/" className={styles.navLink}>Profile</Link>
        {notes.messages ?
        <Link href="/messages" className={styles.navLink}>Messages &#40;<span>{notes.messages}</span>&#41;</Link> : <Link href="/messages" className={styles.navLink}>Messages</Link>}
        {notes.trips ? <Link href="/trips" className={styles.navLink}>Trips &#40;<span >{notes.trips}</span>&#41;</Link> : <Link href="/trips" className={styles.navLink}>Trips</Link>}

      </div>

    </div>

    )

};

export default NotificationsDropdown;