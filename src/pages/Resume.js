import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Certificate from "../components/Resume/Certificate";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import degrees from "../data/resume/degrees";
import certificates from "../data/resume/certificates";
import positions from "../data/resume/positions";
import { skills, categories } from "../data/resume/skills";

const sections = ["Education", "certificates", "Skills"];

const Resume = () => (
  <Main
    title="Resume"
    description="Shubham Bhardwaj Resume. MERN Developer"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      {/* <Experience data={positions} /> */}
      <Certificate data={certificates} />
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Resume;
