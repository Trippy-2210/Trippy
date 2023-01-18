import { TextField, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
        .then(() => {window.location.replace('/')});
    }
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
    <TextField
      label="Confirm Password"
      value={form.cpw}
      onChange={(e) => {
        e.preventDefault();
        let formCopy = {...form};
        formCopy.cpw = e.target.value;
        setForm(formCopy);
      }}
      /><br /> <br />
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          submitForm();
        }}
        >Signup</Button>
    </Box>
  );
}

export default Signup;
