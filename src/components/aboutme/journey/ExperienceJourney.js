import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date=" Jul 2025 "
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Qineos Software Private Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            <i>Software Developer Intern</i>
          </h6>
          <p>Reduced rendering time by 75% using optimized SQL queries and advanced database management techniques.</p>

          <p>Improved system performance by 40% through scalable Node.js architecture and RESTful API design.</p>

          <p>Enhanced backend reliability by integrating best practices for scalability, security, and maintainability.</p>

          <p>Collaborated in Agile environment, contributing to sprint planning, code reviews, and technical documentation.</p>

          <p>Learning Docker and Cloud technologies to strengthen deployment, scalability, and DevOps expertise.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Nov 2024 - May 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            YantraByte - YBI Foundations
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            <i>Data Analyst Intern</i>
          </h6>

          <p>Designed interactive Power BI dashboards, enhancing real-time KPI tracking and improving decision-making efficiency by 35%.</p>

          <p>Optimized SQL queries and streamlined database workflows, reducing data retrieval time by 60% with consistent reproducibility.</p>

          <p>Processed and visualized 1M+ records using Python (Pandas, NumPy, Matplotlib), ensuring accuracy and maintaining data quality.</p>

          <p>Automated repetitive data processing tasks with Python scripts, cutting manual effort by 50% and increasing efficiency.</p>

          <p>Implemented data validation checks to improve reliability and maintain integrity of analytics workflows.</p>

          <p>Developed reusable Python modules to standardize analysis pipelines and support scalability across projects.</p>

          <p>Collaborated in an Agile environment, contributing to sprint planning, code reviews, and technical documentation.</p>

          <p>Delivered analytics solutions aligned with business objectives, ensuring actionable insights and measurable impact.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
