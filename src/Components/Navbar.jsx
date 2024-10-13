import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = ({ setActiveSection, activeSection }) => {
  const [expanded, setExpanded] = useState(false); 

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false); 

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className="ms-auto me-5" 
        onClick={handleToggle} 
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-center text-center">
          <Nav.Link
            onClick={() => { setActiveSection("about"); handleSelect(); }}
            className={`mx-2 ${activeSection === "about" ? 'text-white font-weight-bold' : 'text-secondary'}`} 
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => { setActiveSection("projects"); handleSelect(); }}
            className={`mx-2 ${activeSection === "projects" ? 'text-white font-weight-bold' : 'text-secondary'}`} 
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => { setActiveSection("skills"); handleSelect(); }}
            className={`mx-2 ${activeSection === "skills" ? 'text-white font-weight-bold' : 'text-secondary'}`} 
          >
            Skills
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
