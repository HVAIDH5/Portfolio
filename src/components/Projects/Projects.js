import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartbrain from "../../Assets/Projects/smartbrain.png";
import movieplex from "../../Assets/Projects/movieplex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieplex}
              isBlog={false}
              title="Movie Plex"
              description="This ia a Simple Movie Booking Application Website. Movie Plex is a website to provide the customers facility to book tickets for a movie online and to gather information about the movies and theaters"
              ghLink="https://github.com/HVAIDH5/SE_project_backend.git"
              demoLink="https://dazzling-torvalds-e63a8b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartbrain}
              isBlog={false}
              title="Face Recognition Brain"
              description="A simple webapp with login and register page that takes image as a URL
              and marks a boundary on a face detected in the image using Clarifai FaceDetection API. Deployed server on Heroku."
              ghLink="https://github.com/HVAIDH5/smart_brain_backend.git"
              demoLink="https://smart-brain-final121.herokuapp.com/"
            />
          </Col>

         

       
          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
