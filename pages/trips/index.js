import React, {useState, useEffect} from 'react';
import axios from 'axios'
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
        <div className='main' style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100vw',
              height: '100vh',
            }}>

              <div className='mainGrid' style={{
              display: 'grid',
              width: '60vw',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto',
              gridRowGap: '20px',
              justifyContent: 'space-between',
              height: '70vh',
              zIndex: '-10'
            }}>
                {searchlist && searchlist.map(trip => {
                  return <TripCard trip={trip} key={trip._id}/>
                })}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{fontSize: '2rem', textAlign: 'center', color: 'red'}}>Create a Trip</div>
          <MyTrips />
        </div>

      </div>
      </>


      )
  } else {
    return(
      <>
        <SearchHeader onSubmitHandler={onSubmitHandler}/>
        <div className='main' style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100vw',
              height: '100vh',
            }}>

              <div className='mainGrid' style={{
              display: 'grid',
              width: '60vw',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto',
              gridRowGap: '20px',
              justifyContent: 'space-between',
              height: '70vh',
              zIndex: '-10'
            }}>
                {list && list.map(trip => {
                  return <TripCard trip={trip} key={trip._id}/>
                })}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{fontSize: '2rem', textAlign: 'center', color: 'red'}}>Create a Trip</div>
          <MyTrips />
        </div>

      </div>
      </>


      )
  }


};

export default Main;


