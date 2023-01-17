import TextField from '@mui/material/TextField';

export default function TextInput({ label, value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextField
      required
      id='standard-required'
      value={value}
      label={label}
      onChange={handleChange}
      variant='standard'
    />
  );
}
