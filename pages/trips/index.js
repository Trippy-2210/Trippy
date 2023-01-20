import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styles from './tripmain.module.css'
import TripCard from './../../components/trips/TripCard.js'
import MyTrips from './../../components/trips/MyTrips.js';
import SearchHeader from './../../components/header/SearchHeader.js';



const Main = ({}) => {

  const [ list, setList ] = useState([])
  const [ searchlist, setSearchlist] = useState([])


  const onSubmitHandler = (event) => {
    event.preventDefault()
    let query = event.nativeEvent.target[0].value;
    axios.post('/api/trips/searchTrips', {query: query})
      .then(response => {
        setSearchlist(response.data)
        console.log(response)
      })
  }

  useEffect(() => {
    axios.get('/api/trips/allTrips')
    .then(response => {
      setList(response.data)

    })
  },[])

  if (searchlist.length > 0) {
    return(
      <>
        <SearchHeader onSubmitHandler={onSubmitHandler} />
        <div className={styles.main} >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>

              <div className={styles.mainGrid} >
                {searchlist && searchlist.map(trip => {
                  return <TripCard trip={trip} key={trip._id}/>
                })}
        </div>
        <div className={styles.myTripsContainer}>
          <div className={styles.createTrip} >Create a Trip</div>
          <MyTrips />
        </div>

      </div>
      </>


      )
  } else {
    return(
      <>

        <SearchHeader onSubmitHandler={onSubmitHandler}/>
        <div className={styles.main}>

              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>

              <div className={styles.mainGrid}>
                {list && list.map(trip => {
                  return <TripCard trip={trip} key={trip._id}/>
                })}
        </div>
        <div className={styles.myTripsContainer}>
          <div className={styles.createTrip}>Create a Trip</div>
          <MyTrips />
        </div>

      </div>
      </>


      )
  }


};

export default Main;


