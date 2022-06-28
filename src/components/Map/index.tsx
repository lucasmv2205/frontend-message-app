import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapComponent() {
  const position = [59.420753, 24.803183]

  
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        ZenbitTech office.
      </Popup>
    </Marker>
  </MapContainer>
  );
}
