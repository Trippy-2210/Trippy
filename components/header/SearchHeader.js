import React, {useEffect, useState} from 'react';
import Logo from './Logo.js'
import Search from './Search.js'
import Sandwich from './Sandwich.js'
import GoogleMaps from '../trips/PlaceAutocomplete.js'
import axios from 'axios'

import styles from './header.module.css'

let data1 = {notifications: ['message', 'accepted', 'message', 'message', 'joinRequest', 'accepted']}

const SearchHeader = ({onSubmitHandler}) => {

  const [data, setData] = useState(data1)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('/api/trips/currentUser')
      .then(response => {
        console.log('Search Header', response.data)
        setData(response.data)
        response.data[0].notifications.forEach(item => {
          axios.post('/api/notifications/user', {query: item})
            .then(note => {
              // console.log('NOTIFICATION TYPE', note.data.type)
              setNotes([...notes, note.data.type])
            })
        })
      })
  }, [])


  return(
    <div className={styles.header}>
      <div
      className={styles.headerContainer}    >
        <Logo />
        <Search onSubmitHandler={onSubmitHandler}/>
        {/* <GoogleMaps /> */}
        <Sandwich data={data} notes={notes}/>
      </div>

    </div>

    )

};

export default SearchHeader;