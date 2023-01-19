import TextField from '@mui/material/TextField';

export default function TextInput({ label, value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextField
      id={label}
      value={value}
      label={label}
      onChange={handleChange}
      sx={{ width: 300 }}
      variant='outlined'
    />
  );
}
