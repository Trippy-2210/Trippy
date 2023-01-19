import React from 'react';
import Logo from './Logo.js'
import Search from './Search.js'
import Sandwich from './Sandwich.js'
import GoogleMaps from '../trips/PlaceAutocomplete.js'

import styles from './header.module.css'

let data = {notifications: ['message', 'accepted', 'message', 'message', 'joinRequest', 'accepted']}

const Header = ({cityFilter, onSubmitHandler}) => {


  return(
    <div className={styles.header}>
      <div
      className={styles.headerContainer}    >
        <Logo />
        <Search cityFilter={cityFilter} onSubmitHandler={onSubmitHandler}/>
        {/* <GoogleMaps /> */}
        <Sandwich data={data}/>
      </div>

    </div>

    )

};

export default Header;