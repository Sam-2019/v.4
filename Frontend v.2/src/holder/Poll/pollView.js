import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pic from "../images/pic.png"
import './pollView.css';

var Question = props => (
    <tr>
        <td>{props.todo.todo_question}</td>
        <td>{props.todo.todo_option1}</td>
        <td>{props.todo.todo_option2}</td>
        <td>{props.todo.todo_option3}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

class PollView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {questions: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/view/')
            .then(response => {
                this.setState({questions: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    questionList() {
        return this.state.questions.map(function(currentQuestion, i) {
            return <Question question={currentQuestion} key={i} />;
        });
    }
      

render() {
return (

<div className='container col-md-5 p-3' >
       
<h1 style={{textAlign: "center"}}>Polls</h1> 

       { this.state.list.map(item =>
        <div key={item.objectID}>
     
<div className="row  justify-content-center">
<div className="col-12">

<div className="card-group">
<div className="card shadow p-2 border-0">
    
<div className="card-header border-0 ">
    <div className="media ">
        <img src={pic} className="mr-2 image rounded-circle" alt="..."  />
        <div className="media-body">
        <h5 className="mb-0">{item.fName}</h5>
        <figcaption className="figure-caption one">@{item.uName}</figcaption> 
    </div>
</div>
</div>
<div className="card-body">
<h5 className="card-title">{item.pQuestion}</h5>

<form id='vote-form'>

<div >
<input type="radio"
name="poll" id="option1" value="Option1"/>
<label  for="Option1">{item.options.option1}</label>
</div>

<div >
<input type="radio"
name="poll" id="option2" value="Option2"/>
<label  for="Option2">{item.options.option2}</label>
</div>

<div >
<input type="radio"
name="poll" id="option3" value="Option3"/>
<label  for="Option3">{item.options.option3}</label>
</div>

</form>

</div>
<div className="card-footer bg-transparent border-0 form-check-inline">
   
<button className="btn btn-info mr-2" type="button">Vote</button> 
<figcaption className="figure-caption one">
<small className="text-muted">4 votes</small>
</figcaption>

</div>

</div>
</div>

<br></br>

</div> 
</div>
        
</div>
    )}
</div>
);
}}
   
    
  export default PollView;