import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import hr from "../../images/init.png";
import smart from "../../images/docker.png";
import zom from "../../images/php.png";
import music from "../../images/datas.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Blog() {
    return (
        <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col
                            md={12}
                            className="certificate-description d-flex justify-content-start"
                        >
                            <Zoom left cascade>
                                <h1 className="aboutme-heading">Blogs</h1>
                            </Zoom>
                        </Col>
                        <Col md={3}>
                            <Fade bottom>
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid",
                                    }}
                                >
                                    <div className="projectContent">
                                        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                            Practical Git Commands
                                        </h5>
                                        <img src={hr} alt={hr} />
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={
                                                    "https://medium.com/@shruthisrao123/practical-git-commands-every-developer-should-know-e36f809e169f"
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}
                                            >
                                                <FaCode
                                                    id={`code`}
                                                    className={"icon"}
                                                    aria-label="Code"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600,
                                            }}
                                        >
                                            git clone, git add, git commit, git push → used to copy a repo, stage changes, save them, and upload to remote.

                                            git pull, git branch, git checkout, git merge → used to update local code, manage branches, switch context, and combine work.

                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Git Commands
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={3}>
                            <Fade bottom>
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid",
                                    }}
                                >
                                    <div className="projectContent">
                                        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                            Deployment of Containerized Application in EC2
                                        </h5>
                                        <img src={smart} alt={smart} />
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={
                                                    "https://medium.com/@shruthisrao123/deploying-containerized-application-in-ec2-with-reverse-proxy-6be1306c7990"
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}
                                            >
                                                <FaCode
                                                    id={`code`}
                                                    className={"icon"}
                                                    aria-label="Code"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Build and push your Docker image to a registry (Docker Hub/ECR), then SSH into the EC2 instance.  Install Docker, pull the image, and run it with docker run commands.
                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Docker,GitHub,Git,Reverse Proxy,EC2
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={3}>
                            <Fade bottom>
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid",
                                    }}
                                >
                                    <div className="projectContent">
                                        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                            Deployment of PHP & SQL Project
                                        </h5>
                                        <img src={zom} alt={zom} />
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={
                                                    "https://medium.com/@shruthisrao123/how-to-deploy-a-php-mysql-project-in-godaddy-cpanel-and-enable-ssl-certificate-491775c0b1a5"
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}
                                            >
                                                <FaCode
                                                    id={`code`}
                                                    className={"icon"}
                                                    aria-label="Code"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Set up a web server (Apache/Nginx) with PHP installed and configure it to serve your PHP application.
                                            Install and configure MySQL/MariaDB, connect your PHP app via database credentials, and manage schema with SQL scripts.

                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600,
                                        }}
                                    >
                                        GODADDY,CPANEL
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={3}>
                            <Fade bottom>
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid",
                                    }}
                                >
                                    <div className="projectContent">
                                        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                            From Raw to Insight: Data Analysis
                                        </h5>
                                        <img src={music} alt={music} />
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={
                                                    "https://medium.com/@shruthisrao123/from-raw-data-to-insights-a-visual-journey-into-data-analysis-b59c03d55a88"
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}
                                            >
                                                <FaCode
                                                    id={`code`}
                                                    className={"icon"}
                                                    aria-label="Code"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Data analysis involves collecting, cleaning, and transforming raw data into structured formats.
                                            It uses statistical, analytical, and visualization techniques to uncover patterns, trends, and actionable insights.
                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Power BI, Rapid API,Tableau,Python
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </div>
    );
}
