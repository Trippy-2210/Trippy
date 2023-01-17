import TextField from '@mui/material/TextField';

export default function TextArea({ label, value, setValue, placeholder }) {
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
      multiline
      placeholder={placeholder}
      fullWidth
    />
  );
}
