import React from "react";
import CommonCard from "./CommonCard";

const Body = () => {
    const cardBody= "I am card body"
  return (
    <div
      style={{
        backgroundColor: "lightcyan",
        height: "80vh",
        padding: 15,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "lightpink",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CommonCard cradTitle='Magic1 Card' cardBody={cardBody}/>
        <CommonCard cradTitle='Magic2 Card' cardBody={cardBody}/>
        <CommonCard cradTitle='Magic3 Card'/>
        <CommonCard cradTitle='Magic4 Card'/>
        <CommonCard cradTitle='Magic5 Card'/>
      </div>
      <div
        style={{
          backgroundColor: "lightseagreen",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CommonCard cradTitle='Magic6 Card'/>
        <CommonCard cradTitle='Magic7 Card'/>
        <CommonCard cradTitle='Magic8 Card'/>
        <CommonCard cradTitle='Magic9 Card'/>
        <CommonCard cradTitle='Magic10 Card'/>
      </div>
    </div>
  );
};

export default Body;
