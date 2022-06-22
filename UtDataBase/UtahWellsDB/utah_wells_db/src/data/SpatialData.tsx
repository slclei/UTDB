//import welldata from "./wellsutless.json";
import welldata from "./wellsutless.json";
import salinedata from "./salineUT.json";

const WellUT={
    id: "wellsInUT",
    type: "geojson",
    data: welldata,
}

const SalineUT={
    id: "salineInUT",
    type: "geojson",
    data: salinedata,
}

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

  export const Sources=[
      WellUT,
      SalineUT,
  ];

  export const Layers=[
    WellUTLayer,
    SalineUTLayer,
  ];