import React, { Component } from 'react';

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeTodoQuestion = this.onChangeTodoQuestion.bind(this);
    this.onChangeTodoOption1 = this.onChangeTodoOption1.bind(this);
    this.onChangeTodoOption2 = this.onChangeTodoOption2.bind(this);
    this.onChangeTodoOption3 = this.onChangeTodoOption3.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        todo_question: '',
        todo_option1: '',
        todo_option2: '',
        todo_option3: ''
    }
}

onChangeTodoQuestion(e) {
    this.setState({
        todo_question: e.target.value
    });
}

onChangeTodoOPtion1(e) {
  this.setState({
      todo_option1: e.target.value
  });
}

onChangeTodoOPtion2(e) {
    this.setState({
        todo_option2: e.target.value
    });
}

onChangeTodoOption3(e) {
    this.setState({
        todo_option3: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Question: ${this.state.todo_question}`);
    console.log(`Todo Option1: ${this.state.todo_option1}`);
    console.log(`Todo Option2: ${this.state.todo_option2}`);
    console.log(`Todo Option3: ${this.state.todo_option3}`);

    this.setState({
        todo_question: '',
        todo_option1: '',
        todo_option2: '',
        todo_option3: ''
    })
}    
  login() {
    this.props.auth.login(); 
  }
render() {
  const { isAuthenticated } = this.props.auth;
return (

<div className="container col-md-5 p-3">
{
          isAuthenticated() && (
              <div className="row justify-content-center">
            <h1>Create Poll</h1>  
          
            <div className="col-12">
            <div className="card-group">
            <div className="card shadow p-2 border-0">
            
            <div className="card-body">
            
            <form onSubmit={this.onSubmit}>
            
            <h5 className="card-title">Question
            <input type="" class="form-control form-control-lg" 
            placeholder="Share your thought"
            value={this.state.todo_question}
            onChange={this.onChangeTodoQuestion} required />
            </h5>
            
            <h6 className="card-title">Options
            
            <input type="text" className="form-control"
            placeholder="Option 1" 
            value={this.state.todo_option1}
            onChange={this.onChangeTodoOption1}required />
            
            <input type="text" className="form-control"
            placeholder="Option 2"
            value={this.state.todo_option2}
            onChange={this.onChangeTodoOption2}required />
            
            <input type="text" className="form-control"
            placeholder="Option 3" 
            value={this.state.todo_option3}
            onChange={this.onChangeTodoOption3}required />
            
            </h6>
            
            <input type="submit" value="Create Post" className="btn btn-primary" />
            
            </form>
            
            </div>
            </div>
            
            </div>
            </div> 
 
            </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4 className="row justify-content-center">
                You are not logged in! Please{' '}
                <a style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}>
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }


<br></br><br></br>
<br></br><br></br>
<br></br><br></br>
<br></br><br></br>

</div>

 );
}}
    
  export default CreatePoll;