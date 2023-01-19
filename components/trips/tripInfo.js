import Image from 'next/image';

function TripInfo({data}) {

  return (
    <div id='tripInfoContainer'>
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
      <div className='tripDescriptionContainer'>
        <div>
          <h2>Trip description:</h2>
          <p>{data.description}</p>
        </div>
        <div>
          <h2>Planned activities:</h2>
          <ul>
            {data.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TripInfo;