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
          <p className="lead">I am a student at UCF Coding Bootcamp learing to become a full stack developer.  I made this portfolio in react to practice my react skills.  The github buttonin the navbar will take you to my public github account to view my repositories, and the projects button will take you to a page so that you can see some of my work.  Those will also link to the specific repositories and any live links that may be associated with that project.</p>
        </Container>

    </div>
  );
};

export default AboutMe;