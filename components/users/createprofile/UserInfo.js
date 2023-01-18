import { useState } from 'react'
import axios from 'axios'

const UserInfo = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleBioChange = (event) => {
    setBio(event.target.value)
  }

  const handleProfileCreation = (event) => {
    event.preventDefault()
    // axios.post()
    console.log('FORM SUBMITTED')
  }



  return (
  <div className="user-info">
    <form action="/api/profile/form" method="post">
      <label htmlFor="first">First name:</label>
      <input required type="text" name="firstName" minLength="1" maxLength="20" placeholder="First name" onChange={handleFirstNameChange} value={firstName}></input>

      <label htmlFor="last">Last name:</label>
      <input required type="text" name="lastName" minLength="1" maxLength="20" placeholder="Last name" onChange={handleLastNameChange} value={lastName}></input>

      <p>Last name will only be shown in direct messages, not on your public profile</p>

      <textarea required name="bio" minLength="20" maxLength="140" placeholder="About me..." onChange={handleBioChange} value={bio}></textarea>

      <button type="submit">Continue</button>
    </form>
  </div>
  )
}

export default UserInfo;

