const mapBoxGl = require("mapbox-gl/dist/mapbox-gl");
function useHookMapbox(enabledClick) {
  mapBoxGl.accessToken =
    "pk.eyJ1IjoiY3l3ZW4iLCJhIjoiY2tnZWtiM3AwMGVrZjJ4cnNiZnJ1Z2hjMiJ9.d0AxnD5TcPg-wovCJp82Wg";
  let map = null;
  const initMap = () => {
    map = new mapBoxGl.Map({
      container: "MapboxDemo",
      center: [121.47, 31.23],
      zoom: 2,
      pitch: 0,
      style: "mapbox://styles/mapbox/dark-v10",
    });
    if (enabledClick) {
      initClick();
    }
  };
  const initClick = () => {
    map.on("click", (e) => {
      let location = e.lngLat,
        text = `当前点击位置：${location.lng.toFixed(2)},${location.lat.toFixed(
          2
        )}`;
      addPopup(location, text);
    });
  };
  const addPopup = (location, text) => {
    new mapBoxGl.Popup().setLngLat(location).setHTML(text).addTo(map);
  };
  return initMap;
}
export default useHookMapbox;
