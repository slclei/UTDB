import welldata from "./wellsut.json";
//import welldata from "./wellsutless.json";
import salinedata from "./JSON/salineUT.json";
import CO2SSUT from "./JSON/CO2StationarySourcesUT.json";
import Saline10kUT from "./JSON/Saline_10kUT.json";
import SBasinUT from "./JSON/SedimentaryBasinsUT.json";

const WellUT = {
  id: "wellsInUT",
  type: "geojson",
  data: welldata,
};

const WellUTLayer = {
  id: "wellsInUTLayer",
  name: "Gas and Oil wells in UT",
  type: "circle",
  source: "wellsInUT",
  paint: {
    "circle-color": "#4094ae",
    "circle-radius": 4,
  },
  layout: {
    visibility: "visible",
  },
};

const SalineUT = {
  id: "salineInUT",
  type: "geojson",
  data: salinedata,
};

const SalineUTLayer = {
  id: "salineInUTLayer",
  name: "Saline in UT",
  type: "fill",
  source: "salineInUT",
  paint: {
    "fill-opacity": 0.5,
    "fill-color": "#f05c5c",
  },
  layout: {
    visibility: "visible",
  },
};

const SalineGridUT = {
  id: "salineGridInUT",
  type: "geojson",
  data: Saline10kUT,
};

const SalineGridUTLayer = {
  id: "salineGridInUTLayer",
  name: "Saline grid in UT",
  type: "fill",
  source: "salineGridInUT",
  paint: {
    "fill-opacity": 0.5,
    "fill-color": "#1035EA",
  },
  layout: {
    visibility: "visible",
  },
};

const CO2UT = {
  id: "CO2InUT",
  type: "geojson",
  data: CO2SSUT,
};

const CO2UTLayer = {
  id: "CO2InUTLayer",
  name: "CO2 stationary sources in UT",
  type: "circle",
  source: "CO2InUT",
  paint: {
    "circle-opacity": 0.5,
    "circle-color": "#1BEFCB",
  },
  layout: {
    visibility: "visible",
  },
};

const BasinUT = {
  id: "basinInUT",
  type: "geojson",
  data: SBasinUT,
};

const BasinUTLayer = {
  id: "basinInUTLayer",
  name: "Basin stationary sources in UT",
  type: "fill",
  source: "basinInUT",
  paint: {
    "fill-opacity": 0.5,
    "fill-color": "#54ED12",
  },
  layout: {
    visibility: "visible",
  },
};

export const Sources = [WellUT, SalineUT, SalineGridUT,CO2UT,BasinUT];
export const Layers = [WellUTLayer, SalineUTLayer,SalineGridUTLayer,CO2UTLayer,BasinUTLayer];
