import React, { useState, useEffect } from "react";
// import map from "../../assets/map.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const location = "Lagos, Nigeria";
  const [l, setL] = useState({});
  const [loading, setIsLoading] = useState(true);
  const getGeoLocation = () => {
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
      )}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const latitude = data[0].lat;
          const longitude = data[0].lon;
          // Now you can use these latitude and longitude values
          setL({ latitude, longitude });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error geocoding location:", error);
      });
  };
  useEffect(() => {
    getGeoLocation();
  }, []);

  return (
    <div>
      {!loading && (
        <MapContainer
          center={[l.latitude, l.longitude]}
          zoom={13}
          style={{ height: "417px", borderRadius: "15px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[l.latitude, l.longitude]}></Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
