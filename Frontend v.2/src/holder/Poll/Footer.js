import React, { Component } from 'react';


import '../App.css';

class Footer extends Component {
  render() {
    return (
<div>
<div class="navbar bg-dark">

<a className="nav-link fab fa-google fa-2x 
col-3 col-md-3" href="#"></a>

<a className="nav-link fab fa-facebook fa-2x
col-3 col-md-3" href="#"></a>

<a className="nav-link fab fa-whatsapp fa-2x
col-3 col-md-3" href="#"></a>

<a className="nav-link fab fa-twitter fa-2x
col-3 col-md-3" href="#"></a>

</div>


<div className=" bg-dark col-sm s p-2">
All content copyright &copy; 2019
</div>
</div>

    );
  }
}

export default Footer;
