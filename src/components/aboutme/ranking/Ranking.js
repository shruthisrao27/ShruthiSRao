import React from "react";
import { FaAward } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Badges() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Here are my badges</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
        
            <a
              href="https://www.credly.com/badges/38145a65-8fbc-4832-a0d6-283933acec71/public_url"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaAward />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.credly.com/badges/a098932f-c175-4b39-9117-7b9e45b9e9fb/public_url"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaBell />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.credly.com/badges/ded743e0-1ea2-4649-99f7-ab3ed18782b8/public_url"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaMedal />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.credly.com/badges/58e6d04b-9c15-41a4-a414-71f9385bf71d/public_url"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaStar />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.credly.com/badges/dfaaa198-d84a-47de-b335-87831e9d4740/public_url"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaTrophy />
              </Zoom>
            </a>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
