import React from 'react';
import { Prompt } from 'react-router'




class Login extends React.Component {

render() {
return (
 
<div className="container col-md-5" style={{ padding: '1em 7em 0em 7em'}}>
<h1 className="title" style={{textAlign: "center"}}>Login</h1>

<div className="row">
<div className="col">
    
<form> 
<div className="form-group">
<input type="text" placeholder="Username/Email" className="form-control" required/> 
</div>
        
<div className="form-group">        
<input type="password" placeholder="Password"className="form-control" required/> </div> 
        
<button className="btn btn-info"
        type="submit">Log in</button>    
</form>
<br></br>
</div> 
</div>

<Prompt
  message="Are you sure you want to leave?"
/>

</div>

);
}
}

export default Login;