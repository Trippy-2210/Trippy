import Image from 'next/image'

const TripCard = ({trip}) => {
  let imgStyle = {
    objectFit: 'cover',
    width: '80%',
    aspectRatio: '1',
    borderRadius: '50px'
  };

  return (
    <div className='tripCardMsg v'>
      <img src={trip.photo} style={imgStyle} alt={'trip image'}/>
      <div className='cardTitleMsg v'>
        <div className='cardText'><h2>{trip.tripTitle}</h2></div>
        <div className='cardText'>{trip.destination}</div>
        <div className='cardText'>{trip.startDate.slice(5, 10)} - {trip.endDate.slice(5, 10)}</div>
        <div></div>
      </div>
    </div>
  )

};

export default TripCard;