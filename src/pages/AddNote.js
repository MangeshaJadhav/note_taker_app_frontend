// import { react } from "react";
import Navbar from "./Navbar";
import "./AddNote.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AddNote() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setdescription] = useState("");

  const [response, setResponse] = useState([]);

  const HandleCreateNote = async (event) => {
    event.preventDefault();
    setName("");
    setdescription("");

    const resp = await fetch(
      "https://note-taker-app-backend.onrender.com/api/creatnote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }
    );
    console.log(data.data);
    const data = await resp.json();
    setResponse(data);
    if (data.data) {
      navigate("/mainpage");
      // window.location.reload(true)
      console.log("Create Successfully");
    }
  };
  return (
    <div className="addNote">
      <Navbar />
      <div className="note-container">
        <form>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <div>Description</div>
            <textarea
              type="descrption"
              placeholder="waht in your mind ?"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>

          <button onClick={HandleCreateNote}>Add Note</button>
        </form>
      </div>
      <div>
        <Link to="/home">
          <button>Back to Home</button>
        </Link>
        
      </div>
    </div>
  );
}

export default AddNote;
/**
 * <Link to="/createpost">
                  <button type="submit" className="next">
                    Next
                  </button>
                </Link>
 */
