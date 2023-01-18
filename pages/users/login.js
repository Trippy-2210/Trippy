import { TextField, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const blankForm = {
    email: '',
    pw: ''
  }

  const [form, setForm] = useState(blankForm);

  const submitForm = () => {
    axios.post('../api/auth/login', form)
      .then (() => {window.location.replace('/')})
  }

  return (
    <Box>
    <TextField
      label="Email"
      value={form.email}
      onChange={(e) => {
        e.preventDefault();
        let formCopy = {...form};
        formCopy.email = e.target.value;
        setForm(formCopy);
      }}
      /><br /><br />
    <TextField
      label="Password"
      value={form.pw}
      onChange={(e) => {
        e.preventDefault();
        let formCopy = {...form};
        formCopy.pw = e.target.value;
        setForm(formCopy);
      }}
      /><br /> <br />
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
    </Box>
  );
}

export default Login;
