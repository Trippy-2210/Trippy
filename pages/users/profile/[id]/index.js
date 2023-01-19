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

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Failed to load profile</h2>

  return (
    <div>
      <UserInfo firstName={data.firstName} lastName={data.lastName} bio={data.bio} photo={data.photo} id={data._id}/>
      {/* <UserTripList ownerId={id}/> */}
    </div>
  )
}

export default Profile;