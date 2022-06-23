import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMap } from '../useMap/useMap';
import s from "./Map.module.css";
import { LayerControl } from "../layerControl/LayerControl";
import ReactDOM from "react-dom";
import AddressSearch from '../elements/addressSearch';
import XySearch from '../elements/xySearch';
import Buff from '../elements/bufferS';
import PrintPage from '../elements/printPage';
import LayerControlWhole from '../elements/layerControlWhole';
import {MapControl} from './exportMap';
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
  const [height, setHight] = useState(1500);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  const { layers, map, updateLayerVisibility } = useMap(mapContainer, {
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [lng, lat],
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
          <div className='popover-message'>Layer Control2</div>
          {showing
            ? <LayerControl id="inMapLegend2" layers={layers} onToggle={updateLayerVisibility} />
            : null
          }
        </div>
      )
    }
  }

  map?.on("click", (e: { point: any; lngLat: any; }) => {
    if (map.getContainer == null) {
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
            featureNumber={feature?.properties?.api} field={undefined} type={undefined} />,
          popupNode
        );
        popUpRef.current
          .setLngLat(e.lngLat)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    }
  });

  map?.on('mousemove', (e: { point: any; lngLat: any; }) => {
    document.getElementById('show-location')!.innerHTML =
      // `e.lngLat` is the longitude, latitude geographical position of the event.
      JSON.stringify(e.lngLat.wrap());
  });

  MapControl[2].control=LayerControlWhole;


  return (
    <div className="well-map-wrapper">
      <div
        className="headerRect"
        style={{ width: "100%", height: 40, maxWidth: "100%" }}
      >
        <table>
          <tbody>
            <tr>
              <td style={{ padding: "10px 5px 10px 10px" }}>
                <i className="material-icons">public</i>
              </td>
              <td
                style={{ padding: "10px 5px", fontWeight: "bold" }}
                className="header3Text"
              >
                Map
              </td>
              <td id="show-location"/>
              <td id="addressIconDiv" style={{ padding: "10px 5px" }}>
                <AddressSearch />
              </td>
              <td id="xyIconDiv" style={{ padding: "10px 5px" }}>
                <XySearch />
              </td>
              <td style={{ padding: "10px 5px" }}>
                <div id="pointSelectDiv">
                  <i
                    id="activePointSelectIcon"
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    uib-tooltip="Select Wells by Click"
                  >
                    near_me
                  </i>
                  <i
                    id="deactivatePointSelectIcon"
                    style={{ cursor: "pointer", display: "none" }}
                    className="material-icons"
                    uib-tooltip="Select Wells by Click"
                  >
                    near_me
                  </i>
                </div>
              </td>
              <td style={{ padding: "10px 5px" }}>
                <div id="rectangleSelectDiv">
                  <i
                    id="activeRectangleSelectIcon"
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    uib-tooltip="Select Wells by Rectangle"
                  >
                    rectangle
                  </i>
                  <i
                    id="deactivateRectangleSelectIcon"
                    style={{ cursor: "pointer", display: "none" }}
                    className="material-icons"
                    uib-tooltip="Select Wells by Rectangle"
                  >
                    rectangle
                  </i>
                </div>
                <i
                  id="inactiveRectangleSelectIcon"
                  className="material-icons"
                  style={{ display: "none" }}
                >
                  rectangle
                </i>
              </td>
              <td style={{ padding: "10px 5px" }}>
                <i
                  id="inactivePolygonSelectIcon"
                  className="material-icons"
                  style={{ display: "none" }}
                >
                  polyline
                </i>
                <div id="polygonSelectDiv">
                  <i
                    id="activePolygonSelectIcon"
                    style={{ cursor: "pointer", opacity: "0.5" }}
                    className="material-icons"
                    uib-tooltip="Select Wells by Polygon"
                  >
                    polyline
                  </i>
                  <i
                    id="deactivatePolygonSelectIcon"
                    style={{ cursor: "pointer", display: "none" }}
                    className="material-icons"
                    uib-tooltip="Select Wells by Polygon"
                  >
                    polyline
                  </i>
                </div>
              </td>
              <td id="bufferIconDiv" style={{ padding: "10px 5px" }}>
                <Buff />
              </td>
              <td style={{ padding: "10px 5px" }}>
                <i
                  id="activeMapClearIcon"
                  style={{ cursor: "pointer" }}
                  className="material-icons"
                  uib-tooltip="Clear Selection"
                >
                  clear
                </i>
                <i
                  id="inactiveMapClearIcon"
                  className="material-icons"
                  style={{ display: "none" }}
                  uib-tooltip="Clear Selection"
                >
                  clear
                </i>
              </td>
              <td style={{ padding: "10px 5px" }}>
                <div id="measureDistanceDiv">
                  <i
                    id="activeMeasureDistanceIcon"
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    uib-tooltip="Measure Distance"
                  >
                    straighten
                  </i>
                  <i
                    id="deactivateMeasureDistanceIcon"
                    style={{ cursor: "pointer", display: "none" }}
                    className="material-icons"
                    uib-tooltip="Measure Distance"
                  >
                    straighten
                  </i>
                </div>
              </td>
              <td style={{ padding: "10px 5px" }}>
                <LayerControlWhole />
              </td>
              <td id="printIconDiv" style={{ padding: "10px 5px" }}>
                <PrintPage />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="map" className={s.map} ref={mapContainer}>
      </div>
    </div>
  );
}

