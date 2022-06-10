import React from "react";
import ReactDOM from "react-dom";
import Bio from "./components/bio.js";
import Navbar from "./components/navbar";
import MyProjects from "./components/projects.js";
import Footer from "./components/footer.js";
import "./style.css";

ReactDOM.render(<div><Navbar />
<div style={{"display":"flex","border":"1px solid blue"}}><Bio /><MyProjects /></div><Footer /></div>,document.getElementById("root"))