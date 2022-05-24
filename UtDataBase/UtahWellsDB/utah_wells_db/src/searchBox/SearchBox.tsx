import React from 'react';
import WellSearchResult from './WellSearchResult';

function SearchBox(this: any): any {
  const clearSearch = async (fields: string) => {
    if (fields === "all" || fields === "api") {
      document.getElementById('compareAPI')!.value = "";
    }
    if (fields === "all" || fields === "api") {
      document.getElementById('API')!.value = "";
      document.getElementById('API')!.placeholder = "Filter Input...";
    }
    if (fields === "all" || fields === "wellName") {
      document.getElementById('compareWellName')!.value = "";
    }
    if (fields === "all" || fields === "wellName") {
      document.getElementById('WellName')!.value = "";
      document.getElementById('WellName')!.placeholder = "Filter Input...";
    }
  }

  return (<td id="tdSearch" valign="top">
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
            <td className="header1Text">
              Search
            </td>
            <td style={{ width: "100%" }} />
            <td id="bToggleSearch" style={{ padding: "10px 5px" }}>
              <button
                className="material-icons"
                id="activeSearchIconClear"
                onClick={(e) => { clearSearch("all") }}
              >
                clear
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div
        id="searchContentDiv"
      >
        <div id="divAdvanced" style={{ height: "40%" }}>
          <table>
            <tr className='searchTr'>
              <td className="filterPrompt">
                Search Layer:
              </td>
              <td>
                <select
                  className="uiOperatorComboBox"
                  id="searchBy"

                  data-placeholder=" "
                >
                  <option value="Saline">
                    Saline 
                  </option>
                  <option value="Well" selected={true}>
                    Well 
                  </option>
                </select> 
              </td>
            </tr>
          </table>
          <div>
            <table id="advFilterTable">
              <tbody>
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
                  </td>
                  <td>
                    <i
                      className="material-icons"
                      onClick={(e) => { clearSearch("api") }}
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
                  </td>
                  <td>
                    <i
                      className="material-icons"
                      onClick={(e) => { clearSearch("wellName") }}
                      uib-tooltip="Clear"
                    >clear</i>
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

