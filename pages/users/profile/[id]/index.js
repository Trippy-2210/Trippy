import UserInfo from '../../components/users/profile/UserInfo.js'
import UserTripList from '../../components/users/profile/UserTripList.js'


const Profile = ({ profile }) => {
  return (
    <>
      <UserInfo firstName={profile.firstName} lastName={profile.lastName} bio={profile.bio} photo={profile.photo} />
      <UserTripList />
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/profiles/${context.params.id}`)
  const profile = await res.json()
  return {
    props: {
      profile
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/profiles`)

  const profiles = await res.json() // getting error

  const ids = profiles.map((profile) => profile._id)

  const paths = ids.map((id) => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false
  }
}

export default Profile;