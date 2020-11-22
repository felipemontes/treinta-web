import React from "react";
import credentials from "../credentials";
import Navbar from "../components/Navbar";
import Maps from "../components/Maps";

const mapURL = `https://maps.googleapis.com/maps/api/js?=3.exp&key=${credentials.mapsKey}`;

const Home = ({ handleLogout }) => {
  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <h1 style={{ textAlign: "center", color: "#fed209" }}>
        Mapa de negocios
      </h1>
      <Maps
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "600px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando</p>}
      />
    </>
  );
};

export default Home;
