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
        <td id="tdSearch" valign="top">
          <div
            className="contentContainerRect ui-resizable"
            style={{width: "20vw", height: "100%" }}
            id="divSearch"
          >
            <div className="headerRect">
              <table>
                <tbody>
                  <tr>
                    <td style={{ padding: 10 }}>
                      <i className="material-icons">search</i>
                    </td>
                    <td className="header1Text" style={{ fontWeight: "bold" }}>
                      Search
                    </td>
                    <td style={{ width: "100%" }} />
                    <td id="bToggleSearch" style={{ padding: "10px 5px" }}>
                      <i
                        className="material-icons"
                        id="activeSearchIconClear"
                        uib-tooltip="Reset Filters"
                      >
                        clear
                      </i>
                      <i
                        className="material-icons"
                        id="inactiveSearchClearIcon"
                        style={{ display: "none", opacity: ".5" }}
                      >
                        clear
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              id="searchContentDiv"
              style={{ padding: 10, overflow: "hidden", height: "100%" }}
            >
              <div id="divAdvanced" style={{ height: "80vh" }}>
                <div
                  style={{ height: "100%", width: "100%", overflow: "auto" }}
                >
                  <div id="filterControl">
                    <table id="advFilterTable">
                      <tbody>
                        <tr>
                          <td>
                            <label>Search:</label>
                          </td>
                          <td>
                            <select
                              className="uiOperatorComboBox"
                              id="searchBy"
                              
                              data-placeholder=" "
                            >
                              <option value="BoardOrder">Board Order</option>
                              <option value="Client">Client</option>
                              <option value="Group">Group</option>
                              <option value="PermitSurfaceFacility">
                                Permit Surface Facility
                              </option>
                              <option value="PermitUIC">Permit UIC</option>
                              <option value="PermitSeismic">
                                Permit Seismic
                              </option>
                              <option value="ProductionEntity">
                                Production Entity
                              </option>
                              <option value="SurfaceFacility">
                                Surface Facility
                              </option>
                              <option defaultValue="Well">
                                Well
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="filterPrompt">API 10:</td>
                          <td>
                            <select
                              id="compareAPI10"
                              className="uiOperatorComboBox"
                              data-placeholder=" "
                            >
                              <option value="" />
                              <option value="Like">Like</option>
                              <option defaultValue="=">
                                =
                              </option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="API10"
                              defaultValue=""
                              className="uiTextBox"
                              placeholder="Filter Input..."
                            />
                            <div
                              className="clearSelectedIcon"
                              onClick={clearFilterInput("API10")}
                              uib-tooltip="Clear"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="filterPrompt">Well Name:</td>
                          <td>
                            <select
                              id="compareWellName"
                              className="uiOperatorComboBox"
                              onChange={opSelectionChanged("compareWellName")}
                              data-placeholder=" "
                            >
                              <option value="" />
                              <option value="Like">Like</option>
                              <option value="=">=</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="WellName"
                              defaultValue=""
                              className="uiTextBox"
                              placeholder="Filter Input..."
                              onKeyUp={textChanged("WellName")}
                            />
                            <div
                              className="clearSelectedIcon"
                              onClick={clearFilterInput("WellName")}
                              uib-tooltip="Clear"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div id="jsTreeAdvancedDiv">
                    <div id="jstreeadvanced" />
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: 40,
                  boxShadow: "none",
                  borderTop: "1px solid #CACACA",
                  boxSizing: "border-box",
                  position: "relative",
                  bottom: 0,
                  width: "100%",
                  left: 0
                }}
                className="headerRect"
              >
                <span
                  id="btnAdd"
                  className="linkText"
                  onClick={filterSearch(true)}
                >
                  Add to Results
                </span>
                <span
                  id="btnApply"
                  className="linkText"
                  onClick={filterSearch(false)}
                >
                  Filter New Results
                </span>
              </div>
            </div>
          </div>
          <div
            className="ui-resizable-handle ui-resizable-e"
            style={{ zIndex: 90 }}
          />
          <div
            className="ui-resizable-handle ui-resizable-w"
            style={{ zIndex: 90 }}
          />
        </td>
        {/*Map*/}
        <td
          id="mapTd"
          style={{ width: "100%", maxWidth: "100%" }}
          valign="top"
          align="center"
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
function clearFilterInput(arg0: string): React.MouseEventHandler<HTMLDivElement> | undefined {
  const e=document.getElementById(arg0) as HTMLInputElement;
  if (e){
    e.value=" ";
  }
  return
}
//opSelectionChanged
function opSelectionChanged(arg0: string): React.ChangeEventHandler<HTMLSelectElement> | undefined {
  const e=document.getElementById(arg0) as HTMLInputElement;
  if (e){
    e.value=" ";
  }
  return
}
function textChanged(arg0: string): React.KeyboardEventHandler<HTMLInputElement> | undefined {
  const e=document.getElementById(arg0) as HTMLInputElement;
  if (e){
    e.value=" ";
  }
  return
}

function filterSearch(arg0: boolean): React.MouseEventHandler<HTMLSpanElement> | undefined {
  //arg0==true, then apply search
  if (arg0){

  }
  //else, clear all contents
  return
}


function exportToCsv(arg0: string): React.MouseEventHandler<HTMLImageElement> | undefined {
  return
}


