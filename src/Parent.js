import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  // const [getData, setData] = useState(intital state)
  let [age, setAge] = useState(45);
  let [name, setName] = useState("prasant");
  let [college, setCollege] = useState("revensa");

  const DummyFunc = (name, college) => {
    setName(name)
    setCollege(college)
  };

  return (
    <div>
      Parent
      <h3>age: {age}</h3>
      <h3>name: {name}</h3>
      <h3>college: {college}</h3>
      <Child setAge={setAge} func={DummyFunc}/>
    </div>
  );
};

export default Parent;
