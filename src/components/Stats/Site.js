// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import VisitorInfo from "./VisitorInfo";

// const Stats = () => {
//   const [data, setResponseData] = useState({});
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}=${process.env.REACT_APP_API_KEY}`)
//       .then((res) => {
//         setResponseData(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(true));
//   }, []);
//   return (
//     <div>
//       <h3>Some stats about You</h3>
//       <VisitorInfo loader={loading} data={data} />
//     </div>
//   );
// };

// export default Stats;
