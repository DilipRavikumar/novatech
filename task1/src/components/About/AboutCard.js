import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dilip </span>
            from <span className="purple"> Tamil Nadu
            , India.</span>
            <br /> I am a Pre final year student pursuing an Information Technology (IT)
            in Saranathan College Of Engineering at Trichy.
            <br />
            Additionally, I am currently learing about the React,js
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgba(17, 178, 233, 0.9) " }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dilip</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
