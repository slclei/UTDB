"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mapbox_gl_1 = require("mapbox-gl");
var wellsut_json_1 = require("../data/wellsut.json");
//import {Source} from "react-map-gl";
//import Layer from "react-mapbox-gl/lib-esm/layer"; // eslint-disable-line import/no-webpack-loader-syntax
mapbox_gl_1["default"].accessToken = 'pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw';
function wellmap() {
    var mapContainer = react_1.useRef(null);
    var _a = react_1.useState(-111.6), lng = _a[0], setLong = _a[1];
    var _b = react_1.useState(39.2), lat = _b[0], setLat = _b[1];
    var _c = react_1.useState(6), zoom = _c[0], setZoom = _c[1];
    var _d = react_1.useState(1500), height = _d[0], setHight = _d[1];
    react_1.useEffect(function () {
        var _a;
        var map = new mapbox_gl_1["default"].Map({
            container: (_a = mapContainer.current) !== null && _a !== void 0 ? _a : '',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.addControl(new mapbox_gl_1["default"].NavigationControl());
        map.once("load", function () {
            map.addSource('well-source', {
                'type': 'geojson',
                'data': wellsut_json_1["default"]
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
            map.on('move', function () {
                var _a = map.getCenter(), lng = _a.lng, lat = _a.lat;
                setLong(4);
                setLat(4);
                setZoom(3);
            });
        });
    }, []);
    return (react_1["default"].createElement("div", { className: "mainpage" },
        react_1["default"].createElement("div", { className: "sidebar" },
            "Longitude: ",
            lng,
            " | Latitude: ",
            lat,
            " | Zoom: ",
            zoom),
        react_1["default"].createElement("div", { className: "well-map-wrapper" },
            react_1["default"].createElement("div", { ref: mapContainer }))));
}
exports["default"] = wellmap;
