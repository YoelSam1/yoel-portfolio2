import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import NavigationBar from '../Components/Navbar';

// Import images
import jsFrameworksCA from '../Assets/images/JavaScript-Frameworks-CA.png';
import projectExam2 from '../Assets/images/Project-Exam-2.png';
import semesterProject2 from '../Assets/images/Semester-Project-2.png';

const projects = [
  {
    title: "Semester Project 2",
    description: "This is a description of Semester Project 2.",
    imageUrl: semesterProject2,
    githubUrl: "https://github.com/YoelSam1/Semester-Project-2",
    liveUrl: "https://semester-project-2-yoel.netlify.app/",
  },
  {
    title: "JavaScript Frameworks CA",
    description: "A React-based eCommerce store where users can browse products, add items to a cart, and complete purchases through a checkout process. The app features a searchable product list, individual product pages, and a validated contact form. It integrates with a RESTful API for product data and transactions.",
    imageUrl: jsFrameworksCA,
    githubUrl: "https://github.com/YoelSam1/Front-end-React-E-com",
    liveUrl: "https://react-ca-yoel.netlify.app/",
  },
  {
    title: "Project Exam 2",
    description: "This is a description of Project Exam 2.",
    imageUrl: projectExam2,
    githubUrl: "https://github.com/YoelSam1/Yoel-projectexam2",
    liveUrl: "https://funny-sprinkles-8fcd40.netlify.app/",
  },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(window.location.hash.replace('#', '') || 'about');

  useEffect(() => {
    // Update URL when the active section changes
    window.location.hash = activeSection;
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <section id="about" className="bg-warning text-dark py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
            <div className="container text-center">
              <h1 className="mb-5 mt-5">About Me</h1>
              <p className="lead">I am a passionate developer with experience in building dynamic web applications.</p>
              <p>My journey in technology started when I was curious about how websites work...</p>
            </div>
          </section>
        );

      case "projects":
        return (
          <section id="projects" className="bg-primary text-light py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
            <div className="container text-center">
              <h1 className="mb-5 mt-5">My Projects</h1>
              <Row>
                {projects.map((project, index) => (
                  <Col key={index} md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                      <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                      <Card.Body>
                        <Card.Title className="mb-3">{project.title}</Card.Title>
                        <Card.Text className="mb-4">{project.description}</Card.Text>
                        <div className="d-flex justify-content-center">
                          <Button href={project.githubUrl} target="_blank" className="me-2" variant="outline-primary">
                            GitHub Repo
                          </Button>
                          <Button href={project.liveUrl} target="_blank" variant="outline-success">
                            Live Site
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
        );

      case "skills":
        return (
          <section id="skills" className="bg-info text-white py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
            <div className="container text-center">
              <h1 className="mb-5 mt-5">Skills</h1>
              <Row>
                <Col md={4}>
                  <h5>Front-End Development</h5>
                  <p>HTML, CSS, JavaScript, React, Bootstrap</p>
                </Col>
                <Col md={4}>
                  <h5>Back-End Development</h5>
                  <p>Node.js, Express, MongoDB, REST APIs</p>
                </Col>
                <Col md={4}>
                  <h5>Other Skills</h5>
                  <p>Git, Agile Methodologies, UI/UX Design</p>
                </Col>
              </Row>
            </div>
          </section>
        );

      case "contact":
        return (
          <section id="contact" className="bg-secondary text-white py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
            <div className="container text-center">
              <h1 className="mb-5 mt-5">Contact</h1>
              <p>If you'd like to get in touch, feel free to reach out!</p>
              <p>Email: <a href="mailto:your.email@example.com" className="text-light">your.email@example.com</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-light">linkedin.com/in/yourprofile</a></p>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <NavigationBar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
};

export default Portfolio;
