import styles from './cards.module.css';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


const TripCard = ({trip}) => {

  const router = useRouter()


  let cardStyle = {

    width: '240px',
    height: '280px',
    position:' relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'antiquewhite',
    borderRadius: '25px',
    cursor: 'pointer',

  }
  let imgStyle = {
    objectFit: 'cover',
    width: '80%',
    aspectRatio: '1',
    borderRadius: '25px',
    transform: 'translate(0px, -10px)'
  }

  const onClickHandler = () => {
    router.push(`/trips/${trip.tripId}`)
    console.log('hello')
  }


  return (

      <div
      className={styles.tripCard}
      onClick={onClickHandler}
      >

        <img src={trip.photo} style={imgStyle} alt={'trip image'}></img>

        <div className={styles.cardTitle} >
          <div style={{fontSize: '1rem'}}>{trip.tripTitle}</div>
          <div>{trip.destination}</div>
          <div style={{fontSize: '.8rem'}}>{trip.startDate} - {trip.endDate}</div>
          <div></div>
        </div>

      </div>




    )

};

export default TripCard;