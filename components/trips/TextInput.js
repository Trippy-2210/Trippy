import TextField from '@mui/material/TextField';

export default function TextInput({ label, value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextField
      id='standard'
      value={value}
      label={label}
      onChange={handleChange}
      variant='outlined'
    />
  );
}
