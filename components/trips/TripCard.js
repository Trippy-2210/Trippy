

const TripCard = ({data}) => {


  return(
    <div className='tripCard' >

      <img src={data.photo}></img>
      <div className='cardTitle'>
        <div style={{fontSize: '1.2rem'}}>{data.tripTitle}</div>
        <div>{data.destination}</div>
        <div>{data.startDate}</div>
        <div>{data.endDate}</div>
      </div>


    </div>

    )

};

export default TripCard;