import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {useMap} from '../useMap/useMap';
import "mapbox-gl/dist/mapbox-gl.css";
import s from "./Map.module.css";
import {LayerControl} from "../layerControl/LayerControl";
//import {Source} from "react-map-gl";
//import Layer from "react-mapbox-gl/lib-esm/layer"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw';

export default function Wellmap() {
  const mapContainer = useRef(null);
  const [lng, setLong] = useState(-111.6);
  const [lat, setLat] = useState(39.2);
  const [zoom, setZoom] = useState(6);
  const [height,setHight]=useState(1500);

  const { layers, map, updateLayerVisibility } = useMap(mapContainer, {
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [lng,lat],
    zoom: zoom,
  });

  return (
    <div id="map" className={s.map} ref={mapContainer}>
      <LayerControl layers={layers} onToggle={updateLayerVisibility} />
    </div>
  );
}
