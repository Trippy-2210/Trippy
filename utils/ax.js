//Stephen

//sample poll
class Poll {
  constructor(question, options) {
    this.question = question;
    this.options = options;
    if (options.length < 2) {
      throw new Error("A poll must have at least 2 options.");
    } else if (options.length > 10) {
      throw new Error("A poll cannot have more than 10 options.");
    }
  }

  displayPoll() {
    console.log(this.question);
    for (let i = 0; i < this.options.length; i++) {
      console.log(`${i + 1}. ${this.options[i]}`);
    }
  }
}

const poll = new Poll("What is your favorite color?", ["Red", "Blue", "Green"]);
poll.displayPoll();

// *************