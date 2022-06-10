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
          <Button href = 'https://github.com/kaitdiaz01/Find-A-Flick'>GitHub Repo</Button>
          <Button href = 'https://kaitdiaz01.github.io/Find-A-Flick/'>Find-A-Flick</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Snack Movers</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href= ' https://fast-tundra-37022.herokuapp.com/'>SNACK Movers</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Text Editor</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle></CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};


export default ProjCard