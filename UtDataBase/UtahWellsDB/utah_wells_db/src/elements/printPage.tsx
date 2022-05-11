import React from 'react';
import ReactDOM from 'react-dom/client';

class PrintPage extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div style={{position: 'relative'}} className="popover-icons">
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="printIcon"
                    uib-tooltip="Print page"
                    onClick={() => this.setState({ showing: !showing })}>
                          print
                </i>
                <div className='popover-message'>Print page</div>
                { showing 
                    ? <div
                    id="printPopoverTemplate"
                    className="popover bottom"
                    style={{
                      position: 'absolute',
                      top: '30px',
                      left: -300,
                      width: 500,
                      display: 'block',
                      overflow:'hidden'
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
                    : null
                }
            </div>  
        )
    }
}

export default PrintPage;