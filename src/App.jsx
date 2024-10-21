import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  const circleRef = useRef(null);

  const enterEffect = () => {
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = "white";
      circleRef.current.style.height = "100px";
      circleRef.current.style.width = "100px";
      circleRef.current.style.zIndex = "-1";
    }
  };

  const leaveEffect = () => {
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = "transparent";
      circleRef.current.style.height = "50px";
      circleRef.current.style.width = "50px";
      circleRef.current.style.zIndex = "10";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<Home/>} />
        <Route 
          path="profile" 
          element={
            <Layout enterEffect={enterEffect} leaveEffect={leaveEffect} circleRef={circleRef}>
              <Profile path="profile" circleRef={circleRef} />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

const Layout = ({ children, enterEffect, leaveEffect, circleRef }) => (
  <>
    <Navbar enterEffect={enterEffect} leaveEffect={leaveEffect} />
    <main>{children}</main>
    <Footer />
  </>
);

export default App;
