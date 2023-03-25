/* eslint-disable default-case */
import { react } from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState({
    email: { isValid: true, message: "" },
    password: { isValid: true, message: "" },
    confirmPassword: { isValid: true, message: "" },
  });

  const HandleSignup = async (event) => {
    event.preventDefault();
    setemail("");
    setpassword("");
    setconfirmPassword("");
    setusername("");

    const resp = await fetch(
      "https://note-taker-app-backend.onrender.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      }
    );
    console.log(data.data);
    const data = await resp.json();
    setResponse(data);
    if (data.data) {
      navigate("/");
    }
  };

  const checkErrors = (type) => {
    switch (type) {
      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          setError({
            ...error,
            email: {
              isValid: false,
              message: "Please enter proper email address",
            },
          });
        } else {
          setError({ ...error, email: { isValid: true, message: "" } });
        }
        break;
      case "password":
        if ((password.length < 6) & (password.length !== 0)) {
          setError({
            ...error,
            password: {
              isValid: false,
              message: "Password should have minimum length of 6",
            },
          });
        } else {
          setError({ ...error, password: { isValid: true, message: "" } });
        }
        break;
      case "confirmPassword":
        if (password !== confirmPassword) {
          setError({
            ...error,
            confirmPassword: {
              isValid: false,
              message: "Password and confirm Password doesn't match",
            },
          });
        } else {
          setError({
            ...error,
            confirmPassword: { isValid: false, message: "" },
          });
        }
        break;
    }
    console.log(error.email.message.length);
  };

  const isSubmitValid =
    email.length && password.length && confirmPassword.length;

  return (
    <div>
      <div className="contianer">
        <form>
          <h1>Sign Up</h1>
          <div className="sub-contianer">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
              onBlur={(event) => {
                checkErrors("email");
              }}
              value={email}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              onBlur={(event) => {
                checkErrors("password");
              }}
              value={password}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setconfirmPassword(e.target.value)}
              onBlur={(event) => {
                checkErrors("confirmPassword");
              }}
              value={confirmPassword}
            ></input>
          </div>
          <input type="checkbox"></input>
          <span>I agree TERMS AND CONDITIONS</span>
          <button
            className="btn"
            onClick={HandleSignup}
            disabled={
              isSubmitValid === 0 ||
              error.email.message.length !== 0 ||
              error.password.message.length !== 0 ||
              error.confirmPassword.message.length !== 0 ||
              password !== confirmPassword
                ? true
                : false
            }
          >
            Continue
          </button>
          <Link to="/">
          <button>Login Here.!</button>
          </Link>
        </form>
        <div className="errorContianer">
          <div id="mess">
            {!error.email.isValid ? (
              <div style={{ color: "red" }}>{error.email.message}</div>
            ) : null}
          </div>
          <div id="mess2">
            {" "}
            {!error.password.isValid ? (
              <div style={{ color: "red" }}>{error.password.message}</div>
            ) : null}
          </div>
          <div id="mess1">
            {!error.confirmPassword.isValid ? (
              <div style={{ color: "red" }}>
                {error.confirmPassword.message}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
