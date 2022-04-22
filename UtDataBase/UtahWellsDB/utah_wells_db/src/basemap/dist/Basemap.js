"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var react_map_gl_1 = require("react-map-gl");
var MAPBOX_TOKEN = 'pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw';
var initialState = {
    viewport: {
        height: 400,
        latitude: 37.776021,
        longitude: -122.4171949,
        width: 400,
        zoom: 14
    }
};
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.updateViewport = function (viewport) {
            _this.setState(function (prevState) { return ({
                viewport: __assign(__assign({}, prevState.viewport), viewport)
            }); });
        };
        _this.resize = function () {
            _this.setState(function (prevState) { return ({
                viewport: __assign(__assign({}, prevState.viewport), { height: window.innerHeight, width: window.innerWidth })
            }); });
        };
        return _this;
    }
    Map.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.resize);
        this.resize();
    };
    Map.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize);
    };
    Map.prototype.render = function () {
        var _this = this;
        var viewport = this.state.viewport;
        return (React.createElement(react_map_gl_1["default"], __assign({}, viewport, { mapboxApiAccessToken: MAPBOX_TOKEN, onViewportChange: function (v) { return _this.updateViewport(v); } }),
            React.createElement("div", { style: { position: 'absolute', right: 30, bottom: 30 } },
                React.createElement(react_map_gl_1.NavigationControl, { onViewportChange: this.updateViewport }))));
    };
    return Map;
}(React.Component));
exports["default"] = Map;
