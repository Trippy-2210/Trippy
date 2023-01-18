import Image from 'next/image';

function TripInfo({data}) {

  return (
    <div>
      <h1 className='tripInfoTitle'>{data.tripTitle}</h1>
      <p>{data.destination} | {data.startDate} - {data.endDate} | {('$').repeat(data.budget)}</p>
      <div className="tripInfoImageContainer">
        {/* <Image
          src={data.photo}
          alt='image of the destination city'
          layout='fill'
          objectFit='contain'
        /> */}
        <img
          className='tripInfoImage'
          src={data.photo}
          alt='image of the destination city'
        />
      </div>
      <p>{data.description}</p>
      <ul>
        {data.activities.map((activity) => (
          <li key={activity}>{activity}</li>
          ))}
      </ul>
    </div>
  )
}

export default TripInfo;