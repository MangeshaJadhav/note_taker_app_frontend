// import { react } from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://note-taker-app-backend.onrender.com/api/getallnotes").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div>
          <input
            className="search"
            type="search"
            placeholder="search !"
          ></input>
        </div>
        <div></div>
        <div className="notebar">
          <div className="date"> March 16,2023 1:13:21 PM</div>
          <div>
            <div className="title">MongoDB Tutorials</div>
            <div>
              This is MongoDb Database and its used for backend development
            </div>
          </div>
        </div>

        <div className="notebar">
          <div className="date"> March 14,2023 1:12:21 PM</div>
          <div>
            <div className="title">Node Js Tutorials</div>
            <div>Node Js is used for Backend development of MERN Stack </div>
          </div>
        </div>
      </div>
      {/* {
          data.map((item)=>{

            <div>
          <div className="title">{item.name}</div>
          <div>{item.description}</div>
            <div/>
          }
          )} */}
    </div>
  );
}

export default HomePage;
