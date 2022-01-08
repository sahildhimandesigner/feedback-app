import React from "react";
import ReactDOM from "react-dom";
import MainComponent from './App'
import './index.css'

//React.StrictMode is use for additionls checks
ReactDOM.render(
    <React.StrictMode> 
        <MainComponent />
    </React.StrictMode>, 
document.getElementById("root"));