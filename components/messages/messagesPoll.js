import {useState, useEffect} from 'react';
import Poll from 'react-polls';

const pollQuestion = "Should we fly out tomorrow?";
const pollAnswersOptions = [
  {option: "Yes", votes: 2},
  {option: "No", votes: 15},
  {option: "I dont know", votes: 6},
];

function MessagesPoll() {

  const [pollAnswers, setPollAnswers] = useState([]);

  useEffect(() => {
    setPollAnswers(pollAnswersOptions);
  }, []);


  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setPollAnswers(newPollAnswers);
  };


  return(
    <div>
      <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote}/>
    </div>
  )
}

export default MessagesPoll;

