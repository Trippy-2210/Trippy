import {useState, useEffect} from 'react';
import Link from 'next/link'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const CreatePolls = ({pollToggle, resultToggle}) => {
  const [title, setTitle] = useState("Should we fly tomorrow?");
  const [options, setOptions] = useState(["Yes", "No"]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setError("");

    // Validate title
    if (title.length < 5 || title.length > 60) {
      setError("Title must be between 5 and 100 characters");
      return;
    }

    // Validate options
    if (options.some((option) => option.length < 1 || option.length > 60)) {
      setError("Options must be between 1 and 60 characters");
      return;
    }


  };

  return (
    <div className='pollContainer'>
      <Container>
      <Container mt={6} shadow="lg" p={8} rounded="2xl">
        <h1>Create a poll</h1>
        <Input
          placeholder="Poll Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Stack spacing={4}>
          {options.map((option, index) => (
            <Item key={index}>

                <Input
                  placeholder="Option"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                />

                <Stack direction="row" ml={2}>
                  <Button
                    onClick={() => {
                      const newOptions = [...options];
                      newOptions.splice(index, 1);
                      setOptions(newOptions);
                    }}
                    disabled={options.length <= 2}
                    colorScheme="red"
                    variant="ghost"
                  >
                    <DeleteIcon />
                  </Button>

                  <Button
                    onClick={() => {
                      const newOptions = [...options];
                      newOptions.push("");
                      setOptions(newOptions);
                    }}
                    disabled={
                      options.length >= 10 || index !== options.length - 1
                    }
                    colorScheme="green"
                  >
                    <AddIcon />
                  </Button>
                </Stack>

            </Item>
          ))}
        </Stack>

        {error && (
          <Alert mt={4} status="error">
            {error}
          </Alert>
        )}

        <Button variant="contained" onClick={resultToggle}>
          Create Poll
        </Button>

        <Button variant="contained" onClick={pollToggle}>
          Back to messages
        </Button>
      </Container>
    </Container>
    </div>
  );
};

export default CreatePolls;