import {
  GoogleMap,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import "./GeocodingComponent.scss"

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const initialCenter = {
  lat: 36.733226218382725,
  lng: -4.402746511262926,
};

function GeocodingComponent() {
  const apiKey = import.meta.env.VITE_API_GOOGLE;

  if (!apiKey) {
    return <div>Error: Google Maps API key is missing</div>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
        <div className="map-container">
              <GoogleMap
        options={{
          styles: [{ stylers: [{ saturation: 0 }, { gamma: 0 }] }],
          mapTypeControl: false,
        }}
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={initialCenter}
      >
        <MarkerF position={initialCenter} />
      </GoogleMap>  
        </div>
  
    </LoadScript>
  );
}

export default GeocodingComponent;
