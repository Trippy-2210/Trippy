import ProfilePhoto from '../../../components/users/createprofile/ProfilePhoto.js'
import UserInfo from '../../../components/users/createprofile/UserInfo.js'
import CloudinaryWidget from '../../../components/trips/CloudinaryUpload.js'

const CreateProfile = () => {
  return (
    <>
      <h1>Create Profile</h1>
      <div className="create-profile-section">
        <CloudinaryWidget label={'Upload Profile Photo'} />
        <UserInfo />
      </div>
    </>
  )
}

export default CreateProfile;
