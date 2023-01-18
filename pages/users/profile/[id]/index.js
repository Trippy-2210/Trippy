import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import UserInfo from '/home/itsnothalley/hackreactor/blue-ocean/Trippy/components/users/profile/UserInfo.js'
import UserTripList from '/home/itsnothalley/hackreactor/blue-ocean/Trippy/components/users/profile/UserTripList.js'

const fetcher = async (url) => {
  const res = await axios.get(url);
  return res.data;
}

const Profile = () => {
  let router = useRouter();
  let {id} = router.query;

  const { data, error, isLoading } = useSWR(`/api/profiles/${id}`, fetcher)

  // const fetcher = url => axios.get(url).then(res => res.data)

  // function useUser ({id}) {
  //   const { data, error, isLoading } = useSWR(`/api/profiles/${id}`, fetcher)
  //   return {
  //     user: data,
  //     isLoading,
  //     isError: error
  //   }
  // }

  // const { data, isLoading, isError } = useUser({id})

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Failed to load</h2>

  return (
    <>
      <UserInfo firstName={data.firstName} lastName={data.lastName} bio={data.bio} photo={data.photo} />
      <UserTripList />
    </>
  )
}



// export const getStaticProps = async (context) => {
//   const res = await fetch(`http://localhost:3000/api/profiles/${context.params.id}`)
//   const profile = await res.json()
//   return {
//     props: {
//       profile
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:3000/api/profiles`)

//   const profiles = await res.json() // getting error

//   const ids = profiles.map((profile) => profile._id)

//   const paths = ids.map((id) => ({params: {id: id.toString()}}))

//   return {
//     paths,
//     fallback: false
//   }
// }

export default Profile;