import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component, ChangeEvent } from "react";
import WellService from "../services/WellService";
import IWellData from '../types/Wells';

import { Routes, Route, Link } from "react-router-dom";
import Boreholes from "../elements/WellsList";
import SearchResult from './SearchResult';

function SearchBox(): any {

  return (<td id="tdSearch" valign="top" style={{ width: "20vw", height: "90vh" }}>
    <div
      className="contentContainerRect ui-resizable"
      style={{ width: "20vw", height: "80vh" }}
      id="divSearch"
    >
      <div className="headerRect">
        <table>
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
            </td>
          </tr>
        </table>
      </div>
      <div
        id="searchContentDiv"
        style={{ padding: 10, overflow: "hidden", height: "100%" }}
      >
        <div id="divAdvanced" style={{ height: "40%" }}>
          <div
            style={{ height: "100%", width: "100%", overflow: "auto" }}
          >
            <div id="filterControl">
              <table id="advFilterTable">
                <tbody>
                  <tr className='searchTr'>
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
                  <tr className='searchTr'>
                    <td className="filterPrompt">API:</td>
                    <td>
                      <select
                        title="compareAPI10"
                        id="compareAPI"
                        className="uiOperatorComboBox"
                        data-placeholder=" "
                      >
                        <option value="" />
                        <option value="Like" selected={true}>Like</option>
                        <option value="=">
                          =
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="API"
                        defaultValue=""
                        className="uiTextBox"
                        placeholder="Filter Input..."
                      />
                      <i
                        className="material-icons"
                        onClick={clearFilterInput("API")}
                        uib-tooltip="Clear"
                      >clear</i>
                    </td>
                  </tr>
                  <tr className='searchTr'>
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

        <SearchResult />

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
  </td>);
}

function clearFilterInput(arg0: string): React.MouseEventHandler<HTMLDivElement> | undefined {
  console.log("cfi");
  const e = document.getElementById(arg0) as HTMLInputElement;
  if (e) {
    e.value = " ";
  }
  return
}
//opSelectionChanged
function opSelectionChanged(arg0: string): React.ChangeEventHandler<HTMLSelectElement> | undefined {
  const e = document.getElementById(arg0) as HTMLInputElement;
  if (e) {
    e.value = " ";
  }
  return
}
function textChanged(arg0: string): React.KeyboardEventHandler<HTMLInputElement> | undefined {
  const e = document.getElementById(arg0) as HTMLInputElement;
  if (e) {
    e.value = " ";
  }
  return
}

function exportToCsv(arg0: string): React.MouseEventHandler<HTMLImageElement> | undefined {
  return
}


export default SearchBox;

