import { useEffect } from "react";
import "./assets/style/index.scss";
import "./assets/style/index.css";
import useHookMapbox from "./assets/effect/hook-mapbox";
function Mapbox() {
  const initMap = useHookMapbox(true);
  useEffect(() => {
    initMap();
  })
  return (
    <div id="MapboxDemo" className="p-1 bg-white"></div>
  )
}
export default Mapbox;
