import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {useMap} from '../useMap/useMap';
import "mapbox-gl/dist/mapbox-gl.css";
import s from "./Map.module.css";
import {LayerControl} from "../layerControl/LayerControl";
import ReactDOM from "react-dom";
//import {Source} from "react-map-gl";
//import Layer from "react-mapbox-gl/lib-esm/layer"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw';

const Popup = ({ featureName, featureNumber, field, type }: { featureName: any, featureNumber: any, field: any, type: any }) => (
  <div className="popup">
    <p className="popField">WellName: {featureName}</p>
    <p className="popField">API: {featureNumber}</p>
    <p className="popField">WellType: {type}</p>
    <p className="popField">FieldName: {field}</p>
  </div>
);

export function Wellmap(): any {
  const mapContainer = useRef(null);
  const [lng, setLong] = useState(-111.6);
  const [lat, setLat] = useState(39.2);
  const [zoom, setZoom] = useState(6);
  const [height,setHight]=useState(1500);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

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
                    style={{ cursor: "pointer"}}
                    className="material-icons md-50"
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

map?.on("click", (e: { point: any; lngLat: any; }) => {
  if (map.getContainer==null){
    return;
  }
  const bbox = [
    [e.point.x - 3, e.point.y - 3],
    [e.point.x + 3, e.point.y + 3]
    ];
  const features = map?.queryRenderedFeatures(bbox, {
    layers: ["wellsInUTLayer"],
  });
  if (features.length > 0) {
    const feature = features[0];
    {
      // create popup node
      const popupNode = document.createElement("div");
      ReactDOM.render(
        <Popup
          featureName={feature?.properties?.wellname}
          featureNumber={feature?.properties?.api} field={undefined} type={undefined}        />,
        popupNode
      );
      popUpRef.current
        .setLngLat(e.lngLat)
        .setDOMContent(popupNode)
        .addTo(map);
    }
  }
});

map?.on('mousemove', (e:  { point: any; lngLat: any; }) => {
  document.getElementById('show-location')!.innerHTML =
  // `e.point` is the x, y coordinates of the `mousemove` event
  // relative to the top-left corner of the map.
  JSON.stringify(e.point) +
  '<br />' +
  // `e.lngLat` is the longitude, latitude geographical position of the event.
  JSON.stringify(e.lngLat.wrap());
  });

  return (
    <div id="map" className={s.map} ref={mapContainer}>  
      
      <LayerControlWhole />  
    </div>  
  );
}
