// import useSWR from 'swr'
// // import { useRouter } from 'next/router'
// import UserTripListItem from './UserTripListItem.js'

// const fetcher = async (url) => {
//   const res = await axios.get(url);
//   return res.data;
// }

// const UserTrips = ({ ownerId }) => {
//   // let router = useRouter();
//   // let {id} = router.query;

//   const { data, error, isLoading } = useSWR(`/api/trips/${ownerId}`, fetcher)

//   if (isLoading) return <h2>Loading...</h2>
//   if (error) return <h2>Failed to load trips</h2>

//   return (
//     <>
//       <div className="user-trips">
//         {data.map((trip, i) =>  <UserTripListItem key={i} trip={trip}/>)}
//       </div>
//     </>
//   )
// }

// export default UserTrips;
