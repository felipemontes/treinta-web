import React from "react";
import Navbar from "../components/Navbar";

const Home = ({ handleLogout }) => {
  return (
    <>
      <Navbar handleLogout={handleLogout} />
    </>
  );
};

export default Home;
