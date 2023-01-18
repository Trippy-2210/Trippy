import TripCard from './TripCard.js'

import styles from './cards.module.css';




const MyTrips = ({data}) => {



  return(
    <div className='myTrips' >

      {data && data.map(trip => {
       return <TripCard trip={data} />
      })}


    </div>

    )

};

export default MyTrips;