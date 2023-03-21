import React from "react";
import { YMaps, Map, ObjectManager} from "@pbe/react-yandex-maps";

const mapState = {center: [59.939098, 30.315868], zoom: 10};
const mapStyle = {
    top: 0,
    left: 0,
    width: "600px",
    height: "600px",
    overflow: "hidden",
  };

export default function MapForm() {
  const ymaps = React.useRef(null);
  const placemarkRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const [address, setAddress] = React.useState("");

  const createPlacemark = (coords) => {
    return new ymaps.current.Placemark(
      coords,
      {
        iconCaption: "loading.."
      },
      {
        preset: "islands#violetDotIconWithCaption",
        draggable: true
      }
    );
  };

  const getAddress = (coords) => {
    placemarkRef.current.properties.set("iconCaption", "loading..");
    ymaps.current.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);

      const newAddress = [
        firstGeoObject.getLocalities().length
          ? firstGeoObject.getLocalities()
          : firstGeoObject.getAdministrativeAreas(),
        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
      ]
        .filter(Boolean)
        .join(", ");

      setAddress(newAddress);

      placemarkRef.current.properties.set({
        iconCaption: newAddress,
        balloonContent: firstGeoObject.getAddressLine()
      });
    });
  };

  let ecoords = '';
  const onMapClick = (e) => {
    const coords = e.get("coords");

    if (placemarkRef.current) {
      placemarkRef.current.geometry.setCoordinates(coords);
    } else {
      placemarkRef.current = createPlacemark(coords);
      mapRef.current.geoObjects.add(placemarkRef.current);
      placemarkRef.current.events.add("dragend", function () {
        getAddress(placemarkRef.current.geometry.getCoordinates());
      });
    }
    getAddress(coords);
    ecoords = coords
    console.log(ecoords)
  };

  return (
    <div className="">
      <YMaps query={{ apikey: "1a15248c-004a-4364-8c06-4c1e617f3000" }}>
        <Map
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          instanceRef={mapRef}
          onLoad={(ympasInstance) => (ymaps.current = ympasInstance)}
          onClick={onMapClick}
          state={mapState}
          style={mapStyle}
        />
        {address && (
          <div>
            <p>{ecoords}</p>
          </div>
        )}
      </YMaps>
    </div>
  );
}