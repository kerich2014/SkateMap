import React from "react";
import { YMaps, Map, Placemark, Button, GeolocationControl, ObjectManager} from "@pbe/react-yandex-maps";

export const YaMap = ({points}) => {

  const [aItem, setAitem] = React.useState(points);

  const mapStyle = {
    position: "relative",
    left: 0,
    top: 0,
    width: "100%",
    height: "70vh",
    overflow: "hidden",
  };

  const collection = {
    type: "FeatureCollection",
    features: aItem.map((point, id) => {
      return {
        id: id,
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: point.coordinates
        },
        properties: {
          balloonContentHeader: `
            <h2>${point.title}</h2>
          `,
          balloonContentBody:`
            <p>${point.description}</p>
            <img src= '${point.photo}'>
          `,
        },

        options: {
          preset: 'islands#icon',
          iconColor: 'red',
        }
      };
    })
  };

  return (
    <YMaps
      query={{ apikey: "1a15248c-004a-4364-8c06-4c1e617f3000", lang: "RU" }}
    >
      <div>
        <Map
          style={mapStyle}
          defaultState={{ center: [59.939098, 30.315868], zoom: 10 }}
        >
          <Button
            options={{ maxWidth: 128 }}
            data={{ content: "Добавить спот" }}
            defaultState={{ selected: true }}
          />

          <GeolocationControl options={{ float: "left" }} />

          <ObjectManager 
            defaultFeatures={collection}
            modules={[
              "objectManager.addon.objectsBalloon",
            ]}/>
        </Map>
      </div>
    </YMaps>
  );
};