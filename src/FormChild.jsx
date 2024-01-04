import React from "react";

const FormChild = ({ submitData }) => {
  const { email, password } = submitData;
  return (
    <div>
      <h3>email: {email}</h3>
      <h3>password: {password}</h3>
    </div>
  );
};

export default FormChild;
