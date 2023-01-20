import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styles from './tripmain.module.css'
import TripCard from './../../components/trips/TripCard.js'
import MyTrips from './../../components/trips/MyTrips.js';
import SearchHeader from './../../components/header/SearchHeader.js';


const ctstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px',
  width: '80%',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: 'rgba(240, 122, 122, 0.808)',
  fontSize: '1.8rem',
  boxShadow: '4px 4px 0px 0px rgba(156, 45, 45, 0.808)',
  cursor: 'pointer'
}


const Main = ({}) => {

  const [ list, setList ] = useState([])
  const [ searchlist, setSearchlist] = useState([])
  const [ createTripStyle, setCreateTripStyle] = useState(ctstyle)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let query = event.nativeEvent.target[0].value;
    axios.post('/api/trips/searchTrips', {query: query})
      .then(response => {
        setSearchlist(response.data)
        console.log(response)
      })
  }

  const createTripClickHandler = () => {
    setCreateTripStyle({...createTripStyle, transform: 'translate(2px, 2px)'})
    console.log('hello')
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
          <div className={styles.createTrip} style={createTripStyle} onClick={createTripClickHandler}>Create a Trip</div>
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
          <div className={styles.createTrip} style={createTripStyle} onClick={createTripClickHandler} >Create a Trip</div>
          <MyTrips />
        </div>

      </div>
      </>


      )
  }


};

export default Main;


