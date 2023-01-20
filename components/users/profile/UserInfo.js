import Image from 'next/image'

const UserInfo = ({ firstName, bio, photo, id }) => {
  return (
    <>
      <div className="user-info" style={{display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(130,160,205, 0.8)", padding: "0px", borderRadius: "9px"}}>
        <div className="profile-photo" style={{width: "150px", height: "150px", position: "relative", overflow: "hidden"}}>
          <Image style={{borderRadius: "50%"}} src={photo} alt="User profile photo" fill objectFit="cover"></Image>
        </div>
        <div className="name-and-bio" style={{width: "50%"}}>
          <h2 style={{marginTop: "40px"}}>{firstName}</h2>
          <p style={{marginBottom: "40px"}}>{bio}</p>
        </div>
      </div>
    </>
  )
}

export default UserInfo;
