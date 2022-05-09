import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

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
            style={{ height: "100%" }}
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
                              <option value="Well" selected={true}>
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
                              <option value="=" selected={true}>
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
                              onClick={clearFilterInput(this)}
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
                              onChange={opSelectionChanged(this)}
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
                              onKeyUp={textChanged(this)}
                            />
                            <div
                              className="clearSelectedIcon"
                              onClick={clearFilterInput(this)}
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
                    <td style={{ width: "100%" }} />
                    <td id="addressIconDiv" style={{ padding: "10px 5px" }}>
                      <div id="addressSelectDiv">
                        <i
                          style={{ cursor: "pointer" }}
                          className="material-icons"
                          id="addressIcon"
                          uib-tooltip="Search by Address"
                        >
                          place
                        </i>
                        <i
                          className="material-icons"
                          style={{ cursor: "pointer", display: "none" }}
                          id="addressHideIcon"
                          uib-tooltip="Search by Address"
                        >
                          place
                        </i>
                      </div>
                    </td>
                    <td id="xyIconDiv" style={{ padding: "10px 5px" }}>
                      <div id="xySelectDiv">
                        <i
                          style={{ cursor: "pointer" }}
                          id="xyIcon"
                          className="material-icons"
                          uib-tooltip="Center by X, Y or Latitude, Longitude"
                        >
                          my_location
                        </i>
                        <i
                          className="material-icons"
                          style={{ cursor: "pointer", display: "none" }}
                          id="xyHideIcon"
                          uib-tooltip="Center by X, Y or Latitude, Longitude"
                        >
                          my_location
                        </i>
                      </div>
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
                      <div id="bufferSelectDiv">
                        <i
                          style={{ cursor: "pointer", opacity: "0.5" }}
                          id="bufferIcon"
                          className="material-icons"
                          uib-tooltip="Buffer Selection"
                        >
                          radio_button_checked
                        </i>
                        <i
                          style={{ cursor: "pointer", display: "none" }}
                          id="bufferHideIcon"
                          className="material-icons"
                          uib-tooltip="Buffer Selection"
                        >
                          radio_button_checked
                        </i>
                      </div>
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
                      <div id="printSelectDiv">
                        <i
                          style={{ cursor: "pointer" }}
                          id="printIcon"
                          className="material-icons"
                          uib-tooltip="Print Map"
                        >
                          print
                        </i>
                        <i
                          style={{ cursor: "pointer", display: "none" }}
                          id="printHideIcon"
                          className="material-icons"
                          uib-tooltip="Print Map"
                        >
                          print
                        </i>
                      </div>
                    </td>
                    <td
                      id="layerIconDiv"
                      style={{ padding: "10px 10px 10px 5px" }}
                    >
                      <div id="layerSelectDiv">
                        <i
                          id="layersIcon"
                          style={{ cursor: "pointer" }}
                          className="material-icons"
                          uib-tooltip="Layers"
                          tooltip-placement="top-right"
                        >
                          layers
                        </i>
                        <i
                          id="layersHideIcon"
                          style={{ cursor: "pointer", display: "none" }}
                          className="material-icons"
                          uib-tooltip="Layers"
                          tooltip-placement="top-right"
                        >
                          layers
                        </i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              id="mapContentDiv"
              style={{
                width: "100%",
                maxWidth: "100%",
                padding: 10,
                border: "none",
                position: "relative",
                boxSizing: "border-box",
                height: "100%",
                maxHeight: "100%"
              }}
            >
              <div
                id="olMap"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  maxHeight: "100%"
                }}
              >
                <div
                  id="root"
                  className="ol-viewport"
                  touch-action="none"
                  data-view={1}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    touchAction: "none",
                    maxWidth: "100%",
                    maxHeight: "100vh"
                  }}
                ></div>
                {/*xy popover template*/}
                <div
                  id="xyPopoverTemplate"
                  className="popover bottom"
                  style={{
                    position: "absolute",
                    right: 10,
                    zIndex: 1050,
                    width: 257,
                    display: "none !important",
                    left: 303
                  }}
                >
                  <div className="arrow" style={{ top: "-11px", left: 230 }} />
                  <div style={{ width: 254, padding: "10px 10px" }}>
                    <table
                      className="header1Text"
                      style={{ fontWeight: "bold" }}
                    >
                      <tbody>
                        <tr style={{ boxSizing: "border-box" }}>
                          <td className="header1Text">
                            <strong>Center X, Y, Lat, Long</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="popoverLine" style={{ width: 234 }} />
                    <div id="centerContent">
                      <table>
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{
                                fontWeight: "bold",
                                verticalAlign: "middle",
                                width: 150,
                                padding: "0px 10px 10px 10px"
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                Choose coordinate system:
                              </div>
                            </td>
                            <td
                              className="dropdownText"
                              style={{
                                width: 80,
                                padding: "0px 10px 10px 0px"
                              }}
                            >
                              <select
                                style={{ width: 80 }}
                                name="csSelect"
                                id="csSelect"                                
                              >
                                <option
                                  value="DD"
                                  srsdef="EPSG:4326"
                                  proj4def="+proj=longlat +datum=WGS84 +no_defs"
                                >
                                  Decimal Degrees
                                </option>
                                <option
                                  value="DM"
                                  srsdef="EPSG:4326"
                                  proj4def="+proj=longlat +datum=WGS84 +no_defs"
                                >
                                  Decimal Minutes
                                </option>
                                <option
                                  value="DMS"
                                  srsdef="EPSG:4326"
                                  proj4def="+proj=longlat +datum=WGS84 +no_defs"
                                >
                                  Degrees Minutes Seconds
                                </option>
                                <option
                                  value="XY"
                                  srsdef="EPSG:3742"
                                  proj4def="+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
                                >
                                  UTM 12N
                                </option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{
                          padding: "0px 20px 10px 35px",
                          display: "block"
                        }}
                        id="DD"
                        className="locType"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 5 }}
                            >
                              Latitude:
                            </td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 120, height: 20 }}
                                placeholder="Latitude..."
                                id="ddY"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="header3Text"
                              style={{
                                fontWeight: "bold",
                                paddingRight: 5,
                                paddingTop: 10
                              }}
                            >
                              Longitude:
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ height: 20, width: 120 }}
                                placeholder="Longitude..."
                                id="ddX"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{ padding: "0px 0px 10px", display: "none" }}
                        id="DM"
                        className="locType"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 5 }}
                            >
                              Latitude:
                            </td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={20}
                                id="dmYD"
                              />
                            </td>
                            <td style={{ padding: "0px 10px 0px 4px" }}>
                              Degrees
                            </td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={12}
                                id="dmYM"
                              />
                            </td>
                            <td style={{ padding: "0px 10px 0px 4px" }}>
                              Minutes
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="header3Text"
                              style={{
                                fontWeight: "bold",
                                paddingRight: 5,
                                paddingTop: 10
                              }}
                            >
                              Longitude:
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={20}
                                id="dmXD"
                              />
                            </td>
                            <td style={{ padding: "10px 10px 0px 4px" }}>
                              Degrees
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={12}
                                id="dmXM"
                              />
                            </td>
                            <td style={{ padding: "10px 10px 0px 4px" }}>
                              Minutes
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{ padding: "0px 0px 10px", display: "none" }}
                        id="DMS"
                        className="locType"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 5 }}
                            >
                              Latitude:
                            </td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={20}
                                id="dmsYD"
                              />
                            </td>
                            <td>Deg.</td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={12}
                                id="dmsYM"
                              />
                            </td>
                            <td>Min.</td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 25, height: 20 }}
                                placeholder={8}
                                id="dmsYS"
                              />
                            </td>
                            <td>Sec.</td>
                          </tr>
                          <tr>
                            <td
                              className="header3Text"
                              style={{
                                fontWeight: "bold",
                                paddingRight: 5,
                                paddingTop: 10
                              }}
                            >
                              Longitude:
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={20}
                                id="dmsXD"
                              />
                            </td>
                            <td style={{ padding: "10px 5px 0px 2px" }}>
                              Deg.
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ width: 30, height: 20 }}
                                placeholder={12}
                                id="dmsXM"
                              />
                            </td>
                            <td style={{ padding: "10px 5px 0px 2px" }}>
                              Min.
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ width: 25, height: 20 }}
                                placeholder={8}
                                id="dmsXS"
                              />
                            </td>
                            <td style={{ padding: "10px 5px 0px 2px" }}>
                              Sec.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{
                          padding: "0px 45px 10px 51px",
                          display: "none"
                        }}
                        id="XY"
                        className="locType"
                      >
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 5 }}
                            >
                              X:
                            </td>
                            <td>
                              <input
                                className="textfieldInputText"
                                style={{ width: 120, height: 20 }}
                                placeholder={100}
                                id="xyX"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="header3Text"
                              style={{
                                fontWeight: "bold",
                                paddingRight: 5,
                                paddingTop: 10
                              }}
                            >
                              Y:
                            </td>
                            <td style={{ paddingTop: 10 }}>
                              <input
                                className="textfieldInputText"
                                style={{ height: 20, width: 120 }}
                                placeholder={-200}
                                id="xyY"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <img
                        style={{ paddingLeft: 47, cursor: "pointer" }}
                        src="images/assets/goButton.png"
                        onClick="calculate($('#txtDistance').val(), $('#cboUnits').val());"
                      />
                      <img
                        src="images/assets/cancelButton.png"
                        onClick="$('#xyIcon').show(); $('#xyHideIcon').hide(); $('#xyPopoverTemplate').hide(); "
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
                {/*layers popover template*/}
                <div
                  id="layersPopoverTemplate"
                  style={{
                    position: "absolute",
                    right: 10,
                    zIndex: 1050,
                    display: "none",
                    left: 512,
                    height: 322
                  }}
                  className="popover bottom"
                >
                  <div className="arrow" style={{ top: "-10px", right: 0 }} />
                  <div
                    id="reportingBackgroundRect"
                    className="reportingPopoverBackgroundRect"
                    style={{
                      width: 371,
                      top: 50,
                      padding: 10,
                      backgroundColor: "rgb(255, 255, 255)",
                      height: 320
                    }}
                  >
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "0px 5px 10px 0px" }}>
                            <img src="images/assets/layersIconDark.png" />
                          </td>
                          <td
                            className="header1Text"
                            style={{
                              fontWeight: "bold",
                              padding: "0px 0px 10px 5px"
                            }}
                          >
                            Layers
                          </td>
                          <td style={{ width: "100%" }} />
                          <td>
                            <img
                              id="pinLayersIcon"
                              src="images/assets/pinIcon.png"
                              style={{ cursor: "pointer" }}
                              onClick="pinLayers()"
                              uib-tooltip="Pin Layers"
                              tooltip-placement="top-right"
                            />
                            <img
                              id="unpinLayersIcon"
                              src="images/assets/unpinIcon.png"
                              style={{ cursor: "pointer", display: "none" }}
                              onClick="unpinLayers()"
                              uib-tooltip="Unpin Layers"
                              tooltip-placement="top-right"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="popoverLine"
                      style={{ width: 324, margin: "0px 0px 10px 15px" }}
                    />
                    <div active="active" className="ng-isolate-scope">
                      <ul
                        className="nav nav-tabs"
                        ng-class="{'nav-stacked': vertical, 'nav-justified': justified}"
                        ng-transclude=""
                      >
                        <li
                          ng-class="[{active: active, disabled: disabled}, classes]"
                          className="uib-tab nav-item ng-scope ng-isolate-scope active"
                          index={0}
                          style={{ width: "50%" }}
                        >
                          <a
                            href=""
                            ng-click="select()"
                            className="nav-link ng-binding"
                            uib-tab-heading-transclude=""
                          >
                            <uib-tab-heading className="ng-scope">
                              <img
                                id="darkLayerIcon"
                                src="images/assets/layersIconDark.png"
                                style={{ display: "block", margin: "auto" }}
                                uib-tooltip="Visible"
                              />
                            </uib-tab-heading>
                          </a>
                        </li>
                        <li
                          ng-class="[{active: active, disabled: disabled}, classes]"
                          className="uib-tab nav-item ng-scope ng-isolate-scope"
                          style={{ width: "50%" }}
                        >
                          <a
                            href=""
                            ng-click="select()"
                            className="nav-link ng-binding"
                            uib-tab-heading-transclude=""
                          >
                            <uib-tab-heading className="ng-scope">
                              <img
                                src="images/assets/filterIconDark.png"
                                style={{
                                  display: "block",
                                  margin: "auto",
                                  height: 17
                                }}
                                uib-tooltip="Selectable"
                              />
                            </uib-tab-heading>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        {/* ngRepeat: tab in tabset.tabs */}
                        <div
                          className="tab-pane ng-scope active"
                          ng-repeat="tab in tabset.tabs"
                          ng-class="{active: tabset.active === tab.index}"
                          uib-tab-content-transclude="tab"
                        >
                          <div
                            style={{
                              margin: "10px 0px",
                              fontWeight: "bold",
                              textAlign: "left"
                            }}
                            className="header4Text ng-scope"
                          >
                            Display
                          </div>
                          <div
                            id="customLayerSwitcher"
                            style={{
                              backgroundColor: "rgb(244, 244, 244)",
                              padding: 5,
                              boxShadow:
                                "rgba(0, 0, 0, 0.75) 4px 5px 6px -6px inset",
                              overflowY: "scroll",
                              height: 185
                            }}
                            className="ng-scope"
                          >
                            <uib-accordion
                              close-others="false"
                              className="ng-scope"
                            >
                              <div
                                role="tablist"
                                className="panel-group"
                                ng-transclude=""
                              >
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen0"
                                  style={{}}
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-61-4790-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-61-4790-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen0, 'glyphicon-chevron-right': !isOpen0}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_Well_DPRASlider"
                                            onchange='changeLayerOpacity($(this).val(), "Drilling Permits", "group_Well_DPRAOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Drilling Permits", "group_Well_DPRAOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="group_Well_DPRA ng-scope"
                                            onClick="toggleLayer('Drilling Permits', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Well_DPRA ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_DPRA")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Drilling Permits
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-61-4790-panel"
                                    aria-labelledby="accordiongroup-61-4790-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_Well_DPRAControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen1"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-145-420-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-145-420-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen1, 'glyphicon-chevron-right': !isOpen1}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="Well_DPRASlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Permits", "Well_DPRAOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Permits", "Well_DPRAOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="Well_DPRA ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Permits', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_Well_DPRA ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_DPRA")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Permits
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-145-420-panel"
                                              aria-labelledby="accordiongroup-145-420-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="Well_DPRAControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_DPRA" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen2"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-147-7294-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-147-7294-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen2, 'glyphicon-chevron-right': !isOpen2}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackB_DPRASlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Permits Tracks (Built)", "WellTrackB_DPRAOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Permits Tracks (Built)", "WellTrackB_DPRAOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackB_DPRA ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Permits Tracks (Built)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackB_DPRA ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_DPRA")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Permits
                                                      Tracks (Built)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-147-7294-panel"
                                              aria-labelledby="accordiongroup-147-7294-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackB_DPRAControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_DPRA" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen3"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-149-8648-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-149-8648-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen3, 'glyphicon-chevron-right': !isOpen3}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackP_DPRASlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Permits Tracks (Planned)", "WellTrackP_DPRAOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Permits Tracks (Planned)", "WellTrackP_DPRAOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackP_DPRA ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Permits Tracks (Planned)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackP_DPRA ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_DPRA")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Permits
                                                      Tracks (Planned)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-149-8648-panel"
                                              aria-labelledby="accordiongroup-149-8648-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackP_DPRAControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_DPRA" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen4"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-151-4856-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-151-4856-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen4, 'glyphicon-chevron-right': !isOpen4}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellBH_DPRASlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Permits  Bottom Hole", "WellBH_DPRAOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Permits  Bottom Hole", "WellBH_DPRAOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellBH_DPRA ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Permits  Bottom Hole', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellBH_DPRA ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_DPRA")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Permits
                                                      Bottom Hole
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-151-4856-panel"
                                              aria-labelledby="accordiongroup-151-4856-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellBH_DPRAControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_DPRA" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen5"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-63-3220-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-63-3220-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen5, 'glyphicon-chevron-right': !isOpen5}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_Well_DWDSWSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Drilling Wells", "group_Well_DWDSWOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Drilling Wells", "group_Well_DWDSWOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="group_Well_DWDSW ng-scope"
                                            onClick="toggleLayer('Drilling Wells', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Well_DWDSW ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_DWDSW")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Drilling Wells
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-63-3220-panel"
                                    aria-labelledby="accordiongroup-63-3220-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_Well_DWDSWControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen6"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-153-9350-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-153-9350-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen6, 'glyphicon-chevron-right': !isOpen6}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="Well_DWDSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling", "Well_DWDSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling", "Well_DWDSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="Well_DWDSW ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_Well_DWDSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_DWDSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-153-9350-panel"
                                              aria-labelledby="accordiongroup-153-9350-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="Well_DWDSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_DWDSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen7"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-155-6093-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-155-6093-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen7, 'glyphicon-chevron-right': !isOpen7}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackB_DWDSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Tracks (Built)", "WellTrackB_DWDSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Tracks (Built)", "WellTrackB_DWDSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackB_DWDSW ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Tracks (Built)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackB_DWDSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_DWDSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Tracks
                                                      (Built)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-155-6093-panel"
                                              aria-labelledby="accordiongroup-155-6093-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackB_DWDSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_DWDSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen8"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-157-8415-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-157-8415-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen8, 'glyphicon-chevron-right': !isOpen8}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackP_DWDSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Tracks (Planned)", "WellTrackP_DWDSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Tracks (Planned)", "WellTrackP_DWDSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackP_DWDSW ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Tracks (Planned)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackP_DWDSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_DWDSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Tracks
                                                      (Planned)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-157-8415-panel"
                                              aria-labelledby="accordiongroup-157-8415-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackP_DWDSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_DWDSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen9"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-159-448-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-159-448-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen9, 'glyphicon-chevron-right': !isOpen9}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellBH_DWDSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Drilling Bottom Hole", "WellBH_DWDSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Drilling Bottom Hole", "WellBH_DWDSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellBH_DWDSW ng-scope"
                                                      onClick="toggleLayer('Wells - Drilling Bottom Hole', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellBH_DWDSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_DWDSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Drilling Bottom
                                                      Hole
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-159-448-panel"
                                              aria-labelledby="accordiongroup-159-448-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellBH_DWDSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_DWDSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen10"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-65-1040-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-65-1040-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen10, 'glyphicon-chevron-right': !isOpen10}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_Well_OWCPSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Production Wells", "group_Well_OWCPOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Production Wells", "group_Well_OWCPOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="group_Well_OWCP ng-scope"
                                            onClick="toggleLayer('Production Wells', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Well_OWCP ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_OWCP")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Production Wells
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-65-1040-panel"
                                    aria-labelledby="accordiongroup-65-1040-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_Well_OWCPControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen11"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-161-6272-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-161-6272-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen11, 'glyphicon-chevron-right': !isOpen11}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="Well_OWCPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Production", "Well_OWCPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Production", "Well_OWCPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="Well_OWCP ng-scope"
                                                      onClick="toggleLayer('Wells - Production', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_Well_OWCP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_OWCP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Production
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-161-6272-panel"
                                              aria-labelledby="accordiongroup-161-6272-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="Well_OWCPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_OWCP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen12"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-163-5684-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-163-5684-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen12, 'glyphicon-chevron-right': !isOpen12}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackB_OWCPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Production Tracks (Built)", "WellTrackB_OWCPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Production Tracks (Built)", "WellTrackB_OWCPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackB_OWCP ng-scope"
                                                      onClick="toggleLayer('Wells - Production Tracks (Built)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackB_OWCP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_OWCP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Production Tracks
                                                      (Built)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-163-5684-panel"
                                              aria-labelledby="accordiongroup-163-5684-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackB_OWCPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_OWCP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen13"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-165-6037-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-165-6037-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen13, 'glyphicon-chevron-right': !isOpen13}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackP_OWCPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Production Tracks (Planned)", "WellTrackP_OWCPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Production Tracks (Planned)", "WellTrackP_OWCPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackP_OWCP ng-scope"
                                                      onClick="toggleLayer('Wells - Production Tracks (Planned)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackP_OWCP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_OWCP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Production Tracks
                                                      (Planned)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-165-6037-panel"
                                              aria-labelledby="accordiongroup-165-6037-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackP_OWCPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_OWCP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen14"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-167-3543-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-167-3543-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen14, 'glyphicon-chevron-right': !isOpen14}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellBH_OWCPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Production Bottom Hole", "WellBH_OWCPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Production Bottom Hole", "WellBH_OWCPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellBH_OWCP ng-scope"
                                                      onClick="toggleLayer('Wells - Production Bottom Hole', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellBH_OWCP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_OWCP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Production Bottom
                                                      Hole
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-167-3543-panel"
                                              aria-labelledby="accordiongroup-167-3543-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellBH_OWCPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_OWCP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen15"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-67-8682-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-67-8682-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen15, 'glyphicon-chevron-right': !isOpen15}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_Well_OSWSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Service Wells", "group_Well_OSWOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Service Wells", "group_Well_OSWOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="group_Well_OSW ng-scope"
                                            onClick="toggleLayer('Service Wells', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Well_OSW ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_OSW")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Service Wells
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-67-8682-panel"
                                    aria-labelledby="accordiongroup-67-8682-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_Well_OSWControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen16"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-169-8049-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-169-8049-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen16, 'glyphicon-chevron-right': !isOpen16}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="Well_OSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Service", "Well_OSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Service", "Well_OSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="Well_OSW ng-scope"
                                                      onClick="toggleLayer('Wells - Service', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_Well_OSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_OSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Service
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-169-8049-panel"
                                              aria-labelledby="accordiongroup-169-8049-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="Well_OSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_OSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen17"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-171-8904-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-171-8904-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen17, 'glyphicon-chevron-right': !isOpen17}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackB_OSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Service Tracks (Built)", "WellTrackB_OSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Service Tracks (Built)", "WellTrackB_OSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackB_OSW ng-scope"
                                                      onClick="toggleLayer('Wells - Service Tracks (Built)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackB_OSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_OSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Service Tracks
                                                      (Built)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-171-8904-panel"
                                              aria-labelledby="accordiongroup-171-8904-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackB_OSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_OSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen18"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-173-9454-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-173-9454-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen18, 'glyphicon-chevron-right': !isOpen18}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackP_OSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Service Tracks (Planned)", "WellTrackP_OSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Service Tracks (Planned)", "WellTrackP_OSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackP_OSW ng-scope"
                                                      onClick="toggleLayer('Wells - Service Tracks (Planned)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackP_OSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_OSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Service Tracks
                                                      (Planned)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-173-9454-panel"
                                              aria-labelledby="accordiongroup-173-9454-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackP_OSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_OSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen19"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-175-727-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-175-727-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen19, 'glyphicon-chevron-right': !isOpen19}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellBH_OSWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Service Bottom Hole", "WellBH_OSWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Service Bottom Hole", "WellBH_OSWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellBH_OSW ng-scope"
                                                      onClick="toggleLayer('Wells - Service Bottom Hole', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellBH_OSW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_OSW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Service Bottom
                                                      Hole
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-175-727-panel"
                                              aria-labelledby="accordiongroup-175-727-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellBH_OSWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_OSW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen20"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-69-2852-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-69-2852-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen20, 'glyphicon-chevron-right': !isOpen20}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_Well_PAWSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Plugged Wells", "group_Well_PAWOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Plugged Wells", "group_Well_PAWOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="group_Well_PAW ng-scope"
                                            onClick="toggleLayer('Plugged Wells', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Well_PAW ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_PAW")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Plugged Wells
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-69-2852-panel"
                                    aria-labelledby="accordiongroup-69-2852-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_Well_PAWControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen21"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-177-9048-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-177-9048-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen21, 'glyphicon-chevron-right': !isOpen21}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="Well_PAWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Plugged", "Well_PAWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Plugged", "Well_PAWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="Well_PAW ng-scope"
                                                      onClick="toggleLayer('Wells - Plugged', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_Well_PAW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_PAW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Plugged
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-177-9048-panel"
                                              aria-labelledby="accordiongroup-177-9048-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="Well_PAWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_PAW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen22"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-179-3306-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-179-3306-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen22, 'glyphicon-chevron-right': !isOpen22}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackB_PAWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Plugged Tracks (Built)", "WellTrackB_PAWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Plugged Tracks (Built)", "WellTrackB_PAWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackB_PAW ng-scope"
                                                      onClick="toggleLayer('Wells - Plugged Tracks (Built)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackB_PAW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_PAW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Plugged Tracks
                                                      (Built)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-179-3306-panel"
                                              aria-labelledby="accordiongroup-179-3306-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackB_PAWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_PAW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen23"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-181-4742-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-181-4742-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen23, 'glyphicon-chevron-right': !isOpen23}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackP_PAWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Plugged Tracks (Planned)", "WellTrackP_PAWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Plugged Tracks (Planned)", "WellTrackP_PAWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackP_PAW ng-scope"
                                                      onClick="toggleLayer('Wells - Plugged Tracks (Planned)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackP_PAW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_PAW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Plugged Tracks
                                                      (Planned)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-181-4742-panel"
                                              aria-labelledby="accordiongroup-181-4742-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackP_PAWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_PAW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen24"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-183-1636-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-183-1636-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen24, 'glyphicon-chevron-right': !isOpen24}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellBH_PAWSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Plugged Bottom Hole", "WellBH_PAWOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Plugged Bottom Hole", "WellBH_PAWOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellBH_PAW ng-scope"
                                                      onClick="toggleLayer('Wells - Plugged Bottom Hole', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellBH_PAW ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_PAW")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Plugged Bottom
                                                      Hole
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-183-1636-panel"
                                              aria-labelledby="accordiongroup-183-1636-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellBH_PAWControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_PAW" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen25"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-71-2403-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-71-2403-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen25, 'glyphicon-chevron-right': !isOpen25}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_Well_CRDPSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Cancelled Permits", "group_Well_CRDPOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Cancelled Permits", "group_Well_CRDPOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="group_Well_CRDP ng-scope"
                                            onClick="toggleLayer('Cancelled Permits', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Well_CRDP ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_CRDP")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Cancelled Permits
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-71-2403-panel"
                                    aria-labelledby="accordiongroup-71-2403-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_Well_CRDPControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen26"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-185-3071-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-185-3071-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen26, 'glyphicon-chevron-right': !isOpen26}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="Well_CRDPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits", "Well_CRDPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits", "Well_CRDPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="Well_CRDP ng-scope"
                                                      onClick="toggleLayer('Wells - Cancelled Permits', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_Well_CRDP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_CRDP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Cancelled Permits
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-185-3071-panel"
                                              aria-labelledby="accordiongroup-185-3071-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="Well_CRDPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWell_CRDP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen27"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-187-2489-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-187-2489-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen27, 'glyphicon-chevron-right': !isOpen27}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackB_CRDPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits Tracks (Built)", "WellTrackB_CRDPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits Tracks (Built)", "WellTrackB_CRDPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackB_CRDP ng-scope"
                                                      onClick="toggleLayer('Wells - Cancelled Permits Tracks (Built)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackB_CRDP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_CRDP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Cancelled Permits
                                                      Tracks (Built)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-187-2489-panel"
                                              aria-labelledby="accordiongroup-187-2489-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackB_CRDPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackB_CRDP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen28"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-189-1455-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-189-1455-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen28, 'glyphicon-chevron-right': !isOpen28}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellTrackP_CRDPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits Tracks (Planned)", "WellTrackP_CRDPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits Tracks (Planned)", "WellTrackP_CRDPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellTrackP_CRDP ng-scope"
                                                      onClick="toggleLayer('Wells - Cancelled Permits Tracks (Planned)', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellTrackP_CRDP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_CRDP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Cancelled Permits
                                                      Tracks (Planned)
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-189-1455-panel"
                                              aria-labelledby="accordiongroup-189-1455-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellTrackP_CRDPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellTrackP_CRDP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen29"
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-191-245-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-191-245-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen29, 'glyphicon-chevron-right': !isOpen29}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="WellBH_CRDPSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits Bottom Hole", "WellBH_CRDPOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Wells - Cancelled Permits Bottom Hole", "WellBH_CRDPOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="WellBH_CRDP ng-scope"
                                                      onClick="toggleLayer('Wells - Cancelled Permits Bottom Hole', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_WellBH_CRDP ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_CRDP")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Wells - Cancelled Permits
                                                      Bottom Hole
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-191-245-panel"
                                              aria-labelledby="accordiongroup-191-245-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="WellBH_CRDPControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3AWellBH_CRDP" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen30"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-73-8385-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-73-8385-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen30, 'glyphicon-chevron-right': !isOpen30}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="PLSSTownshipsSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Township - Range", "PLSSTownshipsOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Township - Range", "PLSSTownshipsOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="PLSSTownships ng-scope"
                                            onClick="toggleLayer('Township - Range', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_PLSSTownships ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3APLSSTownships")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Township - Range
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-73-8385-panel"
                                    aria-labelledby="accordiongroup-73-8385-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="PLSSTownshipsControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3APLSSTownships&SCALE=500000" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen31"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-75-6312-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-75-6312-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen31, 'glyphicon-chevron-right': !isOpen31}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={50}
                                            id="PLSSSectionsSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Section", "PLSSSectionsOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Section", "PLSSSectionsOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkboxSelected.png"
                                            className="PLSSSections ng-scope"
                                            onClick="toggleLayer('Section', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_PLSSSections ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3APLSSSections")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Section
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-75-6312-panel"
                                    aria-labelledby="accordiongroup-75-6312-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="PLSSSectionsControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3APLSSSections&SCALE=500000" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen32"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-77-7501-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-77-7501-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen32, 'glyphicon-chevron-right': !isOpen32}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="facilitylocationSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Surface Facilities", "facilitylocationOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Surface Facilities", "facilitylocationOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="facilitylocation ng-scope"
                                            onClick="toggleLayer('Surface Facilities', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_facilitylocation ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3Afacilitylocation")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Surface Facilities
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-77-7501-panel"
                                    aria-labelledby="accordiongroup-77-7501-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="facilitylocationControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3Afacilitylocation" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen33"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-79-9182-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-79-9182-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen33, 'glyphicon-chevron-right': !isOpen33}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="surfacefacilitypermitSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Surface Facility Permits", "surfacefacilitypermitOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Surface Facility Permits", "surfacefacilitypermitOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="surfacefacilitypermit ng-scope"
                                            onClick="toggleLayer('Surface Facility Permits', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_surfacefacilitypermit ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3Asurfacefacilitypermit")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Surface Facility Permits
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-79-9182-panel"
                                    aria-labelledby="accordiongroup-79-9182-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="surfacefacilitypermitControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3Asurfacefacilitypermit" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen34"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-81-566-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-81-566-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen34, 'glyphicon-chevron-right': !isOpen34}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="uicpermitSlider"
                                            onchange='changeLayerOpacity($(this).val(), "UIC Permits", "uicpermitOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "UIC Permits", "uicpermitOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="uicpermit ng-scope"
                                            onClick="toggleLayer('UIC Permits', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_uicpermit ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3Auicpermit")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            UIC Permits
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-81-566-panel"
                                    aria-labelledby="accordiongroup-81-566-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="uicpermitControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3Auicpermit" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen35"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-83-2066-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-83-2066-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen35, 'glyphicon-chevron-right': !isOpen35}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="CountiesSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Counties", "CountiesOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Counties", "CountiesOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="Counties ng-scope"
                                            onClick="toggleLayer('Counties', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_Counties ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ACounties")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Counties
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-83-2066-panel"
                                    aria-labelledby="accordiongroup-83-2066-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="CountiesControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ACounties" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen36"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-85-6430-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-85-6430-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen36, 'glyphicon-chevron-right': !isOpen36}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={100}
                                            id="group_DocketItemSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Board Orders", "group_DocketItemOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Board Orders", "group_DocketItemOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="group_DocketItem ng-scope"
                                            onClick="toggleLayer('Board Orders', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_DocketItem ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADocketItem")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Board Orders
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-85-6430-panel"
                                    aria-labelledby="accordiongroup-85-6430-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="group_DocketItemControlDiv"
                                        className="ng-scope"
                                      />
                                      <uib-accordion
                                        close-others="false"
                                        className="ng-scope"
                                      >
                                        <div
                                          role="tablist"
                                          className="panel-group"
                                          ng-transclude=""
                                        >
                                          <div
                                            className="panel ng-scope ng-isolate-scope panel-default"
                                            ng-class="panelClass || 'panel-default'"
                                            ondragstart="return false;"
                                            is-open="isOpen37"
                                            style={{}}
                                          >
                                            <div
                                              role="tab"
                                              id="accordiongroup-193-6121-tab"
                                              aria-selected=""
                                              className="panel-heading"
                                              ng-keypress="toggleOpen($event)"
                                            >
                                              <h4 className="panel-title">
                                                <a
                                                  role="button"
                                                  data-toggle="collapse"
                                                  href=""
                                                  aria-expanded=""
                                                  aria-controls="accordiongroup-193-6121-panel"
                                                  tabIndex={0}
                                                  className="accordion-toggle"
                                                  ng-click="toggleOpen()"
                                                  uib-accordion-transclude="heading"
                                                >
                                                  <span
                                                    uib-accordion-header=""
                                                    ng-class="{'text-muted': isDisabled}"
                                                    className="ng-binding"
                                                  >
                                                    <i
                                                      style={{
                                                        paddingLeft: 5,
                                                        color: "#337ab7"
                                                      }}
                                                      className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                                      ng-class="{'glyphicon-chevron-down':isOpen37, 'glyphicon-chevron-right': !isOpen37}"
                                                    />
                                                    <input
                                                      className="layerSlider ng-scope"
                                                      type="range"
                                                      min={0}
                                                      max={100}
                                                      title="Layer Opacity"
                                                      defaultValue={100}
                                                      id="DocketItemSlider"
                                                      onchange='changeLayerOpacity($(this).val(), "Board Orders", "DocketItemOpacityValue", event);'
                                                      oninput='changeLayerOpacity($(this).val(), "Board Orders", "DocketItemOpacityValue", event);'
                                                      onClick="event.stopPropagation();event.preventDefault();"
                                                      style={{
                                                        width: 50,
                                                        padding: 0,
                                                        float: "right"
                                                      }}
                                                    />
                                                    <img
                                                      src="images/assets/checkboxSelected.png"
                                                      className="DocketItem ng-scope"
                                                      onClick="toggleLayer('Board Orders', true, event);"
                                                      style={{
                                                        display: "inline-block",
                                                        paddingRight: 5,
                                                        marginTop: "-2px"
                                                      }}
                                                    />
                                                    <img
                                                      className="legendIcon_DocketItem ng-scope"
                                                      src="images/transparent.png"
                                                      style={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundImage:
                                                          'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADocketItem")'
                                                      }}
                                                    />
                                                    <span
                                                      style={{
                                                        paddingLeft: 5,
                                                        cursor: "default"
                                                      }}
                                                      className="ng-scope"
                                                    >
                                                      Board Orders
                                                    </span>
                                                  </span>
                                                </a>
                                              </h4>
                                            </div>
                                            <div
                                              id="accordiongroup-193-6121-panel"
                                              aria-labelledby="accordiongroup-193-6121-tab"
                                              aria-hidden="true"
                                              role="tabpanel"
                                              className="panel-collapse collapse"
                                              uib-collapse="!isOpen"
                                              aria-expanded="false"
                                              style={{ height: 0 }}
                                            >
                                              <div
                                                className="panel-body"
                                                ng-transclude=""
                                              >
                                                <uib-accordion-heading className="header3Text ng-scope" />
                                                <div
                                                  id="DocketItemControlDiv"
                                                  className="ng-scope"
                                                >
                                                  <table
                                                    style={{
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap"
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADocketItem" />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </uib-accordion>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen38"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-87-9397-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-87-9397-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen38, 'glyphicon-chevron-right': !isOpen38}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={50}
                                            id="DNROilGasUnitsSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Oil and Gas Units", "DNROilGasUnitsOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Oil and Gas Units", "DNROilGasUnitsOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="DNROilGasUnits ng-scope"
                                            onClick="toggleLayer('Oil and Gas Units', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_DNROilGasUnits ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADNROilGasUnits")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Oil and Gas Units
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-87-9397-panel"
                                    aria-labelledby="accordiongroup-87-9397-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="DNROilGasUnitsControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADNROilGasUnits" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="panel ng-scope ng-isolate-scope panel-default"
                                  ng-class="panelClass || 'panel-default'"
                                  ondragstart="return false;"
                                  is-open="isOpen39"
                                >
                                  <div
                                    role="tab"
                                    id="accordiongroup-89-1882-tab"
                                    aria-selected=""
                                    className="panel-heading"
                                    ng-keypress="toggleOpen($event)"
                                  >
                                    <h4 className="panel-title">
                                      <a
                                        role="button"
                                        data-toggle="collapse"
                                        href=""
                                        aria-expanded=""
                                        aria-controls="accordiongroup-89-1882-panel"
                                        tabIndex={0}
                                        className="accordion-toggle"
                                        ng-click="toggleOpen()"
                                        uib-accordion-transclude="heading"
                                      >
                                        <span
                                          uib-accordion-header=""
                                          ng-class="{'text-muted': isDisabled}"
                                          className="ng-binding"
                                        >
                                          <i
                                            style={{
                                              paddingLeft: 5,
                                              color: "#337ab7"
                                            }}
                                            className="pull-right glyphicon ng-scope glyphicon-chevron-right"
                                            ng-class="{'glyphicon-chevron-down':isOpen39, 'glyphicon-chevron-right': !isOpen39}"
                                          />
                                          <input
                                            className="layerSlider ng-scope"
                                            type="range"
                                            min={0}
                                            max={100}
                                            title="Layer Opacity"
                                            defaultValue={50}
                                            id="DNROilGasFieldsSlider"
                                            onchange='changeLayerOpacity($(this).val(), "Oil and Gas Fields", "DNROilGasFieldsOpacityValue", event);'
                                            oninput='changeLayerOpacity($(this).val(), "Oil and Gas Fields", "DNROilGasFieldsOpacityValue", event);'
                                            onClick="event.stopPropagation();event.preventDefault();"
                                            style={{
                                              width: 50,
                                              padding: 0,
                                              float: "right"
                                            }}
                                          />
                                          <img
                                            src="images/assets/checkbox.png"
                                            className="DNROilGasFields ng-scope"
                                            onClick="toggleLayer('Oil and Gas Fields', true, event);"
                                            style={{
                                              display: "inline-block",
                                              paddingRight: 5,
                                              marginTop: "-2px"
                                            }}
                                          />
                                          <img
                                            className="legendIcon_DNROilGasFields ng-scope"
                                            src="images/transparent.png"
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundImage:
                                                'url("https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADNROilGasFields")'
                                            }}
                                          />
                                          <span
                                            style={{
                                              paddingLeft: 5,
                                              cursor: "default"
                                            }}
                                            className="ng-scope"
                                          >
                                            Oil and Gas Fields
                                          </span>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div
                                    id="accordiongroup-89-1882-panel"
                                    aria-labelledby="accordiongroup-89-1882-tab"
                                    aria-hidden="true"
                                    role="tabpanel"
                                    className="panel-collapse collapse"
                                    uib-collapse="!isOpen"
                                    aria-expanded="false"
                                    style={{ height: 0 }}
                                  >
                                    <div
                                      className="panel-body"
                                      ng-transclude=""
                                    >
                                      <uib-accordion-heading className="header3Text ng-scope" />
                                      <div
                                        id="DNROilGasFieldsControlDiv"
                                        className="ng-scope"
                                      >
                                        <table
                                          style={{
                                            fontSize: 12,
                                            whiteSpace: "nowrap"
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="https://geoserver.ogm.utah.gov/geoserver/wms/?REQUEST=GetLegendGraphic&STYLES=&FORMAT=image%2Fpng&LAYER=UT_SHPS%3ADNROilGasFields" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </uib-accordion>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkboxSelected.png"
                                id="21Checkbox"
                                onClick='setBaseMapLayer("Open Street Map");'
                              />
                              <span style={{ paddingLeft: 5 }}>
                                Open Street Map
                              </span>
                            </div>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkbox.png"
                                id="23Checkbox"
                                onClick='setBaseMapLayer("Basemap-Hybrid");'
                              />
                              <span style={{ paddingLeft: 5 }}>
                                Basemap-Hybrid
                              </span>
                            </div>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkbox.png"
                                id="25Checkbox"
                                onClick='setBaseMapLayer("Basemap-Lite");'
                              />
                              <span style={{ paddingLeft: 5 }}>
                                Basemap-Lite
                              </span>
                            </div>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkbox.png"
                                id="27Checkbox"
                                onClick='setBaseMapLayer("Basemap-Terrain");'
                              />
                              <span style={{ paddingLeft: 5 }}>
                                Basemap-Terrain
                              </span>
                            </div>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkbox.png"
                                id="29Checkbox"
                                onClick='setBaseMapLayer("Basemap-Topo");'
                              />
                              <span style={{ paddingLeft: 5 }}>
                                Basemap-Topo
                              </span>
                            </div>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkbox.png"
                                id="31Checkbox"
                                onClick='setBaseMapLayer("Hillshade");'
                              />
                              <span style={{ paddingLeft: 5 }}>Hillshade</span>
                            </div>
                            <div
                              className="header3Text"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                cursor: "default",
                                borderRadius: 4,
                                border: "1px solid rgb(221, 221, 221)",
                                marginTop: 4,
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: "10px 15px"
                              }}
                            >
                              <img
                                src="images/assets/checkbox.png"
                                id="33Checkbox"
                                onClick='setBaseMapLayer("Utah (satellite)");'
                              />
                              <span style={{ paddingLeft: 5 }}>
                                Utah (satellite)
                              </span>
                            </div>
                          </div>
                          <div
                            id="layerSwitcher"
                            style={{
                              top: "50px !important",
                              height: 200,
                              border: "none",
                              display: "none"
                            }}
                            className="ng-scope"
                          ></div>
                        </div>
                        {/* end ngRepeat: tab in tabset.tabs */}
                        <div
                          className="tab-pane ng-scope"
                          ng-repeat="tab in tabset.tabs"
                          ng-class="{active: tabset.active === tab.index}"
                          uib-tab-content-transclude="tab"
                        >
                          <div
                            style={{
                              margin: "10px 0px",
                              fontWeight: "bold",
                              textAlign: "left"
                            }}
                            className="header4Text ng-scope"
                          >
                            Select
                          </div>
                          <div
                            id="layerSelect"
                            className="ng-scope"
                            style={{ height: 175 }}
                          >
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_Well_DPRA"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Drilling Permits", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Drilling Permits
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="Well_DPRA"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Permits", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Permits
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackB_DPRA"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Permits Tracks (Built)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Permits Tracks (Built)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackP_DPRA"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Permits Tracks (Planned)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Permits Tracks (Planned)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellBH_DPRA"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Permits  Bottom Hole", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Permits Bottom Hole
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_Well_DWDSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Drilling Wells", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Drilling Wells
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="Well_DWDSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackB_DWDSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Tracks (Built)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Tracks (Built)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackP_DWDSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Tracks (Planned)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Tracks (Planned)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellBH_DWDSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Drilling Bottom Hole", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Drilling Bottom Hole
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_Well_OWCP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Production Wells", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Production Wells
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="Well_OWCP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Production", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Production
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackB_OWCP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Production Tracks (Built)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Production Tracks (Built)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackP_OWCP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Production Tracks (Planned)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Production Tracks (Planned)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellBH_OWCP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Production Bottom Hole", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Production Bottom Hole
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_Well_OSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Service Wells", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Service Wells
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="Well_OSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Service", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Service
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackB_OSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Service Tracks (Built)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Service Tracks (Built)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackP_OSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Service Tracks (Planned)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Service Tracks (Planned)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellBH_OSW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Service Bottom Hole", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Service Bottom Hole
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_Well_PAW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Plugged Wells", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Plugged Wells
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="Well_PAW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Plugged", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Plugged
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackB_PAW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Plugged Tracks (Built)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Plugged Tracks (Built)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackP_PAW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Plugged Tracks (Planned)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Plugged Tracks (Planned)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellBH_PAW"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Plugged Bottom Hole", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Plugged Bottom Hole
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_Well_CRDP"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Cancelled Permits", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Cancelled Permits
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="Well_CRDP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Cancelled Permits", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Cancelled Permits
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackB_CRDP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Cancelled Permits Tracks (Built)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Cancelled Permits Tracks (Built)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellTrackP_CRDP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Cancelled Permits Tracks (Planned)", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Cancelled Permits Tracks (Planned)
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="WellBH_CRDP"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Wells - Cancelled Permits Bottom Hole", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Wells - Cancelled Permits Bottom Hole
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="PLSSTownships"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Township - Range", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Township - Range
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="PLSSSections"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Section", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Section
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="facilitylocation"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Surface Facilities", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Surface Facilities
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="surfacefacilitypermit"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Surface Facility Permits", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Surface Facility Permits
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="uicpermit"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("UIC Permits", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                UIC Permits
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="Counties"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Counties", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Counties
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="group_DocketItem"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Board Orders", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Board Orders
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5, paddingLeft: 15 }}>
                              <img
                                className="DocketItem"
                                src="images/assets/checkboxSelected.png"
                                onClick='toggleLayer("Board Orders", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Board Orders
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="DNROilGasUnits"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Oil and Gas Units", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Oil and Gas Units
                              </span>
                            </div>
                            <div style={{ paddingBottom: 5 }}>
                              <img
                                className="DNROilGasFields"
                                src="images/assets/checkbox.png"
                                onClick='toggleLayer("Oil and Gas Fields", false, event);'
                                style={{
                                  display: "inline-block",
                                  paddingRight: 5,
                                  cursor: "pointer"
                                }}
                              />
                              <span
                                className="header3Text"
                                style={{ fontWeight: "bold" }}
                              >
                                Oil and Gas Fields
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end ngRepeat: tab in tabset.tabs */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*buffer popover template*/}
                <div
                  id="bufferPopoverTemplate"
                  style={{
                    position: "absolute",
                    right: 10,
                    zIndex: 1050,
                    width: 254,
                    display: "none !important",
                    left: 439
                  }}
                  className="popover bottom"
                >
                  <div
                    className="arrow"
                    style={{ top: "-11px", right: 0, left: 226 }}
                  />
                  <div style={{ width: 254, padding: "10px 10px" }}>
                    <table
                      className="header1Text"
                      style={{ fontWeight: "bold" }}
                    >
                      <tbody>
                        <tr style={{ boxSizing: "border-box" }}>
                          <td style={{ padding: "0px 10px 3px 0px" }}>
                            <img src="images/assets/bufferIconDark.png" />
                          </td>
                          <td className="header1Text">Buffer</td>
                          <td style={{ width: "100%" }} />
                        </tr>
                      </tbody>
                    </table>
                    <div className="popoverLine" style={{ width: 234 }} />
                    <div id="bufferContent" style={{ left: "-10px" }}>
                      <p
                        className="popoverText"
                        style={{ textAlign: "center" }}
                      >
                        Select the features from the <strong>selected</strong>{" "}
                        layers
                      </p>
                      <p
                        className="popoverText"
                        style={{ textAlign: "center" }}
                      >
                        that are within
                      </p>
                      <table style={{ width: 200 }}>
                        <tbody>
                          <tr>
                            <td style={{ paddingLeft: 40, paddingRight: 10 }}>
                              <input
                                className="textfieldInputText"
                                type="text"
                                defaultValue={5280}
                                id="txtDistance"
                                style={{ width: 100 }}
                              />
                            </td>
                            <td>
                              <select id="cboUnits" className="dropdownText">
                                <option value="ft" selected="">
                                  ft
                                </option>
                                <option value="mi">mi</option>
                                <option value="m">m</option>
                                <option value="km">km</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p
                        className="popoverText"
                        style={{
                          textAlign: "center",
                          padding: "10px 0px 0px 0px"
                        }}
                      >
                        of the currently selected features.
                      </p>
                      <img
                        style={{ paddingLeft: 45, cursor: "pointer" }}
                        src="images/assets/bufferButton.png"
                        onClick="doBuffer($('#txtDistance').val(), $('#cboUnits').val())"
                      />
                      <img
                        src="images/assets/cancelButton.png"
                        style={{ cursor: "pointer" }}
                        onClick="$('#bufferPopoverTemplate').hide(); $('#bufferHideIcon').hide(); $('#bufferIcon').show();"
                      />
                    </div>
                  </div>
                </div>
                {/*address popover template*/}
                <div
                  id="addressPopoverTemplate"
                  style={{
                    position: "absolute",
                    right: 350,
                    zIndex: 1050,
                    width: 350,
                    display: "none !important",
                    left: 277
                  }}
                  className="popover bottom"
                >
                  <div
                    className="arrow"
                    style={{ top: "-11px", right: 0, left: 226 }}
                  />
                  <div style={{ width: 350, padding: "10px 10px" }}>
                    <table
                      className="header1Text"
                      style={{ fontWeight: "bold" }}
                    >
                      <tbody>
                        <tr style={{ boxSizing: "border-box" }}>
                          <td style={{ padding: "0px 10px 3px 0px" }}>
                            <img src="images/assets/geocodingSelected.png" />
                          </td>
                          <td className="header1Text">Search by Address</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="popoverLine" style={{ width: 322 }} />
                    <div id="addressContent" style={{ left: "-10px" }}>
                      <p
                        className="popoverText"
                        style={{ textAlign: "center" }}
                      >
                        Select the features from the <strong>selected</strong>{" "}
                        layers at the address
                      </p>
                      <input
                        className="textfieldInputText"
                        type="text"
                        defaultValue=""
                        id="txtAddress"
                        style={{ width: "100%" }}
                      />
                      <p
                        className="popoverText"
                        style={{ textAlign: "center" }}
                      >
                        within the distance of
                        <input
                          className="textfieldInputText"
                          type="text"
                          defaultValue={5280}
                          id="txtDistanceAddr"
                          style={{ width: 50 }}
                        />
                        <select id="cboUnitsAddr" className="dropdownText">
                          <option value="ft" selected="">
                            ft
                          </option>
                          <option value="mi">mi</option>
                          <option value="m">m</option>
                          <option value="km">km</option>
                        </select>
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <img
                          style={{ cursor: "pointer" }}
                          src="images/assets/goButton.png"
                          onClick="searchByAddress($('#txtAddress').val(), $('#txtDistanceAddr').val(), $('#cboUnitsAddr').val())"
                        />
                        <img
                          src="images/assets/cancelButton.png"
                          style={{ cursor: "pointer" }}
                          onClick="$('#addressPopoverTemplate').hide();"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*print popover template*/}
                <div
                  id="printPopoverTemplate"
                  className="popover bottom"
                  style={{
                    position: "absolute",
                    right: 10,
                    zIndex: 1050,
                    width: 257,
                    display: "none !important",
                    left: 569
                  }}
                >
                  <div className="arrow" style={{ top: "-11px", left: 230 }} />
                  <div style={{ width: 254, padding: "10px 10px" }}>
                    <table style={{}}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "0px 10px 3px 0px" }}>
                            <img src="images/assets/printIconDark.png" />
                          </td>
                          <td
                            className="header1Text"
                            style={{ fontWeight: "bold" }}
                          >
                            Print
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="popoverLine" style={{ width: 234 }} />
                    <div id="printContent" onshow="printDialog();">
                      <table style={{ margin: "auto", paddingBottom: 4 }}>
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 8 }}
                            >
                              Title:
                            </td>
                            <td>
                              <input
                                type="text"
                                id="txtTitle"
                                style={{ width: 188 }}
                                defaultValue="DataMining print"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style={{ paddingBottom: 10 }}>
                        <tbody>
                          <tr style={{ paddingLeft: 10 }}>
                            <td
                              className="header3Text"
                              style={{
                                fontWeight: "bold",
                                width: 10,
                                textAlign: "center"
                              }}
                            >
                              <div style={{ width: 25 }}>1</div>
                            </td>
                            <td style={{ width: 20 }}>
                              <select id="cboSrcUnit" className="dropdownText">
                                <option value="in" selected="">
                                  in
                                </option>
                                <option value="cm">cm</option>
                              </select>
                            </td>
                            <td
                              className="header3Text"
                              style={{
                                padding: "0px 8px",
                                textAlign: "center"
                              }}
                            >
                              =
                            </td>
                            <td style={{ width: 20 }}>
                              <input
                                className="textfieldInputText"
                                type="text"
                                id="txtScale"
                                style={{ width: 90 }}
                              />
                            </td>
                            <td style={{ padding: "0px 5px" }}>
                              <select id="cboTrgUnit" className="dropdownText">
                                <option value="in">in</option>
                                <option value="ft">ft</option>
                                <option value="mi" selected="">
                                  mi
                                </option>
                                <option value="cm">cm</option>
                                <option value="m">m</option>
                                <option value="km">km</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style={{ margin: "auto", paddingBottom: 4 }}>
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 8 }}
                            >
                              Paper Size:
                            </td>
                            <td>
                              <select id="cboTemplate" className="dropdownText">
                                <option value={0}>8.5 X 11 Portrait</option>
                                <option value={1}>8.5 X 11 Landscape</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style={{ margin: "auto", paddingBottom: 4 }}>
                        <tbody>
                          <tr>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold", paddingRight: 8 }}
                            >
                              Notes:
                            </td>
                            <td>
                              <input
                                type="text"
                                id="txtNotes"
                                style={{ width: 182 }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{
                          margin: "auto",
                          paddingRight: 8,
                          paddingBottom: 4
                        }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ paddingRight: 8 }}>
                              <img
                                style={{ display: "none", paddingBottom: 1 }}
                                src="images/assets/checkbox.png"
                                onClick="$(this).hide(); $(this).next().show(); $('#chkLegend').prop('checked', true);"
                              />
                              <img
                                style={{ paddingBottom: 1 }}
                                src="images/assets/checkboxSelected.png"
                                onClick="$(this).hide(); $(this).prev().show(); $('#chkLegend').prop('checked',false);"
                              />
                              <input
                                type="checkbox"
                                name="chkLegend"
                                id="chkLegend"
                                defaultChecked=""
                                style={{ display: "none" }}
                              />
                            </td>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold" }}
                            >
                              Show Legend
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingRight: 8 }}>
                              <img
                                style={{ display: "none", paddingBottom: 1 }}
                                src="images/assets/checkbox.png"
                                onClick="$(this).hide(); $(this).next().show(); $('#chkSelection').prop('checked', true);"
                              />
                              <img
                                style={{ paddingBottom: 1 }}
                                src="images/assets/checkboxSelected.png"
                                onClick="$(this).hide(); $(this).prev().show(); $('#chkSelection').prop('checked', false);"
                              />
                              <input
                                type="checkbox"
                                name="chkSelection"
                                id="chkSelection"
                                defaultChecked=""
                                style={{ display: "none" }}
                              />
                            </td>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold" }}
                            >
                              Show Selection Layer
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingRight: 8 }}>
                              <img
                                style={{ display: "none", paddingBottom: 1 }}
                                src="images/assets/checkbox.png"
                                onClick="$(this).hide(); $(this).next().show(); $('#chkLabel').prop('checked', true);"
                              />
                              <img
                                style={{ paddingBottom: 1 }}
                                src="images/assets/checkboxSelected.png"
                                onClick="$(this).hide(); $(this).prev().show(); $('#chkLabel').prop('checked', false);"
                              />
                              <input
                                type="checkbox"
                                name="chkLabel"
                                id="chkLabel"
                                defaultChecked=""
                                style={{ display: "none" }}
                              />
                            </td>
                            <td
                              className="header3Text"
                              style={{ fontWeight: "bold" }}
                            >
                              Show Selection Labels
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div style={{ paddingLeft: 43 }}>
                        <img
                          style={{ paddingRight: 5, cursor: "pointer" }}
                          src="images/assets/printButton.png"
                          onClick="printMap($('#cboSrcUnit').val(), $('#cboTrgUnit').val(), $('#txtScale').val(), $('#cboTemplate').val(), $('#txtTitle').val(), $('#txtNotes').val());"
                        />
                        <img
                          src="images/assets/cancelButton.png"
                          style={{ cursor: "pointer" }}
                          onClick="$('#printHideIcon').hide(); $('#printIcon').show(); $('#printPopoverTemplate').hide(); setTooltip(toolTip); "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td rowSpan={3}>
          <div id="outputDiv" />
        </td>
      </tr>
      {/*Details*/}
      <tr id="detailsContainer" style={{ marginTop: 10, display: "none" }}>
        <td
          colSpan={12}
          className="contentContainerRect"
          style={{ width: "100%", border: "1px solid #e6e6e6" }}
          valign="Top"
          align="center"
        >
          <table style={{ width: "100%" }} className="headerRect">
            <tbody>
              <tr style={{ height: 40 }}>
                <td>
                  <img
                    style={{ margin: "10px 10px 10px 10px" }}
                    src="images/assets/detailsIcon.png"
                  />
                </td>
                <td
                  className="header1Text"
                  style={{ fontWeight: "bold", margin: "10px 10px" }}
                >
                  Details
                </td>
                <td>
                  <span
                    id="expandDetailsIcon"
                    tooltip-placement="top"
                    uib-tooltip="Expand Details"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      top: 3
                    }}
                  >
                    <img
                      src="images/assets/detailExpandIconInactive.png"
                      style={{
                        margin: "10px 10px 7px 10px",
                        cursor: "pointer"
                      }}
                    />
                  </span>
                  <span
                    id="collapseDetailsIcon"
                    tooltip-placement="top"
                    uib-tooltip="Collapse Details"
                    style={{
                      display: "inline-block",
                      transform: "rotate(180deg)",
                      position: "relative",
                      top: "-3px"
                    }}
                  >
                    <img
                      src="images/assets/detailExpandIconInactive.png"
                      style={{
                        margin: "10px 10px 7px 10px",
                        cursor: "pointer"
                      }}
                    />
                  </span>
                </td>
                <td
                  id="detailsTitle"
                  style={{
                    width: "100%",
                    padding: "0px 5px 0px 5px",
                    fontWeight: "bold",
                    textAlign: "right",
                    cursor: "pointer"
                  }}
                  className="linkText"
                />
                <td
                  id="detailsCSVExport"
                  style={{ padding: "0px 5px 6px", display: "none" }}
                >
                  <img
                    src="images/assets/exportCSVIcon.png"
                    style={{ cursor: "pointer", margin: "10px 10px" }}
                    onClick="exportToCsv('list')"
                    uib-tooltip="CSV Export"
                    tooltip-placement="top-right"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <iframe
            id="detailsFrame"
            className="PanelBack"
            style={{
              padding: "0px 10px 10px",
              width: "100%",
              border: "none",
              display: "none",
              height: 0
            }}
            frameBorder={0}
          />
          <div
            id="detailsDiv"
            style={{ width: "100%", padding: 10, display: "none", height: 0 }}
          />
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
function clearFilterInput(arg0: undefined): React.MouseEventHandler<HTMLDivElement> | undefined {
  throw new Error('Function not implemented.');
}
//opSelectionChanged
function opSelectionChanged(arg0: undefined): React.ChangeEventHandler<HTMLSelectElement> | undefined {
  throw new Error('Function not implemented.');
}
function textChanged(arg0: undefined): React.KeyboardEventHandler<HTMLInputElement> | undefined {
  throw new Error('Function not implemented.');
}

function filterSearch(arg0: boolean): React.MouseEventHandler<HTMLSpanElement> | undefined {
  throw new Error('Function not implemented.');
}

