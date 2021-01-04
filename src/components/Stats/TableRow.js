import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ label, link, value, format }) => (
  <>
    <tr>
      <td width="70%">{label}</td>
      <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
    </tr>
  </>
);

TableRow.propTypes = {
  format: PropTypes.any,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
    PropTypes.any,
  ]),
};

TableRow.defaultProps = {
  format: (x) => x,
  link: null,
  value: null,
};

export default TableRow;
