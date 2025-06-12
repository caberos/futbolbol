import React from "react";
import Navbar from "./pages/components/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1 d-flex" style={{ minHeight: 0, position: "relative" }}>
          <div style={{ width: "160px", height: "600px", background: "#e9ecef", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Google Ad
          </div>
          <div style={{ width: "100%", maxWidth: "60vw", minWidth: 0, margin: "0 auto" }}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
            <div style={{ width: "160px", height: "600px", background: "#e9ecef", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Google Ad
            </div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
