import TripCard from './TripCard.js';

import styles from './cards.module.css';

let trips = [
  {
    _id: 1,
    tripId: 1,
    ownerId: 1,
    tripTitle: 'Vacation in Smallville',
    destination: 'Smallville',
    startDate: 'June 21, 2023',
    endDate: 'June 30, 2023',
    description: 'helping with the farm',
    activities: ['fun stuff', 'other stuff'],
    budget: 1,
    photo: 'https://flxt.tmsimg.com/assets/p7893454_b_v13_aa.jpg',
    requests: [{ userId: 4, status: true }],
    users: [1, 2],
    messages: [1, 2, 3, 4],
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
    photo:
      'https://cdn.mos.cms.futurecdn.net/ujfM8sgekzFenoGfxLphhS-970-80.jpg.webp',
    requests: [{ userId: 5, status: true }],
    users: [1, 2],
    messages: [5, 6, 7],
  },
];

const MyTrips = ({}) => {
  return (
    <div
      className='myTrips'
      style={{
        width: '300px',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#1d53a48c',
        zIndex: '-4',
        borderRadius: '25px',
      }}
    >
      <h1>My Trips</h1>
      {trips && trips.map(trip => {
       return <TripCard trip={trip} key={trip._id}/>
      })}


    </div>
  );
};

export default MyTrips;
