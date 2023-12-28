import React from "react";

const Child = ({ setAge, func }) => {

  const handleAgeInc = () => {
    setAge(60);
    const name = "chnadan";
    const college = "trident"
    func(name, college);
  };

  return (
    <>
      <div>Child</div>
      <button onClick={handleAgeInc}>Age Inc</button>
    </>
  );
};

export default Child;
