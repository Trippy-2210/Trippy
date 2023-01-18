import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';



function Poll() {
  const [title, setTitle] = useState("Ask a question?");
  const [options, setOptions] = useState(["Yes", "No"]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const submit = () => {
    setError("");
  }

  const onChange = (e) => {
    let query = e.target.value;
    console.log(query)
  }


  if(title.length < 5 || title.length > 60) {
    setError("title must be between 5 - 60 characters");
    return;
  }

  if(options.some((option) => option.length < 1 || option.length > 60)) {
    setError("Options must be between 1 - 60 characters");
    return;
  }

  return <div>
    <h1>Create a Poll</h1>

    <input value={title} onChange={onChange}/>
    <Container>
    <Stack spacing={2}>
      {options.map((option, i) => {
        <Item key={i}>
          <input value={option[0]}/>
        </Item>
      })}

    </Stack>
{/* Items in option array */}
<Item>
      {options[0]}
    </Item>
    <Item>
      {options[1]}
    </Item>
      <Button variant="text">Submit</Button>
      <Button variant="text">Submit</Button>
    </Container>

    </div>
}

export default Poll;