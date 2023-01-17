import ProfilePhoto from '../../components/users/createprofile/ProfilePhoto.js'
import UserInfo from '../../components/users/createprofile/UserInfo.js'


function CreateProfile() {
  return (
    <>
      <h1>Create Profile</h1>
      <div className="create-profile-section">
        <ProfilePhoto />
        <UserInfo />
        <button>Continue to site</button>
      </div>
    </>
  )
}

export default CreateProfile;
