import React from "react";
import GrndChild from "./GrndChild";

const Child1 = ({ age, name }) => {
    let college = "trident"
  return (
    <div>
      <h2>Child1</h2>
      <GrndChild myName = {name} college = {college}/>
    </div>
  );
};

export default Child1;
