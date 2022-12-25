import React, { useState } from "react";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false,
  });
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  return (
    <div>
      <form>
        <h2>SignUp</h2>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>I accept terms of privecy policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
}
