import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import UserInfo from '../../../../components/users/profile/UserInfo.js'
import UserTripList from '../../../../components/users/profile/UserTripList.js'
import Header from '../../../../components/header/Header.js';

import styles from './profile.module.css'

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

  const styleObj = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "65%",
    margin: "50px auto",
    gap: "50px"
  }

  return (
    <>
      <Header />
      <div className="user-info-box" style={styleObj}>
        <div>
          {user !== undefined ? <UserInfo firstName={user.firstName} lastName={user.lastName} bio={user.bio} photo={user.photo} id={user.userId}/> : null}
        </div>
        <div>
          {user !== undefined ? <UserTripList ownerId={user.userId}/> : null}
        </div>
      </div>
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
    </>
  )
}

export default Profile;