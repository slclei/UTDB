import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Foo from './elements/elementControl';
import AddressSearch from './elements/addressSearch';
import XySearch from './elements/xySearch';
import Buff from './elements/bufferS';
import PrintPage from './elements/printPage';
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchBox from './searchBox/SearchBox';
import WellService from "./services/WellService";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <div>
  <div
    className="siteHeaderRect"
    style={{
      height: 40,
      width: "100%",
      margin: "0px 0px 10px 0px",
      maxWidth: "100vw"
    }}
  >
    <table
      style={{
        boxSizing: "border-box",
        width: "100%",
        margin: "0px 0px 0px 0px",
        padding: "0px 10px",
        maxWidth: "100vw"
      }}
    >
      <tbody>
        <tr style={{ marginBottom: 10, display: "block" }}>
          <td
            className="header2Text"
            colSpan={2}
            style={{ fontWeight: "bold", padding: 10 }}
          >
            <b style={{ whiteSpace: "nowrap" }}>
              Utah CO2 Capture and Storeage
            </b>
          </td>
          <td style={{ width: "100%" }} />
          <td className="icons" style={{ padding: "10px 5px" }}>
            <a
              href="https://www.egi.utah.edu/"
              tooltip-placement="bottom"
              uib-tooltip="Google Home"
              target="_blank"
            >
              <i className="material-icons">home</i>
            </a>
          </td>
          <td className="icons" style={{ padding: "10px 5px" }}>
            <a
              href="javascript: restart();"
              tooltip-placement="bottom"
              uib-tooltip="Restart Session"
            >
              <i className="material-icons">refresh</i>
            </a>
          </td>
          <td
            id="alertIconDiv"
            className="icons"
            style={{ padding: "10px 5px" }}
          >
            <a
              href="https://www.google.com"
              tooltip-placement="bottom"
              uib-tooltip="alert Session"
            >
              <i className="material-icons">info</i>
            </a>
          </td>
          <td id="helpDiv" className="icons" style={{ padding: "10px 5px" }}>
            <a
              href="javascript: help();"
              tooltip-placement="bottom"
              uib-tooltip="Help"
            >
              <i className="material-icons">help</i>
            </a>
          </td>
          <td id="reportingIconDiv" style={{ padding: "10px 5px" }}>
            <a
              id="reportTop"
              tooltip-placement="bottom-right"
              popover-is-open="reportPopoverOpen"
              popover-trigger="outsideClick"
              uib-tooltip="Reporting"
              uib-popover-template="'reportingTemplate.html'"
              popover-placement="bottom-right"
            >
              <i className="material-icons">folder</i>
            </a>
          </td>
          <td className="login" style={{ padding: "10px 5px" }}>
            <button
              type="button"
              id="logInBtn"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#loginDialog"
            >
              Log In
            </button>
            <button
              type="button"
              id="logOutBtn"
              className="btn btn-primary"
              style={{ display: "none", opacity: ".5" }}
            >
              Log Out
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <table id="tableSearch">
    <tbody>
      <tr id="trSearchMap">
        {/*Search*/}
        <SearchBox />
        {/*Map*/}
        <td
          id="mapTd"
        >
          
          <div
            id="divMap"
            className="contentContainerRect"
            style={{
              height: "100%",
              border: "1px solid #e6e6e6",
              maxWidth: "100%",
              maxHeight: "100%"
            }}
          >
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
                      className="header1Text"
                    >
                      Map
                    </td>
                    <td id="show-location" style={{ width: "100%" }} />
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
                      <div id="measureAreaDiv">
                        <i
                          id="activeMeasureAreaIcon"
                          style={{ cursor: "pointer" }}
                          className="material-icons"
                          uib-tooltip="Measure Area"
                        >
                          area_chart
                        </i>
                        <i
                          id="deactivateMeasureAreaIcon"
                          style={{ cursor: "pointer", display: "none" }}
                          className="material-icons"
                          uib-tooltip="Measure Area"
                        >
                          area_chart
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
            <App />            
            </div>
          
        </td>
        <td rowSpan={3}>
          <div id="outputDiv" />
        </td>
      </tr>

      {/*Credits*/}
      <tr>
        <td id="credits" colSpan={3} style={{ paddingBottom: 5 }}>
          Development support provided by: the{" "}
          <a href="https://www.egi.utah.edu/" target="_blank">
            Energy and geoscience institute
          </a>
          , and the{" "}
          <a href="https://www.utah.edu/" target="_blank">
            University of Utah
          </a>
          .&nbsp;&nbsp;&nbsp;
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
