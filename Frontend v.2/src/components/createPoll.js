import React from 'react';
import axios from 'axios';
import './viewPoll.css';

class CreatePoll extends React.Component {     
  constructor(props) {
    super(props);

    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeOption1 = this.onChangeOption1.bind(this);
    this.onChangeOption2 = this.onChangeOption2.bind(this);
    this.onChangeOption3 = this.onChangeOption3.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        question: '',
        option1: '',
        option2: '',
        option3: ''
    }
}

onChangeQuestion(e) {
    this.setState({
        question: e.target.value
    });
}

onChangeOption1(e) {
  this.setState({
      option1: e.target.value
  });
}

onChangeOption2(e) {
    this.setState({
        option2: e.target.value
    });
}

onChangeOption3(e) {
    this.setState({
        option3: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Question: ${this.state.question}`);
    console.log(`Option1: ${this.state.option1}`);
    console.log(`Option2: ${this.state.option2}`);
    console.log(`Option3: ${this.state.option3}`);

    const newPoll = {
        question: this.state.question,
        option1: this.state.option1,
        option2: this.state.option2,
        option3: this.state.option3
    }

    axios.post('http://localhost:3050/polls/add', newPoll)
        .then(res => console.log(res.data));

    this.setState({
        question: '',
        option1: '',
        option2: '',
        option3: ''
    })
}

render() {
return (

<div className="container col-md-5 mt-3">
<h3 style={{textAlign: "center"}}>Create Poll</h3>   
<div className="card-group mt-3">
<div className="card shadow p-2 border-0">

<div className="card-body">

<form onSubmit={this.onSubmit}>

<h5 className="card-title">Question
<input type=""
className="form-control form-control-lg mt-3" 
placeholder="Share your thought" 
value={this.state.question}
onChange={this.onChangeQuestion} required />
</h5>

<h6 className="card-title">Options

<input type="" className="form-control mt-3" id="option1" 
name="poll" placeholder="Option 1" 
value={this.state.option1}
onChange={this.onChangeOption1} required />

<input type="" className="form-control mt-3 mb-3" id="option2" 
name="poll" placeholder="Option 2" 
value={this.state.option2}
onChange={this.onChangeOption2}required />

<input type="" className="form-control mt-3 mb-3" id="option3" 
name="poll" placeholder="Option 3" 
value={this.state.option3}
onChange={this.onChangeOption3} required />

</h6>

<input type="submit" value="Post" className="btn btn-primary" />

</form>

</div>
</div>

</div>



</div>
 );
}}
    
export default CreatePoll;