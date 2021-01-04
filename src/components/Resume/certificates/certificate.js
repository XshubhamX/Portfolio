import React from "react";
import {Link} from 'react-router-dom'

const Certificate = ({ data }) => {
  return (
    <article className="certificate-container">
      <header>
        <h4 className="certificate">{data.certificateName}</h4>
        <p className="certifiedBy">
          {/* <a href={data.link}>{data.certifiedBy}</a>,{data.year} */}
          <Link to='/resume'>
            {data.certifiedBy}
          </Link>,
          {data.year}
        </p>
      </header>
    </article>
  );
};

export default Certificate;
