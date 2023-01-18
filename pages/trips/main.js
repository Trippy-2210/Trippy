import React from 'react';
import TripCard from './../../components/trips/TripCard.js'
import MyTrips from './../../components/trips/MyTrips.js';
import Header from './../../components/header/Header.js';

let data = [
  {
    _id: 1,
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'helping with the farm',
    activities:['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests:[{userId: 4, status: true}],
    users:[1,2],
    messages: [1, 2, 3, 4]
  },
  {
    _id: 2,
    tripId: 2,
    ownerId: 2,
    tripTitle: 'Vacation in Gotham City',
    destination: 'Gotham City',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'Help me solve a riddle',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{userId: 5, status: true}],
    users: [1,2],
    messages: [5, 6 ,7]
  },
  {
    _id: 3,
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'helping with the farm',
    activities:['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests:[{userId: 4, status: true}],
    users:[1,2],
    messages: [1, 2, 3, 4]
  },
  {
    _id: 4,
    tripId: 2,
    ownerId: 2,
    tripTitle: 'Vacation in Gotham City',
    destination: 'Gotham City',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'Help me solve a riddle',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{userId: 5, status: true}],
    users: [1,2],
    messages: [5, 6 ,7]
  },
  {
    _id: 5,
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'helping with the farm',
    activities:['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests:[{userId: 4, status: true}],
    users:[1,2],
    messages: [1, 2, 3, 4]
  },
  {
    _id: 6,
    tripId: 2,
    ownerId: 2,
    tripTitle: 'Vacation in Gotham City',
    destination: 'Gotham City',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'Help me solve a riddle',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{userId: 5, status: true}],
    users: [1,2],
    messages: [5, 6 ,7]
  },
  {
    _id: 7,
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'helping with the farm',
    activities:['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests:[{userId: 4, status: true}],
    users:[1,2],
    messages: [1, 2, 3, 4]
  },
  {
    _id: 8,
    tripId: 2,
    ownerId: 2,
    tripTitle: 'Vacation in Gotham City',
    destination: 'Gotham City',
    startDate: 'dateformat?',
    endDate: 'dateformat?',
    description: 'Help me solve a riddle',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{userId: 5, status: true}],
    users: [1,2],
    messages: [5, 6 ,7]
  }
]



const Main = ({}) => {


  return(
    <>
      <Header />
      <div className='main' style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100vw',
            height: '80vh',
            zIndex: '-10',
          }}>
            {/* <Card1 data={data}/> */}
            <div className='mainGrid' style={{
            display: 'grid',
            width: '60vw',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gridRowGap: '20px',
            justifyContent: 'space-between',
            height: '70vh',
          }}>
              {data && data.map(trip => {
                return <TripCard trip={trip} key={trip._id}/>
              })}
      </div>

      <MyTrips />
    </div>
    </>


    )

};

export default Main;


