import React, { useState } from "react";
import FormChild from "./FormChild";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitData, setSubmitData] = useState({email:"demo@gdgd", password:"1234"});


  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log({ email, password });
    setSubmitData({email,password})
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightcyan",
        height: "100vh",
        flexDirection:'column'
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: '',
          backgroundColor: "lightblue",
          padding: 10,
          height: 200,
          width: 300,
        }}
      >
        <label>Email</label>
        <input
          style={{ marginBottom: 10 }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          style={{ marginBottom: 10 }}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button style={{ marginTop: 10 }} onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <FormChild submitData = {submitData}/>
    </div>
  );
};

export default Form;
