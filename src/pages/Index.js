import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Shubham Bhardwaj personal website.  Full stack Developer, " +
      "Mongodb, Express.js, React.js,Node.js"
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with ES6+ Javascript.
          </p>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my personal website. Please feel free to read more{" "}
        <Link to="/about">About me</Link>, or you can check out my{" "}
        <Link to="/resume">Resume</Link>, <Link to="/projects">Projects</Link>,{" "}
        view <Link to="/stats">stats</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {" "}
        Source available <a href="https://github.com/XshubhamX">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
