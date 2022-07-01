import React from "react";
import WellSearchResult from "./WellSearchResult";
import searchFields from "./SearchField";

function SearchBox(this: any): any {
  const clearSearch = async (fields: string ) => {
    
    if (fields === "all" || fields === "1") {
      (document.getElementById("searchInput1") as HTMLInputElement)!.value = "";
      (document.getElementById(
        "searchInput1"
      ) as HTMLInputElement)!.placeholder = "Filter Input...";
    }
    if (fields === "all" || fields === "2") {
      (document.getElementById("searchInput2") as HTMLInputElement)!.value = "";
      (document.getElementById(
        "searchInput2"
      ) as HTMLInputElement)!.placeholder = "Filter Input...";
    }
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldID = (document.getElementById("searchBy") as HTMLInputElement)
      ?.value;
    const field = searchFields.get(fieldID);
    if (field) {
      document.getElementById("search1")!.innerText = field[0];
      document.getElementById("search2")!.innerText = field[1];
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
            <tbody>
            <tr>
              <td style={{ padding: 10 }}>
                <i className="material-icons">search</i>
              </td>
              <td className="header1Text">Search</td>
              <td style={{ width: "100%" }} />
              <td id="bToggleSearch" style={{ padding: "10px 5px" }}>
                <button
                  className="material-icons"
                  id="clearAll"
                  onClick={()=>clearSearch("all")}
                >
                  clear
                </button>
              </td>
            </tr>
            </tbody>
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
                        onChange={selectChange}
                        data-placeholder=" "
                        defaultValue="wells"
                      >
                        <option value="CO2">CO2 Stationary Sources</option>
                        <option value="saline">Saline</option>
                        <option value="salineGrid">Saline Grid 10km</option>
                        <option value="basin">Sedimentary Basin</option>
                        <option value="wells">
                          Well
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr className="searchTr">
                    <td className="filterPrompt" id="search1">
                      API
                    </td>
                    <td className="uiTextBox">
                      <input
                        type="text"
                        id="searchInput1"
                        defaultValue=""
                        className="uiTextBox"
                        placeholder="Filter Input..."
                      />
                    </td>
                    <td className="clearTD">
                      <i
                        className="material-icons"
                        id="searchClear1"
                        style={{ cursor: "pointer" }}
                        onClick={()=>clearSearch("1")}
                      >
                        clear
                      </i>
                    </td>
                  </tr>
                  <tr className="searchTr">
                    <td className="filterPrompt" id="search2">
                      WellName
                    </td>
                    <td className="uiTextBox">
                      <input
                        type="text"
                        id="searchInput2"
                        defaultValue=""
                        className="uiTextBox"
                        placeholder="Filter Input..."
                      />
                    </td>
                    <td className="clearTD">
                      <i
                        className="material-icons"
                        id="searchClear2"
                        style={{ cursor: "pointer" }}
                        onClick={()=>clearSearch("2")}
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
