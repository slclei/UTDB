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
          <div>
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
                    <td>
                      <Foo />
                    </td>
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
                <App
                ></App>
                {/*xy popover template*/}
                
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
                            <i className='material-icons'>layers</i>
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
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="popoverLine"
                      style={{ width: 324, margin: "0px 0px 10px 15px" }}
                    />
                    <div className="ng-isolate-scope">
                      <ul
                        className="nav nav-tabs"
                        ng-class="{'nav-stacked': vertical, 'nav-justified': justified}"
                        ng-transclude=""
                      >
                        <li
                          ng-class="[{active: active, disabled: disabled}, classes]"
                          className="uib-tab nav-item ng-scope ng-isolate-scope active"
                          style={{ width: "50%" }}
                        >
                          <a
                            href=""
                            ng-click="select()"
                            className="nav-link ng-binding"
                            uib-tab-heading-transclude=""
                          >
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
                          <div id="layerControl">
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
                        
                        {/* end ngRepeat: tab in tabset.tabs */}
                    </div>
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
                    display: "none",
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
                          <option defaultValue="ft">
                            ft
                          </option>
                          <option value="mi">mile</option>
                          <option value="m">m</option>
                          <option value="km">km</option>
                        </select>
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <i
                          style={{ cursor: "pointer" }}
                          className="material-icons"
                          id="doSearchByAddress"
                          >done</i>
                        <i
                          className="material-icons"
                          id="undoSearchByAddress"
                          style={{ cursor: "pointer" }}
                          >close</i>
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
                          <i className='material-icons'>print</i>
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
                    <div id="printContent">
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
                                <option defaultValue="in">
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
                                <option defaultValue="mi">
                                  mile
                                </option>
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
                              <i
                                style={{ display: "none", paddingBottom: 1 }}
                                className="material-icons"
                                id="printLegend"
                                >disabled_by_default</i>
                              <i
                                style={{ paddingBottom: 1 }}
                                className="material-icons"
                                id="unPrintLegend"
                                >check_box</i>
                              <input
                                type="checkbox"
                                name="chkLegend"
                                id="chkLegend"
                                defaultChecked={true}
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
                              <i
                                style={{ display: "none", paddingBottom: 1 }}
                                className="material-icons"
                                id="printLayer"
                                >disabled_by_default</i>
                              <i
                                style={{ paddingBottom: 1 }}
                                className="material-icons"
                                id="unPrintLayer"
                                >check_box</i>
                              <input
                                type="checkbox"
                                name="chkSelection"
                                id="chkLayer"
                                defaultChecked={true}
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
                              <i
                                style={{ display: "none", paddingBottom: 1 }}
                                className="material-icons"
                                id="printLabel"
                                >disabled_by_default</i>
                              <i
                                style={{ paddingBottom: 1 }}
                                className="material-icons"
                                id="unPrintLabel"
                                >check_box</i>
                              <input
                                type="checkbox"
                                name="chkLabel"
                                id="chkLabel"
                                defaultChecked={true}
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
                        <i
                          style={{ paddingRight: 5, cursor: "pointer" }}
                          className="material-icons"
                          id="printDone"
                          >done</i>
                        <i
                          className="material-icons"
                          style={{ cursor: "pointer" }}
                          id="unPrintDone"
                          >close</i>
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


