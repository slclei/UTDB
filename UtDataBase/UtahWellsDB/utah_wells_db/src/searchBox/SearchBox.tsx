import React from "react";
import WellSearchResult from "./WellSearchResult";

function SearchBox(this: any): any {
  const clearSearch = async (fields: string) => {
    if (fields === "all" || fields === "api") {
      (document.getElementById("compareAPI") as HTMLSelectElement)!.value = "";
    }
    if (fields === "all" || fields === "api") {
      (document.getElementById("API") as HTMLInputElement)!.value = "";
      (document.getElementById("API") as HTMLInputElement)!.placeholder =
        "Filter Input...";
    }
    if (fields === "all" || fields === "wellName") {
      (document.getElementById("compareWellName") as HTMLSelectElement)!.value =
        "";
    }
    if (fields === "all" || fields === "wellName") {
      (document.getElementById("WellName") as HTMLInputElement)!.value = "";
      (document.getElementById("WellName") as HTMLInputElement)!.placeholder =
        "Filter Input...";
    }
  };

  return (
    <div id="tdSearch">
      <div
        className="contentContainerRect ui-resizable"
        style={{ width: "100%", height: "80vh" }}
        id="divSearch"
      >
        <div className="headerRect">
          <table>
            <tr>
              <td style={{ padding: 10 }}>
                <i className="material-icons">search</i>
              </td>
              <td className="header1Text">Search</td>
              <td style={{ width: "100%" }} />
              <td id="bToggleSearch" style={{ padding: "10px 5px" }}>
                <button
                  className="material-icons"
                  id="activeSearchIconClear"
                  onClick={(e) => {
                    clearSearch("all");
                  }}
                >
                  clear
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div id="searchContentDiv">
          <div id="divAdvanced" style={{ height: "40%" }}>
            <div>
              <table id="advFilterTable">
                <tbody>
                  <tr className="searchTr">
                    <td className="filterPrompt">Search Layer:</td>
                    <td>
                      <select
                        className="uiOperatorComboBox"
                        id="searchBy"
                        data-placeholder=" "
                      >
                        <option value="saline">Saline</option>
                        <option value="wells" selected={true}>
                          Well
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr className="searchTr">
                    <td className="filterPrompt">API:</td>
                    <td>
                      <select
                        title="compareAPI10"
                        id="compareAPI"
                        className="uiOperatorComboBox"
                        data-placeholder="="
                      >
                        <option value="=" />
                        <option value="=">=</option>
                      </select>
                    </td>
                    <td className="uiTextBox">
                      <input
                        type="text"
                        id="API"
                        defaultValue=""
                        className="uiTextBox"
                        placeholder="Filter Input..."
                      />
                    </td>
                    <td className="clearTD">
                      <i
                        className="material-icons"
                        onClick={(e) => {
                          clearSearch("api");
                        }}
                        uib-tooltip="Clear"
                      >
                        clear
                      </i>
                    </td>
                  </tr>
                  <tr className="searchTr">
                    <td className="filterPrompt">Well Name:</td>
                    <td>
                      <select
                        title="compareWellName"
                        id="compareWellName"
                        className="uiOperatorComboBox"
                        data-placeholder="="
                      >
                        <option value="=" />
                        <option value="=">=</option>
                      </select>
                    </td>
                    <td className="uiTextBox">
                      <input
                        type="text"
                        id="WellName"
                        defaultValue=""
                        className="uiTextBox"
                        placeholder="Filter Input..."
                      />
                    </td>
                    <td className="clearTD">
                      <i
                        className="material-icons"
                        onClick={(e) => {
                          clearSearch("wellName");
                        }}
                        uib-tooltip="Clear"
                      >
                        clear
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <WellSearchResult />
            </div>
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
    </div>
  );
}

export default SearchBox;
