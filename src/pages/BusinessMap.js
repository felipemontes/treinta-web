import React from "react";
import Map from "../components/Map.js";
import credentials from "../credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?=3.exp&key=${credentials.mapsKey}`;

const BusinessMap = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fed209" }}>
        Mapa de negocios
      </h1>
      <Map
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "600px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando</p>}
      />
    </div>
  );
};

export default BusinessMap;
