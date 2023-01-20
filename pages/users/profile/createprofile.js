import UserInfo from '../../../components/users/createprofile/UserInfo.js'

const CreateProfile = () => {
  return (
    <>
      <div className="create-profile-section" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Create Profile</h1>
        <UserInfo />
      </div>
    </>
  )
}

export default CreateProfile;
