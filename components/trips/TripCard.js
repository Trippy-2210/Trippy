import styles from './cards.module.css';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


const TripCard = ({trip}) => {

  //#c1f4ffe6
  //#4469d1e6
  //#ef6b6be6
  const colors = ['#ef6b6be6', '#4469d1e6', '#c1f4ffe6']
  let color = colors[Math.floor(Math.random() * 3)]

  const router = useRouter()

  const onClickHandler = () => {
    router.push(`/trips/${trip.tripId}`)
    console.log('hello')
  }

  let startDate = new Date(trip.startDate).toLocaleDateString('en-US')
  let endDate = new Date(trip.endDate).toLocaleDateString('en-US')
  let budget = ''
  for (let i = 0; i < trip.budget; i++) budget += '$'
  return (

      <div
      className={styles.tripCard}
      onClick={onClickHandler}
      style={{backgroundColor: color}}
      >

        <img src={trip.photo} alt={'trip image'}></img>

        <div className={styles.info} >
          <div className={styles.cardTitle}>{trip.tripTitle}</div>
          <div>{trip.destination}</div>
          <div>{budget}</div>
          <div style={{fontSize: '.8rem'}}>{startDate} - {endDate}</div>
          <div></div>
        </div>

      </div>

    )

};

export default TripCard;