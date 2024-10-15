import React from "react";
import "./App.css";
import Home from "./component/Home";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./component/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="profile" element={<Profile/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
