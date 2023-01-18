import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import UserInfo from '../../../../components/users/profile/UserInfo.js'
import UserTripList from '../../../../components/users/profile/UserTripList.js'

// const fetcher = async (url) => {
//   const res = await axios.get(url, {userId});
//   return res.data;
// }

// const { data, error, isLoading } = useSWR(`/api/profiles/${id}`, fetcher)

// if (isLoading) return <h2>Loading...</h2>
// if (error) return <h2>Failed to load profile</h2>

const Profile = () => {
  const [profileData, setProfileData] = useState({})
  let router = useRouter();
  let {id} = router.query;

  // console.log('OOGA BOOGA undefined id??:', id);

  useEffect(() => {
    axios.get(`/api/profiles/${id}`)
    .then((res) => setProfileData(res.data))
    .catch((err) => `Error `)
  })

  return (
    <div>
      <UserInfo firstName={profileData.firstName} lastName={profileData.lastName} bio={profileData.bio} photo={profileData.photo} id={profileData._id}/>
      {/* <UserTripList ownerId={id}/> */}
    </div>
  )
}

export default Profile;