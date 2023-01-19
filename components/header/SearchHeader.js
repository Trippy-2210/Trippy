import React from 'react';
import Logo from './Logo.js'
import Search from './Search.js'
import Sandwich from './Sandwich.js'
import GoogleMaps from '../trips/PlaceAutocomplete.js'

import styles from './header.module.css'

let data = {notifications: ['message', 'accepted', 'message', 'message', 'joinRequest', 'accepted']}

const SearchHeader = ({onSubmitHandler}) => {



  return(
    <div className={styles.header}>
      <div
      className={styles.headerContainer}    >
        <Logo />
        <Search onSubmitHandler={onSubmitHandler}/>
        {/* <GoogleMaps /> */}
        <Sandwich data={data}/>
      </div>

    </div>

    )

};

export default SearchHeader;