const UserInfo = () => {
  return (
  <div className="user-info">
    <form>
      <input type="text" placeholder="First name"></input>
      <input type="text" placeholder="Last name"></input>
      <p>Last name will only be shown in direct messages, not on your public profile</p>
      <textarea placeholder="About me..."></textarea>
    </form>
  </div>
  )
}

export default UserInfo;

