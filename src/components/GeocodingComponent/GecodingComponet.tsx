
import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";

const mapContainerStyle = {
  height: "300px",
  width: "300px",
};

const initialCenter = {
  lat: 36.733226218382725,
  lng: -4.402746511262926,
};

function GeocodingComponent() {
  const [address, setAddress] = useState<string>("");
  const [infoWindowPosition, setInfoWindowPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const apiKey = "AIzaSyAxQJEXrU4XRFntNtfwm-GK3Fo-udOzSt4";

  const handleMouseOver = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      console.log("Mouse over at: ", e.latLng.lat(), e.latLng.lng());
    }
  };

  const handleMarkerClick = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${initialCenter.lat},${initialCenter.lng}&key=${apiKey}`
      );
      const address =
        response.data.results[0]?.formatted_address || "No address found";
      setAddress(address);
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
    }
    setInfoWindowPosition(initialCenter);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "2px solid black",
        }}
      >
        <p>Dónde estamos</p>
        <div
          style={{
            // height: "400px",
            // width: "400px",
            // border: "2px solid black",
            // display: "flex",
            // justifyContent: "center",
            // flexDirection: "column",
            // alignItems: "center",
            // padding: "16px",
          }}
        >
          
            <GoogleMap
              options={{
                styles: [{ stylers: [{ saturation: 50 }, { gamma: 0.5 }] }],
              }}
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={initialCenter}
            >
              <MarkerF
                position={initialCenter}
                onClick={handleMarkerClick}
                onMouseOver={handleMouseOver}
              />
              {infoWindowPosition && (
                <InfoWindow
                  position={infoWindowPosition}
                  onCloseClick={() => setInfoWindowPosition(null)}
                >
                  <div>{address}</div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>
     
    </LoadScript>
  );
}

export default GeocodingComponent;
