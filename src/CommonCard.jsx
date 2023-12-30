import React, { useState } from "react";

const CommonCard = ({ cradTitle, cardBody }) => {
  const [isBodyShow, setIsBodyShow] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: 200,
        width: 150,
        borderRadius: 5,
        boxShadow: "2px 2px 10px",
        margin: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "lightskyblue",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          padding: 2,
          fontSize: 12,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {cradTitle || "Card title"}
      </div>
      <div
        style={{
          height: "80%",
          backgroundColor: "lightcyan",
          margin: 8,
          boxShadow: "inset 0 0 3px",
          borderRadius: 5,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        {isBodyShow === false ? "" : <p style={{ fontSize: 14 }}>{cardBody}</p>}

        <button style={{ margin: 10, padding: 3 }} onClick={()=>setIsBodyShow(!isBodyShow)}>Press Me</button>
      </div>
    </div>
  );
};

export default CommonCard;
