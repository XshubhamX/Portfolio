// import React from "react";
// import ReactTooltip from "react-tooltip";

// const { PUBLIC_URL } = process.env;
// const VisitorInfo = ({ data, loader }) => {
//   if (!loader) {
//     return (
//       <>
//         <div className="visitor-info">
//           <a href data-tip data-for="happyFace">
//             Let's try 😎
//           </a>
//           <ReactTooltip
//             id="happyFace"
//             type="light"
//             className="visitor-info__data"
//           >
//             <img
//               src={data.location ? data.location.country_flag : "null"}
//               alt="your-country-flag"
//             />
//             <p>
//               {" "}
//               Current 📍 {data.city}, {data.region_name}, {data.country_name}
//             </p>
//           </ReactTooltip>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <img
//         src={`${PUBLIC_URL}/loading.gif`}
//         alt="loading....."
//         height="100px"
//         width="auto"
//         className="loading-img"
//       />
//     );
//   }
// };

// export default VisitorInfo;
