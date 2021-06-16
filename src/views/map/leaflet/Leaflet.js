import { MapContainer, TileLayer } from "react-leaflet";
import { latLng } from "leaflet";
import "./assets/style/index.scss";
function Leaflet() {
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution = '&copy; <a href="http://osm.org/copyright">flywen.top</a>',
    center = latLng(31.23, 121.47),
    zoom = 5;
  return (
    <>
      <div className="Leaflet-Demo p-1 bg-white">
        <MapContainer zoom={zoom} center={center}>
          <TileLayer url={url} attribution={attribution} />
        </MapContainer>
      </div>
    </>
  );
}
export default Leaflet;
