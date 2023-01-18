import React from 'react';
import TripCard from '../../../components/trips/TripCard.jsx'
import MyTrips from './MyTrips.jsx'
import MyTrips from '../../../components/trips/MyTrips';

const Main = ({data}) => {


  return(
    <div className='main'>
      {/* <Card1 data={data}/> */}
      <div className='mainGrid'>
        {data.map(trip => {
          return <Card data={trip} key={trip._id}/>
        })}
      </div>

      <MyTrips />
    </div>

    )

};

export default Main;


