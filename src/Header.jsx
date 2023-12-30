import React from "react";

const Header = () => {
  return (
    <div style={{ backgroundColor: "lightskyblue", height:"10vh", display:'flex',justifyContent:'space-between', padding:10,paddingRight:20,paddingLeft:20, alignItems:'center' }}>
      <div>
        <h5 style={{fontWeight:700,fontSize:16}}>DevMan.</h5>
      </div>
      <div style={{display:'flex',minWidth:200, justifyContent:'space-between', fontSize:14}}>
        <p style={{cursor:'pointer'}}>Contact</p>
        <p style={{cursor:'pointer'}}>About</p>
        <p style={{cursor:'pointer'}}>Career</p>
      </div>
    </div>
  );
};

export default Header;
