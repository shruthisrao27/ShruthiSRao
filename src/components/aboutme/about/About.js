import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={300}>
              <p className="home-about-body">
                My name is <b className="purple">Shruthi S Rao </b>
                and I am a <b className="purple">Information Science and Engineering </b>
                graduate at <b className="purple"> Nitte Meenakshi Institute Of Technology</b>
                in Bangalore, Karnataka.
                <br />
                <br />
                I am proficient in various programming languages such as &nbsp;
                <b className="purple">
                  {" "}
                  Python, HTML, CSS, and JavaScript,MySQL.{" "}
                </b>
                <br />
                <br />

                I also have experience working with data analysis tools such as &nbsp;

                <b className="purple">
                  {" "} Power BI,Tableau,Ms.Excel,Ms.Word,Ms.PowerPoint,Microsoft Suite
                  .{" "}
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks,Cloud Technologies.
                </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">building new web technologies and products. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
