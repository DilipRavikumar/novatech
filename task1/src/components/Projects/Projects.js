import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import chatify from "../../Assets/Projects/chatify.png";
import Smart_Attendance from "../../Assets/Projects/Smart_Attendance.png";
import emotion from "../../Assets/Projects/emotion.png";


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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smart_Attendance}
              isBlog={false}
              title="Smart Attendance using OpenCV"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chat Bot"
              description="Chatbots are typically powered by artificial intelligence (AI), which allows them to learn and improve over time. They can also be programmed to follow a specific script or flow, or they can be more open-ended and allow for natural conversation.."
              ghLink="https://github.com/DilipRavikumar/Plant_AI"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection"
              description="Emotion detection is the task of identifying the emotional state of a person. This can be done by analyzing facial expressions, voice, or text. In Python, emotion detection can be implemented using machine learning techniques."
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
