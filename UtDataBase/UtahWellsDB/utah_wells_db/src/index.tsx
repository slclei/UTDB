import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchBox from './searchBox/SearchBox';
import WellService from "./services/WellService";

import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

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
        <Feedback email={true} emailRequired={true} projectId="6286873e712224000473ab51"/>
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
                >
                  <p>Utah CO2 Capture and Storeage</p>
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
            <td id="mapTd">
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
