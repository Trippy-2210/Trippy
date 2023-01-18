import Image from 'next/image'

const UserInfo = ({ firstName, lastName, bio, photo }) => {
  return (
    <>
      <div className="user-info">
        <Image src={photo} alt="User profile photo"></Image>
        <h2>{firstName} {lastName}</h2>
        <p>{bio}</p>
      </div>
    </>
  )
}

export default UserInfo;
