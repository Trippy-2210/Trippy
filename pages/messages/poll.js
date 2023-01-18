import {useState} from 'react';

function Poll() {
  const [title, setTitle] = useState("Do you like this poll?");
  const [options, setOptions] = useState(["Yes", "No"]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setError("");
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
    <container className="pollContainer">
    <form>
      <label for="first">First Option:</label>
      <input
      type="text"
      id="first"
      name="first"
      minlength="1"
      maxlength="60"
      />
      <label for="second">Second Option:</label>
      <input
      type="text"
      id="second"
      name="second"
      minlength="1"
      maxlength="60"
      />
    </form>

    </container>
    <button>Create Poll</button>
    </div>
}

export default Poll;