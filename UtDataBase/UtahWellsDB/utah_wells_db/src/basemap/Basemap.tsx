import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {useMap} from '../useMap/useMap';
import "mapbox-gl/dist/mapbox-gl.css";
import s from "./Map.module.css";
import {LayerControl} from "../layerControl/LayerControl";
//import {Source} from "react-map-gl";
//import Layer from "react-mapbox-gl/lib-esm/layer"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw';

export function Wellmap(): any {
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

  class LayerControlWhole extends React.Component {
    state = { showing: false };

    render() {
        const { showing } = this.state;
        
        return (
            <div className="LayerC">
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="layersIcon"
                    uib-tooltip="Layers"
                    onClick={() => this.setState({ showing: !showing })}>
                          layers
                </i>
                <div className='popover-message'>Layer Control</div>
                { showing 
                    ? <LayerControl id="inMapLegend2" layers={layers} onToggle={updateLayerVisibility} />
                    : null
                }
            </div>  
        )
    }
}

  return (
    <div id="map" className={s.map} ref={mapContainer}>  
    <LayerControlWhole />  
    </div>  
  );
}
