import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Maps = (props) => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 4.711150762568714, lng: -74.07164651989693 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Maps));
