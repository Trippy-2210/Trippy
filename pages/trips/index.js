import React, {useState} from 'react';
import axios from 'axios'
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
  },
  {
    _id: 9,
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
    _id: 10,
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
    _id: 11,
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
    _id: 12,
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
    _id: 13,
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
    _id: 14,
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
    _id: 15,
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
    _id: 16,
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

  const [ list, setList ] = useState(data)
  const [ searchlist, setSearchlist] = useState([])
  const [ cityFilter, setCityFilter] = useState('')


  const onSubmitHandler = (event) => {
    event.preventDefault()
    let query = event.nativeEvent.target[0].value;

    axios.get('/api/trips/allTrips', {tripTitle: query})
    .then(response => {
      setSearchlist(response.data)
      console.log(response)

    })
  }



  return(
    <>
      <Header cityFilter={cityFilter} onSubmitHandler={onSubmitHandler}/>
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

      <MyTrips />
    </div>
    </>


    )

};

export default Main;


