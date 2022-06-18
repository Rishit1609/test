import React from "react";
function Foot() {
  let date = new Date();
  let year = date.getFullYear();
  return (<footer>copyright © {year}</footer>);
}
export default Foot;
