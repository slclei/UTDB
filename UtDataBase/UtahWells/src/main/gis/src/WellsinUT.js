import CSVLayer from '@arcgis/core/layers/CSVLayer';
import Map from '@arcgis/core/Map';
import {useState} from "react";
import MapView from "@arcgis/core/views/MapView";

/*
const MyMap = (props) => {
    // Paste the url into a browser's address bar to download and view the attributes
    // in the CSV file. These attributes include:
    // * mag - magnitude
    // * type - earthquake or other event such as nuclear test
    // * place - location of the event
    // * time - the time of the event

    const template = {
        title: "Earthquake Info",
        content: "Magnitude {mag} {type} hit {place} on {time}."
    };

    const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv";
    const csvLayer = new CSVLayer({
        url: url,
        copyright: "USGS Earthquakes",
        popupTemplate: template
    });

    csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "point-3d", // autocasts as new PointSymbol3D()
            // for this symbol we use 2 symbol layers, one for the outer circle
            // and one for the inner circle
            symbolLayers: [{
                type: "icon", // autocasts as new IconSymbol3DLayer()
                resource: { primitive: "circle"},
                material: { color: [255, 84, 54, 1] },
                size: 5
            }, {
                type: "icon", // autocasts as new IconSymbol3DLayer()
                resource: { primitive: "circle"},
                material: { color: [255, 84, 54, 0] },
                outline: {color: [255, 84, 54, 0.6], size: 1},
                size: 25
            }]
        }
    };

    const map=new Map ({
        basemap:"streets-vector"
    });

    map.add(csvLayer);

    return map;
}
*/
export default function App() {
    const map=new Map ({
        basemap:"streets-vector"
    });
    const view= new MapView({
        container: "root",
        map: map
    });
    const [lng, setLng] = useState(-111.2);
    const [lat, setLat] = useState(40.5);
    const [zoom, setZoom] = useState(6);

    const template = {
        title: "Earthquake Info",
        content: "Magnitude {mag} {type} hit {place} on {time}."
    };

    //const url = "\"https://developers.arcgis.com/javascript/latest//sample-code/layers-csv/live/earthquakes.csv";
    /*const csvLayer = new CSVLayer({
        url: url,
        copyright: "USGS Earthquakes",
        popupTemplate: template
    });

    csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "point-3d", // autocasts as new PointSymbol3D()
            // for this symbol we use 2 symbol layers, one for the outer circle
            // and one for the inner circle
            symbolLayers: [{
                type: "icon", // autocasts as new IconSymbol3DLayer()
                resource: { primitive: "circle"},
                material: { color: [255, 84, 54, 1] },
                size: 5
            }, {
                type: "icon", // autocasts as new IconSymbol3DLayer()
                resource: { primitive: "circle"},
                material: { color: [255, 84, 54, 0] },
                outline: {color: [255, 84, 54, 0.6], size: 1},
                size: 25
            }]
        }
    };

    map.add(csvLayer);*/

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
        </div>
    );
}