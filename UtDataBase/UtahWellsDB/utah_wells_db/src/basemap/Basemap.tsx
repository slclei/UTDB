//This file builds the base map with APIs from Mapbox.
//Functions in the base map: display the axis for mouse over point; display related features in the mouse over point; change visiable of layers.
//Other functions are impored from folder "elements"

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useMap } from "../useMap/useMap";
import s from "./Map.module.css";
import { LayerControl } from "../layerControl/LayerControl";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//Followings are elements in top right corner
import AddressSearch from "../elements/addressSearch";
import XySearch from "../elements/xySearch";
import Buff from "../elements/bufferS";
import PrintPage from "../elements/printPage";
import LayerControlWhole from "../elements/layerControlWhole";

import { MapControl } from "./exportMap";
import searchFields from "../searchBox/SearchField";
import { Sources, Layers } from "../data/SpatialData";

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; 
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw";

//Array.from(p).map( ([key, value]) => value * value )
//key is layer name, value is an array of values for each feature from that layer
//searchFields[key] is an array of table headers for each feature in the layer

const layerIndex = new Map<string, number>();
layerIndex.set("wellsInUTLayer", 0);
layerIndex.set("salineInUTLayer", 1);
layerIndex.set("salineGridInUTLayer", 2);
layerIndex.set("CO2InUTLayer", 3);
layerIndex.set("basinInUTLayer", 4);

const Popup = ({ popDic }: { popDic: Map<string, any[][]> }) => (
  <div className="popup">
    {Array.from(popDic).map(([key, value]) => (
      <div key={key} className="popupName">
        {Layers[layerIndex.get(key)!].name}
        <table className="popupTable">
          <thead>
            <tr>
              {searchFields
                .get(key.substring(0, key.length - 9))
                ?.map((item: string) => (
                  <th key={item} className="popupHead">
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {value.map((eachV: any[]) => (
              <tr key={eachV[0]} className="popupTr">
                {eachV.map((tmpEachV: any) => (
                  <td key={tmpEachV + "td"} className="popupTd">
                    {tmpEachV}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
);

export function Wellmap(): any {
  const mapContainer = useRef(null);
  const [lng, setLong] = useState(-111.6);
  const [lat, setLat] = useState(39.2);
  const [zoom, setZoom] = useState(6);
  const [height, setHight] = useState(1500);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  //create map
  const { layers, map, updateLayerVisibility } = useMap(mapContainer, {
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [lng, lat],
    zoom: zoom,
  });

  //control layer visibility
  class LayerControlWhole extends React.Component {
    state = { showing: true };

    render() {
      const { showing } = this.state;

      return (
        <div className="LayerC">
          <i
            style={{ cursor: "pointer" }}
            className="material-icons"
            id="layersIcon"
            uib-tooltip="Layers"
            onClick={() => this.setState({ showing: !showing })}
          >
            layers
          </i>
          <div className="popover-message">Layer Control</div>
          {showing ? (
            <LayerControl
              id="inMapLegend"
              layers={layers}
              onToggle={updateLayerVisibility}
            />
          ) : null}
        </div>
      );
    }
  }

  //click on map to display features in visible layers
  map?.on("click", (e: { point: any; lngLat: any }) => {
    if (map.getContainer == null) {
      return;
    }
    const bbox = [
      [e.point.x - 3, e.point.y - 3],
      [e.point.x + 3, e.point.y + 3],
    ];
    const features = map?.queryRenderedFeatures(bbox, {
      layers: [
        "wellsInUTLayer",
        "CO2InUTLayer",
        "salineGridInUTLayer",
        "salineInUTLayer",
        "basinInUTLayer",
      ],
    });

    const popDic = new Map<string, any[][]>();

    if (features.length > 0) {
      for (const feature of features) {
        const tmpLayer: string = feature?.layer?.id;
        const keys: string[] = searchFields.get(
          tmpLayer.substring(0, tmpLayer.length - 9)
        )!;
        
        //used to store feature in each layer in popDic
        const tmpList: string[] = [];
        

        for (const key of keys) {
          tmpList.push(feature?.properties[key.toLowerCase()]);
        }

        if (!popDic.has(tmpLayer)) {
          popDic.set(tmpLayer, []);
        }
        popDic.get(tmpLayer)!.push(tmpList);
      }
      
      // create popup node
      const popupNode = document.createElement("div");
      popupNode.id="popUp";
      //ReactDOM.render(<Popup popDic={popDic} />, popupNode);
      const popupRoot = createRoot(popupNode!);
      popupRoot.render(<Popup popDic={popDic} />);
      popUpRef.current.setLngLat(e.lngLat).setDOMContent(popupNode!).addTo(map);
    }
  });

  //display location for mouse move
  map?.on("mousemove", (e: { point: any; lngLat: any }) => {
    document.getElementById("show-location")!.innerHTML =
      // `e.lngLat` is the longitude, latitude geographical position of the event.
      JSON.stringify(e.lngLat.wrap());
  });

  

  MapControl[2].control = LayerControlWhole;

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
              <td id="show-location" />
              <td style={{ padding: "10px 5px" }}>
                <LayerControlWhole />
              </td>
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
              
              <td id="printIconDiv" style={{ padding: "10px 5px" }}>
                <PrintPage />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="map" className={s.map} ref={mapContainer}></div>
    </div>
  );
}
