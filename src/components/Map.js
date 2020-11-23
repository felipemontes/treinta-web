import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import * as bussines from "../business.json";

const Maps = (props) => {
  return (
    <>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 4.711150762568714, lng: -74.07164651989693 }}
      >
        {bussines.data.map((bus) => (
          <Marker
            key={bus.id}
            position={{
              lat: bus.coordinates[0],
              lng: bus.coordinates[1],
            }}
          />
        ))}
      </GoogleMap>
    </>
  );
};

export default withScriptjs(withGoogleMap(Maps));
