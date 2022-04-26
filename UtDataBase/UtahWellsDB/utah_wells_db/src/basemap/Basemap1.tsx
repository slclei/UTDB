import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import welldata from '../data/wellsut.json';
//import {Source} from "react-map-gl";
//import Layer from "react-mapbox-gl/lib-esm/layer"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw';

export default function Wellmap() {
  const mapContainer = useRef(null);
  const [lng, setLong] = useState(-111.6);
  const [lat, setLat] = useState(39.2);
  const [zoom, setZoom] = useState(6);
  const [height,setHight]=useState(1500);

    useEffect(() => {
        let map = new mapboxgl.Map({
            container: mapContainer.current ?? '',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [lng, lat],
             zoom: zoom
        });

        map.addControl(new mapboxgl.NavigationControl());

        map.once("load", function () {
            map.addSource('well-source', {
                'type': 'geojson',
                'data': welldata
            });

            map.addLayer({
                'id': 'well-layer',
                'type': 'circle',
                'source': 'well-source',
                'layout': {},
                'paint': {
                    'circle-radius': 4,
                    'circle-stroke-width': 2,
                    'circle-color': 'black',
                    'circle-stroke-color': 'white'
                }
            });

            map.on('move', () => {
                const { lng, lat } = map.getCenter();

                setLong(lng+4);
                setLat(lat+4);
                setZoom(zoom+2);
            });

        });
        }, []);

    return (
      <div className="mainpage">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
          <div className="well-map-wrapper">
                  <div ref={mapContainer} />
          </div>
      </div>
  );
}
