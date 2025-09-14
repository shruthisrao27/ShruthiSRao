import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import hr from "../../images/hr.png";
import ci from "../../images/super.jpg";
import smart from "../../images/kirana.png";
import eco from "../../images/kareto.png";
import pp from "../../images/ecom.png";
import meal from "../../images/crud.png";
import ac from "../../images/resume.jpg";
import age from "../../images/news.png";
import calculator from "../../images/zom.png";
import calendar from "../../images/music.png";
import dc from "../../images/dc.png";
import sims from "../../images/calc.png";
import { FaCode } from "react-icons/fa";
export default function Side() {
    return (
        <section className="home-section">
            <Container fluid id="home">
                <Particle />
                <Container className="home-content">
                    <div
                        className="d-flex justify-content-center"
                        width="100%"
                        style={{ backgroundColor: "#fbd9ad" }}
                    >
                        <Zoom left cascade>
                            <h1 style={{ color: "rgb(134 61 176" }}>TASKS</h1>
                        </Zoom>
                    </div>
                    <div>
                        <div>
                            <Container fluid className="certificate-section" id="about">
                                <Container>
                                    <Row>
                                        <Col md={12} className="mt-5">
                                            <Row className="g-5">

                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Kirana e-Billing Software
                                                                </h5>
                                                                <img src={smart} alt={smart} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/Kirana-e-billing-software"
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
                                                                    Simplifying your store billing with smart, fast, and accurate e-invoicing.
                                                                    Manage sales, inventory, and reports—all in one easy-to-use platform.
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
                                                                HTML,CSS,JS,PHP, SQL
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    ShobaHyperMart Shopping
                                                                </h5>
                                                                <img src={ci} alt={ci} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/ShobaHyperMart-EcommerceWebsite"
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
                                                                    Your one-stop destination for daily essentials, fresh produce, and more.
                                                                    Quality products, great prices, and a shopping experience that’s always convenient
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
                                                                React JS, HTML,CSS, JS,RAZORPAY API,MATERIAL UI
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Korieato - Korean Food Site
                                                                </h5>
                                                                <img src={eco} alt={eco} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/KORIEATO"
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
                                                                    Experience authentic Korean flavors, from sizzling BBQ to savory street eats.
                                                                    Fresh ingredients, bold taste, and a culinary journey in every bite.

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
                                                                HTML,CSS,JS
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>

                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Human Resource Analytics
                                                                </h5>
                                                                <img src={hr} alt={hr} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/HR-ANALYTICS"
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
                                                                    Developed an interactive HR analytics dashboard in Tableau to visualize demographics, attrition trends, and key HR metrics.
                                                                    Enabled data-driven insights and improved decision-making through visual storytelling and real-time filters.
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
                                                                Tableau,MS Word
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>

                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Ecommerce Sales Analysis
                                                                </h5>
                                                                <img src={pp} alt={pp} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/Ecommerence-Sales-Analysis"
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
                                                                    Created an Excel-based Ecommerce Sales Analysis dashboard  to visualize revenue, order trends, and product performance.
                                                                    Used pivot tables, slicers, and charts to enable quick insights into regional sales and customer purchase behavior.

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
                                                                MS Excel,MS Word
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    CRUD Task Management Application
                                                                </h5>
                                                                <img src={meal} alt={meal} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/CRUD-TASK-MANAGEMENT-APPLICATION"
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
                                                                    Developed a CRUD Task Management Application using MERN stack with HTML, CSS, and JavaScript for task creation, editing, deletion, and status tracking.
                                                                    Implemented a responsive UI and integrated MongoDB for persistent storage and real-time task updates.

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
                                                                HTML, CSS, JavaScript, React JS,Node JS,Mongo DB,Express JS
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Resume Screening Website
                                                                </h5>
                                                                <img src={ac} alt={ac} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/Resume-tracker"
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
                                                                    Built a Resume Screening Application using NLP to automatically extract and rank candidate profiles based on job descriptions.
                                                                    Implemented text preprocessing, keyword matching, and similarity scoring to streamline the recruitment process.

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
                                                                NLP,Pickle,StreamLit
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    News Aggregator
                                                                </h5>
                                                                <img src={age} alt={age} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/News-Aggregator"
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
                                                                    Developed a News Aggregator web app using Django, HTML, CSS, and JavaScript to fetch and display real-time news from multiple sources.
                                                                    Categorized news by topics and enabled search and filter functionalities for enhanced user experience.

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
                                                                Django,Web Scaping, HTML, CSS, JavaScript
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Zomato Restaurant Analysis
                                                                </h5>
                                                                <img src={calculator} alt={calculator} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/Zomato-Restaurant-Analysis"
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
                                                                    Designed a Zomato Restaurant Analysis dashboard in Power BI to visualize key metrics like ratings, cuisine popularity, and delivery timelines.
                                                                    Enabled data-driven insights into customer preferences and restaurant performance across different locations.

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
                                                                PowerBI, MS Word
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Digital Clock
                                                                </h5>
                                                                <img src={dc} alt={dc} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/Digital-Clock"
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
                                                                    Create a sleek, responsive digital clock with HTML, CSS, and JavaScript. Display real-time hours, minutes, and seconds,
                                                                    and update automatically. Customize its style and layout using CSS for a modern, functional timekeeping experience.
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
                                                                HTML, CSS, JavaScript
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Music Player System
                                                                </h5>
                                                                <img src={calendar} alt={calendar} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/music-player"
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
                                                                    Developed a web-based music player using HTML, CSS, and JavaScript with features like play, pause, skip, and volume control.
                                                                    Implemented responsive UI and dynamic playlist handling for an engaging user experience.

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
                                                                HTML, CSS, JavaScript
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                <Col md={3} className="col-sm-12 col-md-4">
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
                                                                    Dual Scientific Calculator
                                                                </h5>
                                                                <img src={sims} alt={sims} />
                                                                <div className="project--showcaseBtn">
                                                                    <a
                                                                        href={
                                                                            "https://github.com/shruthisrao27/Scientific-Calculator"
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
                                                                    The Dual Mode Calculator project is a web application created with HTML, CSS, and JavaScript. It offers two modes:
                                                                    basic and scientific, providing essential arithmetic functions and advanced calculations. The user-friendly interface
                                                                    and responsive design ensure seamless use across various devices.
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
                                                                HTML,CSS,JavaScript
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                        </div>
                    </div>
                </Container>
            </Container>
        </section>
    );
}
