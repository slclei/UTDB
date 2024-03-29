//This renders the root element, which is the main frame of the database
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, NavLink } from "react-router-dom";
import SearchBox from "./searchBox/SearchBox";
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
//login function is not loaded (06/2022)
//import Login from "./elements/logIn";
import Info from "./elements/info";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const egi = "https://www.egi.utah.edu/";
const uu = "https://www.utah.edu";

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
            <tr>
              <td className="header2Text">
                <p>Utah CO2 Capture and Storeage</p>
              </td>
              <td style={{ width: "100%" }} />
              <td className="icons">
                <a
                  href={egi}
                  tooltip-placement="bottom"
                  uib-tooltip="Google Home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="material-icons">home</i>
                </a>
              </td>
              <td className="icons">
                <NavLink
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  tooltip-placement="bottom"
                >
                  <i className="material-icons">refresh</i>
                </NavLink>
              </td>
              <td id="alertIconDiv" className="icons">
                <Info />
              </td>
              <td id="helpDiv" className="icons">
                <NavLink
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  tooltip-placement="bottom"
                >
                  <i className="material-icons">help</i>
                </NavLink>
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
              <td className="login"></td>
            </tr>
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
          <NavLink to={egi} onClick={(e) => e.preventDefault()}>
            Energy and geoscience institute
          </NavLink>
          , and the{" "}
          <NavLink to={uu} onClick={(e) => e.preventDefault()}>
            University of Utah
          </NavLink>
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
