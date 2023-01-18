import TextField from '@mui/material/TextField';

export default function TextArea({ label, value, setValue, placeholder }) {
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
      multiline
      placeholder={placeholder}
      fullWidth
    />
  );
}
