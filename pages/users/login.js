import { TextField, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EmptyHeader from '../../components/header/EmptyHeader.js';

function Login() {
  const blankForm = {
    email: '',
    pw: ''
  }

  const [form, setForm] = useState(blankForm);

  const submitForm = () => {
    axios.post('../api/auth/login', form)
      .then ((response) => {
        if (response.data === 'wrong') {
          alert('Wrong username or password');
        } else {
          window.location.replace('/')
        }
      })
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
    Login<br /><br />
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
      <div>
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          submitForm();
        }}
        >Login</Button>&nbsp;
        <Button
        variant="contained"
        onClick={(e) => {
          window.location.replace('./signup')
        }}
        >Signup</Button>
        </div>
    </Box>
    </>
  );
}

export default Login;
