import React from 'react';
import Logo from './Logo.js'

import styles from './header.module.css'

let data = {notifications: ['message', 'accepted', 'message', 'message', 'joinRequest', 'accepted']}

const EmptyHeader = ({onSubmitHandler}) => {

  return(
    <div className={styles.header}>
      <div
      className={styles.headerContainer}    >
        <Logo />

      </div>

    </div>

    )

};

export default EmptyHeader;