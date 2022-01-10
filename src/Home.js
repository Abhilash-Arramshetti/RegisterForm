import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });
  const { firstname, lastname, email } = { ...data };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postData = async (e) => {
    e.preventDefault();
    if (firstname && lastname && email) {
      const response = await fetch(
        "https://registration-1d15a-default-rtdb.firebaseio.com/registrationDB.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Firstname: data.firstname,
            lastname: data.lastname,
            email: data.email
          })
        }
      );
      if (response) {
        setData({
          firstname: "",
          lastname: "",
          email: ""
        });
        alert("Your Form is Submitted!");
      }
    } else {
      alert("Please enter all fields");
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register Form</h2>
      <form className="form-horizontal" autoComplete="off" method="POST">
        <div className="form-group">
          <label className="control-label col-sm-2">First Name: </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Last Name: </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Email: </label>
          <div className="col-sm-4">
            <input
              type="e mail"
              className="form-control"
              placeholder="Email@email.com"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input
              type="submit"
              className="btn btn-success"
              value="Submit"
              onClick={postData}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
