import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import SearchBox from "./searchBox/SearchBox";
import WellService from "./services/WellService";

import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import Login from "./elements/logIn";
import { Table } from "@mui/material";
import Info from "./elements/info";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <div>
      <div className="siteHeaderRect">
        <Feedback
          email={true}
          emailRequired={true}
          projectId="6286873e712224000473ab51"
        />
        <table
          style={{
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "100vw",
            height: "50px",
            maxHeight: "50px",
          }}
        >
          <tbody style={{ display: "block" }}>
            <td className="header2Text">
              <p>Utah CO2 Capture and Storeage</p>
            </td>
            <td style={{ width: "100%" }} />
            <td className="icons">
              <a
                href="https://www.egi.utah.edu/"
                tooltip-placement="bottom"
                uib-tooltip="Google Home"
                target="_blank"
                rel="noreferrer"
              >
                <i className="material-icons">home</i>
              </a>
            </td>
            <td className="icons">
              <a
                href="javascript: restart();"
                tooltip-placement="bottom"
                uib-tooltip="Restart Session"
              >
                <i className="material-icons">refresh</i>
              </a>
            </td>
            <td id="alertIconDiv" className="icons">
              <Info />
            </td>
            <td id="helpDiv" className="icons">
              <a
                href="javascript: help();"
                tooltip-placement="bottom"
                uib-tooltip="Help"
              >
                <i className="material-icons">help</i>
              </a>
            </td>
            <td id="reportingIconDiv">
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
            <td className="login">
              <Login signOut={undefined} />
            </td>
          </tbody>
        </table>
      </div>
      <div id="tableSearch">
        <div id="trSearchMap">
          {/*Search*/}
          <SearchBox />

          {/*Map*/}
          <div id="mapTd">
            <div
              id="divMap"
              className="contentContainerRect"
              style={{
                height: "100%",
                border: "1px solid #e6e6e6",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            >
              <App />
            </div>
          </div>
        </div>

        {/*Credits*/}
        <div id="credits">
          Development support provided by: the{" "}
          <a href="https://www.egi.utah.edu/" target="_blank" rel="noreferrer">
            Energy and geoscience institute
          </a>
          , and the{" "}
          <a href="https://www.utah.edu/" target="_blank" rel="noreferrer">
            University of Utah
          </a>
          .&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
