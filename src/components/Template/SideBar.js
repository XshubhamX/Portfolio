import React from "react";
import { Link } from "react-router-dom";
import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env;
// set automatically from package.json:homepage
console.log(PUBLIC_URL);

const SideBar = () => (
  <>
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/shubham.png`} alt="" />
        </Link>
        <header>
          <h2>Shubham Bhardwaj</h2>
        </header>
      </section>
      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Shubham. I love to make amazing Web Applications using latest Technologies. I am
          currently pursuing Btech Computer Science, Engineering at
          <a target="_blank" rel="noreferrer" href="https://www.lpu.in/">
            {" "}
            Lovely Professional University{" "}
          </a>
          . I&apos;ve serious passion for Back-end Architecture and Responsive Front-end UI.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes("/resume") ? (
              <Link to="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Shubham Bhardwaj <Link to="/">@shubhambhardwaj.web.app</Link>.
        </p>
      </section>
    </section>
  </>
);

export default SideBar;