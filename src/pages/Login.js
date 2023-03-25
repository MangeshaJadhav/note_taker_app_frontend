// import { react } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [response, setResponse] = useState([]);

  const HandleLogin = async () => {
    const resp = await fetch(
      "https://note-taker-app-backend.onrender.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await resp.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    }

    setResponse(data);
    console.log(response.message === "Login Successful");
    console.log(JSON.stringify(response) === "Login Successful");
    console.log(response.token);
  };

  return (
    <div>
      <div className="contianer">
        <form>
          <h1>Sign Up</h1>
          <div className="sub-contianer">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            ></input>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>
          <input type="checkbox"></input>
          <span>Remember me</span>
          <div>
            <Link to="/home">
              <button className="btn" onClick={HandleLogin} type="submit">
                Submit
              </button>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <button>new user register Here.</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
