import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));

// const countBinarySubstrings = function (s) {
//   let count = 0;
//   let zeros = 0;
//   let ones = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "0") {
//       if (s[i - 1] === "1") {
//         zeros = 0;
//       }
//       zeros += 1;
//       if (zeros <= ones) {
//         count += 1;
//       }
//     } else {
//       if (s[i - 1] === "0") {
//         ones = 0;
//       }
//       ones += 1;
//       if (ones <= zeros) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
