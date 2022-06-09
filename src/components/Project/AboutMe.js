import React, {useState} from 'react';

import { 
    Container ,
} from 'reactstrap';


const AboutMe = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

        <Container style = {{backgroundColor: '#FBFBFB'}} fluid>
          <h1 className="display-3">Hello, my name is Nick Quinn and I'm a developer!</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>

    </div>
  );
};

export default AboutMe;