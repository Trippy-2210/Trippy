import { TextField, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EmptyHeader from '../../components/header/EmptyHeader.js';

function Signup() {
  const blankForm = {
    email: '',
    pw: '',
    cpw: ''
  }

  const [form, setForm] = useState(blankForm);

  const submitForm = () => {
    if (form.pw !== form.cpw) {
      alert('Passwords do not match!');
    } else {
      axios.post('../api/auth/signup', form)
        .then((response) => {
          if (response.data === 'wrong') {
            alert('That email address is already being used.');
          } else {
            window.location.replace('/users/profile/createprofile')
          }
        });
    }
  }

  return (
    <>
    <EmptyHeader />
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center"
      }}>
    Sign up <br /><br />
    <TextField
      label="Email"
      value={form.email}
      onChange={(e) => {
        e.preventDefault();
        let formCopy = {...form};
        formCopy.email = e.target.value;
        setForm(formCopy);
      }}
      /><br />
    <TextField
      label="Password"
      type="password"
      value={form.pw}
      onChange={(e) => {
        e.preventDefault();
        let formCopy = {...form};
        formCopy.pw = e.target.value;
        setForm(formCopy);
      }}
      /><br />
    <TextField
      label="Confirm Password"
      type="password"
      value={form.cpw}
      onChange={(e) => {
        e.preventDefault();
        let formCopy = {...form};
        formCopy.cpw = e.target.value;
        setForm(formCopy);
      }}
      /><br />
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          submitForm();
        }}
        >Signup</Button>
    </Box>
    </>
  );
}

export default Signup;
