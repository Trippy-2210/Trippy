import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import CloudinaryUpload from '../../../components/trips/CloudinaryUpload';
import { TextField, Button, Box } from '@mui/material';
import styles from './createProfileForm.module.css'

const UserInfo = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')
  const [photoUrl, setPhotoUrl] = useState('');

  const router = useRouter()

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
    axios.post('/api/profiles/form', {
      userId: '',
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      photo: photoUrl
    })
    .then(() => router.push('/trips'))
  }

  return (
  <>
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "flex-start"
      }}>

      <CloudinaryUpload label={'Upload Profile Photo'} url={photoUrl} setUrl={setPhotoUrl} centered={true}/>

      <div style={{ marginTop: 16, width: '45%', display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          sx={{ width: '47.5%' }}
          color='primary'
          label="First name"
          inputProps={{ minLength:1, maxLength: 20 }}
          value={firstName}
          onChange={handleFirstNameChange}
        />

        <TextField
          sx={{width: '47.5%' }}
          color='primary'
          label="Last name"
          inputProps={{ minLength:1, maxLength: 20 }}
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <p>Last name will only be shown in direct messages, not on your public profile.</p>

      <TextField
        color='primary'
        label='About me...'
        placeholder='About me...'
        multiline
        minRows={3}
        sx={{ margin: 1, width: '45%' }}
        inputProps={{ minLength:1, maxLength: 140 }}
        value={bio}
        onChange={handleBioChange}
      />

      <Button
        sx={{ margin: 1, width: '25%' }}
        color='primary'
        variant='contained'
        onClick={handleProfileCreation}
      >
        Submit
      </Button>
    </Box>
  </>
  )
}

export default UserInfo;

