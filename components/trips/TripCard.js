import styles from './cards.module.css';

const TripCard = ({trip}) => {


  let cardStyle = {

    width: '240px',
    height: '320px',
    position:' relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'antiquewhite',
    borderRadius: '25px',
    zIndex: '-10',

  }
  let imgStyle = {
    objectFit: 'cover',
    width: '90%',
    aspectRatio: '1',
    borderRadius: '25px',
    transform: 'translate(0px, -10px)'
  }




  return(
    <div className='tripCard' style={cardStyle}>

      <img src={trip.photo} style={imgStyle}></img>
      <div className='cardTitle'>
        <div style={{fontSize: '1.2rem'}}>{trip.tripTitle}</div>
        <div>{trip.destination}</div>
        <div>{trip.startDate}</div>
        <div>{trip.endDate}</div>
      </div>


    </div>

    )

};

export default TripCard;