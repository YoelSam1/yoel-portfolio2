import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = ({ setActiveSection, activeSection }) => {
  const [expanded, setExpanded] = useState(false); // State to control navbar collapse

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false); // Collapse navbar when a link is clicked

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className="ms-auto me-5" 
        onClick={handleToggle} // Toggle the expanded state
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-center text-center">
          <Nav.Link
            onClick={() => { setActiveSection("about"); handleSelect(); }}
            className={`mx-2 ${activeSection === "about" ? 'text-white font-weight-bold' : 'text-secondary'}`} // Darker when active, lighter when inactive
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => { setActiveSection("projects"); handleSelect(); }}
            className={`mx-2 ${activeSection === "projects" ? 'text-white font-weight-bold' : 'text-secondary'}`} // Darker when active, lighter when inactive
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => { setActiveSection("skills"); handleSelect(); }}
            className={`mx-2 ${activeSection === "skills" ? 'text-white font-weight-bold' : 'text-secondary'}`} // Darker when active, lighter when inactive
          >
            Skills
          </Nav.Link>
          <Nav.Link
            onClick={() => { setActiveSection("contact"); handleSelect(); }}
            className={`mx-2 ${activeSection === "contact" ? 'text-white font-weight-bold' : 'text-secondary'}`} // Darker when active, lighter when inactive
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
