import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

//https://console.cloud.google.com/ 

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: 'AIzaSyAz14uso3XI7o6NElsC24cGqoPercWphGk',
  });
  
  const position = {
    lat: -23.59767625198978,
    lng: -46.7549400736398,
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={10}
        >
          <Marker position={position} options={{
            label:{
                text: 'Posição teste',
                className:'map-marker'
            }
          }}/>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Maps;
