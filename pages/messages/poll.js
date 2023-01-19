import {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Poll = () => {
  return(
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Travel</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="yes" />
        <FormControlLabel value="no" control={<Radio />} label="no" />
        <FormControlLabel value="idk" control={<Radio />} label="idk" />
      </RadioGroup>
    </FormControl>
  )
}

export default Poll;