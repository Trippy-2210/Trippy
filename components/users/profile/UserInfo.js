import Image from 'next/image'

const UserInfo = ({ firstName, bio, photo, id }) => {
  return (
    <>
      <div className="user-info">
        <Image src={photo} alt="User profile photo" width="100" height="100"></Image>
        <h2>{firstName}</h2>
        <p>{bio}</p>
      </div>
    </>
  )
}

export default UserInfo;
