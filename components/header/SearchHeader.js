import React, {useEffect} from 'react';
import Logo from './Logo.js'
import Search from './Search.js'
import Sandwich from './Sandwich.js'
import GoogleMaps from '../trips/PlaceAutocomplete.js'
import axios from 'axios'

import styles from './header.module.css'

let data = {notifications: ['message', 'accepted', 'message', 'message', 'joinRequest', 'accepted']}

const SearchHeader = ({onSubmitHandler}) => {

  useEffect(() => {
    axios.get('/api/trips/currentUser')
      .then(response => {
        console.log(response)
      })
  }, [])

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