import styles from './cards.module.css';

const TripCard = ({trip}) => {


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


  }
  let imgStyle = {
    objectFit: 'cover',
    width: '80%',
    aspectRatio: '1',
    borderRadius: '25px',
    transform: 'translate(0px, -10px)'
  }




  return (
    <div className='tripCard' style={cardStyle}>

      <img src={trip.photo} style={imgStyle} alt={'trip image'}></img>
      <div className='cardTitle'>
        <div style={{fontSize: '1rem'}}>{trip.tripTitle}</div>
        <div>{trip.destination}</div>
        <div style={{fontSize: '.8rem'}}>{trip.startDate} - {trip.endDate}</div>
        <div></div>
      </div>


    </div>

    )

};

export default TripCard;