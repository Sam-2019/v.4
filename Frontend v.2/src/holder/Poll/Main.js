import React, {Component} from 'react';


import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import polltwo from '../images/polltwo.jpg';
import pollthree from '../images/pollthree.jpg';
import pollfour from '../images/pollfour.jpg';


class Main extends Component {
render() {
return (
  
<Container>
    
<Row >
<Col>
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={pollfour}
alt="First slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={polltwo}
alt="Third slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={pollthree}
alt="Third slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</Col>


</Row>
</Container>

)
}
}

export default Main;