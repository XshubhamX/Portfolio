import React from "react";
import CertiFicate from "./certificates/certificate";

const Certificate = ({ data }) => (
  <div className="education">
    <div className="link-to" id="certificates" />
    <div className="title">
      <h3>Courses and training</h3>
    </div>
    {data.map((certificate) => (
      <CertiFicate data={certificate} key={certificate.certifiedBy} />
    ))}
  </div>
);

export default Certificate;
