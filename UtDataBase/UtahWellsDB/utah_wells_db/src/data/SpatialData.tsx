import welldata from "./wellsut.json";
import salinegriddata from "./salineGridUT.json";

const WellUT={
    id: "wellsInUT",
    type: "geojson",
    data: welldata,
}

const SalineGridUT={
    id: "salineGridInUT",
    type: "geojson",
    data: salinegriddata,
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

const AvalanchePathsLayer = {
    id: "salineGridInUTLayer",
    name: "Saline grid in UT",
    type: "fill",
    source: "salineGridInUT",
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
      SalineGridUT,
  ];

  export const Layers=[
    WellUTLayer,
    AvalanchePathsLayer,
  ];