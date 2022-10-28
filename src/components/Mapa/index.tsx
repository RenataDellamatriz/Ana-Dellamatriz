import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Mapa.css";

//https://console.cloud.google.com/

const Maps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const position = useMemo(
    () => ({
      lat: -23.597769548539546,
      lng: -46.75497693482238,
    }),
    []
  );

  return isLoaded ? (
    <GoogleMap
      zoom={16.9}
      center={position}
      mapContainerClassName="map-container"
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Maps;
