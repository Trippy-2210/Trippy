import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import UserInfo from '../../../../components/users/profile/UserInfo.js'
import UserTripList from '../../../../components/users/profile/UserTripList.js'

const Profile = () => {
  const [profileData, setProfileData] = useState({})
  let router = useRouter();
  let {id} = router.query;

  const fetcher = async (url) => {
    const res = await axios.get(url);
    return res.data;
  }

  const { data, error, isLoading } = useSWR(`/api/profiles/${id}`, fetcher)

  if (isLoading) return <h2>Loading...</h2>
  if (error) {
    console.log(error)
    return <h2>Failed to load profile</h2>
  }

  let user = data[0];

  return (
    <div>
      {user !== undefined ? <UserInfo firstName={user.firstName} lastName={user.lastName} bio={user.bio} photo={user.photo} id={user.userId}/> : null}
      {user !== undefined ? <UserTripList ownerId={user.userId}/> : null}
    </div>
  )
}

export default Profile;