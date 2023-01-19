import {useState} from 'react';



function PollForm() {
  const [pollForms, setPollForms] = useState('');

const handleChange = () => {

}
 return(
  <div>
    {pollForms.map((input, i) => {
      return(
        <div key={i}>
          <input option='option' placeholder='option'/>
        </div>
      )
    })}
  </div>
 )
}

export default PollForm;