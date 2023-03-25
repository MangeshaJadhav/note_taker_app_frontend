import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import AddNote from "./pages/AddNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      {/* <AddNote/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/addnote" element={<AddNote/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
