import React from "react";

const Edit = () => {
  return (
    <div>
      <h2 style={{ "text-align": "center" }}>Edit Form</h2>
      <form autoCapitalize="off">
        <div>
          <label>First Name: </label>
          <input type="text"></input>
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text"></input>
        </div>
        <div>
          <label>Email: </label>
          <input type="email"></input>
        </div>
      </form>
    </div>
  );
};

export default Edit;
