// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import "../../App.css";
// import SinglePagePDFViewer from "./single-page";
// import AllPagesPDFViewer from "./all-page";
// import samplePDF from "./resume.pdf";
// import "./styles.css";
// import { pdfjs } from "react-pdf";
// import worker from "pdfjs-dist/webpack";
// import { Link } from "react-router-dom";

// pdfjs.GlobalWorkerOptions.workerSrc = worker;

// export default function Report() {
//   return (
//     <div>
//       <div className="Report">
//         <div>
//           <a
//             href={process.env.PUBLIC_URL + "/assets/files/resume.pdf"}
//             target="_blank"
//             download
//             rel="noreferrer"
//           >
//             Click here to download the resume
//           </a>
//         </div>
//         {/* <div>
//           <a
//             href="https://github.com/PranishBhagatOutlook/qcNotebook"
//             target="_blank"
//             download
//             rel="noreferrer"
//           >
//             Click here to get the notebook
//           </a>
//         </div> */}

//         <h4>Single Page</h4>
//         <SinglePagePDFViewer pdf={samplePDF} />

//         <hr />

//         <h4>All Pages</h4>
//         <div className="all-page-container">
//           <AllPagesPDFViewer pdf={samplePDF} />
//         </div>

//         <hr />
//       </div>
//     </div>
//   );
// }
