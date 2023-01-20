import {useState, useEffect} from 'react';
import Link from 'next/link'
import Poll from 'react-polls';
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
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ViewPoll() {


  const [pollData, setPollData] = useState({
    title: "Should we fly tomorrow?",
    options: [
      {
        name: "Yes",
        votes: 40,
      },
      {
        name: "No",
        votes: 60,
      },
    ],
  });

  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalVotes = pollData.options.reduce(
    (acc, option) => acc + option.votes,
    0
  );

  const maxIndex = pollData.options.reduce((acc, option, index) => {
    if (option.votes > pollData.options[acc].votes) {
      return index;
    }
    return acc;
  }, 0);

  const castVote = (index, number) => {
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
      setVoted(true);
    }, 4000);
  };

  return (
    <Container maxW="container.lg">


      <Container maxW="container.md" mt={6} shadow="lg" p={8} rounded="2xl">
        {pollData.title}
        {voted ? (
          <Stack spacing={4} mb={4}>
            {pollData.options.map((option, index) => (
              <Item key={index} pos="relative">

                <LinearProgress
                  variant="determinate"
                  colorScheme={index === maxIndex ? "green" : "blue"}
                  value={option.votes}
                  height="8"
                  max={totalVotes}
                />
                <Typography variant="body2" color="textSecondary">{`${Math.round(option.votes)}%`}</Typography>
                <div>
                {option.name}
                </div>


              </Item>
            ))}
          </Stack>
        ) : (
          <Stack spacing={2} mb={4}>
            {pollData.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => castVote(index)}
                isLoading={loading}
                loadingText="Casting Vote"
                disabled={loading}
              >
                {option.name}
              </Button>
            ))}
          </Stack>
        )}
      </Container>
      <Button variant="contained">
      <Link href="/messages/index">Back to messages</Link>
      </Button>

    </Container>

  );
};

export default ViewPoll;