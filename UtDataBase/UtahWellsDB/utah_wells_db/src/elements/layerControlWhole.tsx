/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom";
import { LayerControl } from "../layerControl/LayerControl";
import { MapControl } from "../basemap/exportMap";

class LayerControlWhole extends React.Component {
  state = { showing: false };

  public static async display(this: any, showing: any) {
    const l1 = MapControl[1].layer;
    const l2 = MapControl[2].control;
    //this.setState({ showing: !showing });
    console.log("1");
    //if (l1 !== null && l2!== null) {
    console.log("2");
    console.log(MapControl[0].map);
    console.log(l1);
    console.log(typeof l2);
    const layers = React.createElement("LayerControl", {
      id: "inMapLegend2",
      layers: { l1 },
      onToggle: { l2 },
    });

    ReactDOM.render(layers, document.getElementById("LayerControl"));
    console.log("3");
    //}
    console.log("4");

    return null;
  }

  render() {
    const { showing } = this.state;

    return (
      <div style={{ position: "relative" }} className="popover-icons">
        <i
          style={{ cursor: "pointer" }}
          className="material-icons"
          id="layersIcon"
          uib-tooltip="Layers"
          onClick={() => LayerControlWhole.display(showing)}
        >
          layers
        </i>
        <div className="popover-message">Layer Control1</div>
        <div id="LayerControl" />
      </div>
    );
  }
}

export default LayerControlWhole;
