import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main
    title="Contact"
    description="Contact to Shubham Bhardwaj via email @ shubhambhardwajfdb@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          Feel free to get in touch. You can email me at:{" "}
          <a href="mailto:shubhambhardwajfdb@gmail.com">
            @shubhambhardwajfdb@gmail.com
          </a>
        </p>
        {/* <EmailLink /> */}
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
