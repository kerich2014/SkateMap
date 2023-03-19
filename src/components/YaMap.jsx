import React from "react";
import { YMaps, Map, Placemark, Rectangle } from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "70vh",
  overflow: "hidden",
};

export const Yandex = ({ center }) => {
  return (
    <YMaps
      query={{ apikey: "1a15248c-004a-4364-8c06-4c1e617f3000", lang: "RU" }}
    >
      <div>
        <Map
        style={mapStyle}
        defaultState={{ center: center || [59.939098, 30.315868], zoom: 10 }}
        >
            <Placemark geometry = {[59.907857, 30.298757]} />
        </Map>
      </div>
    </YMaps>
  );
};