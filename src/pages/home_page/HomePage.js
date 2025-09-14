import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import Blog from "../../components/blogs/Blog";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHRUTHI S RAO</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/shruthisrao27"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/shruthi-s-rao-05b866214/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.instagram.com/shru27_06/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://twitter.com/Shruthisrao3"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="mailto:shruthisrao30@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20, borderColor: "#00bfff", position: "relative" }}>
              <div className="img-home-main" style={{ position: "relative", display: "inline-block" }}>
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./shruthi.png"
                      alt="home pic"
                      className="img-fluid"
                      style={{ borderRadius: "50%", border: "4px solid #b061df" }}
                    />
                    {/* Open to Work Tag */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "35%",
                        transform: "translateY(150%)",
                        backgroundColor: "#b061df",
                        color: "white",
                        fontWeight: "bold",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "14px",
                      }}
                    >
                      Open to Work
                    </span>
                  </Fade>
                </Tilt>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Blog />
      <Contactus />
    </section >
  );
}
