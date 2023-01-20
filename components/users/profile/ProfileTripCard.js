import styles from '../../trips/cards.module.css';

import Image from 'next/image'

const ProfileTripCard = ({trip}) => {


  let cardStyle = {

    width: '180px',
    height: '260px',
    position:' relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '25px',
    padding: '20px'
  }

  let imgStyle = {
    objectFit: 'cover',
    width: '90%',
    aspectRatio: '1',
    borderRadius: '25px',
    transform: 'translate(0px, -10px)'
  }

  return (
    <div className='tripCard' style={cardStyle}>

      <img src={trip.photo} style={imgStyle} alt={'trip image'}></img>
      <div className='cardTitle'>
        <div style={{fontSize: '1.5rem',  fontWeight: 'bold'}}>{trip.tripTitle}</div> {/*changed fontSize to 1.5 from 1, added bold fontWeight*/ }
        <div>{trip.destination}</div>
        <div style={{fontSize: '.8rem'}}>{trip.startDate} - {trip.endDate}</div>
        <div></div>
      </div>


     </div>

    )

};

export default ProfileTripCard;