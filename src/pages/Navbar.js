import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div className="nav-container">
        <div>Home</div>
        <div>
          <Link to="/addnote">
            <button>+</button>
          </Link>
          AddNote
        </div>

        <div>
          <button>X</button>
          DeleteAll
        </div>
        <div>Export</div>
        <Link to="/"> 
          <div>
            <button onclick={HandleLogout}>Logout</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
