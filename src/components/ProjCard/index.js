import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ProjCard = (props) => {
    const [isOpen, setIsOpen] = useState();

    const toggle = () => setIsOpen(!isOpen);
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Find a Flick</CardTitle>
          <CardText>Find a flick, click a movie genre and get a title and trailer for that genre!</CardText>
          <Button href = 'https://kaitdiaz01.github.io/Find-A-Flick/'>Find-A-Flick</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Snack Movers</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content!</CardText>
          <Button href= ' https://fast-tundra-37022.herokuapp.com/'>SNACK Movers</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Password Generator</CardTitle>
          <CardText>Generate a password for your login!</CardText>
          <Button href = 'https://nquinn95.github.io/password-generator/'>Check it out!</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Employee Managemnt System</CardTitle>
          <CardText>Created an Employee Managemnt System to add employees, track salaries and more!</CardText>
          <Button href = 'https://drive.google.com/file/d/13W6vdhSt3FKXdrXc5FlN8CcXoFHZzCzl/view'>Checkout a video of how it works!</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>The First Thing I ever did!</CardTitle>
          <CardText>Everybody has to start somewhere!</CardText>
          <Button href = 'https://nquinn95.github.io/code-refractor/'>Check it out!</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>First portfolio</CardTitle>
          <CardText>My very first portfolio!</CardText>
          <Button href = 'https://nquinn95.github.io/nick-quinn-portfolio/'>Check it out</Button>
        </Card>
      </Col>
    </Row>
  );
};


export default ProjCard