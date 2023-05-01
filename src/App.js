import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  useEffect(()=>{
    // will only run once when the app component loads
  },[])
  return (
    <Router>
     <div className="app">
      <Routes>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div><Header /><Home /> </div>} />
      </Routes>
        </div>
        </Router>
        
  );
}

export default App;
