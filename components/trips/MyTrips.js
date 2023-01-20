import React, {useEffect, useState} from 'react'
import TripCard from './TripCard.js';
import styles from './cards.module.css';
import axios from 'axios'

// let trips = [
//   {
//     _id: 1,
//     tripId: 1,
//     ownerId: 1,
//     tripTitle: 'Vacation in Smallville',
//     destination: 'Smallville',
//     startDate: 'June 21, 2023',
//     endDate: 'June 30, 2023',
//     description: 'helping with the farm',
//     activities: ['fun stuff', 'other stuff'],
//     budget: 1,
//     photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
//     requests: [{ userId: 4, status: true }],
//     users: [1, 2],
//     messages: [1, 2, 3, 4],
//   },
//   {
//     _id: 2,
//     tripId: 2,
//     ownerId: 2,
//     tripTitle: 'Vacation in Gotham City',
//     destination: 'Gotham City',
//     startDate: 'May 21, 2023',
//     endDate: 'June 1, 2023',
//     description: 'Help me solve a riddle',
//     activities: ['fun stuff', 'other stuff'],
//     budget: 5,
//     photo:
//       'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
//     requests: [{ userId: 5, status: true }],
//     users: [1, 2],
//     messages: [5, 6, 7],
//   },
// ];

const MyTrips = ({ trips }) => {

  // const [trip, setTrip] = useState()

  // useEffect(() => {
  //   axios.get('/api/trips/currentUser')
  //     .then(response => {
  //       console.log(response)
  //     })
  // }, [])
  console.log('MY TRIPS', trips)


  return (
    <div className={styles.myTrips}>
      <h1>My Trips</h1>
      {trips && trips.map((trip, i)=> {
       return <TripCard trip={trip} key={i}/>
      })}


    </div>
  );
};

export default MyTrips;
