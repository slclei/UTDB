import React from 'react';
import ReactDOM from 'react-dom/client';

class BufferSearch extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div style={{position: 'relative'}} className="popover-icons">
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="bufferIcon"
                    uib-tooltip="Buffer Selection"
                    onClick={() => this.setState({ showing: !showing })}>
                          radio_button_checked
                </i>
                <div className='popover-message'>Buffer Selection</div>
                { showing 
                    ? <div
                    id="bufferPopoverTemplate"
                    style={{
                      position: "absolute",
                      top: '30px',
                      left: -300,
                      width: 500,
                      display: 'block',
                      overflow:'hidden'
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
                              <i className='material-icons'>radio_button_checked</i>
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
                                  <option defaultValue="ft">
                                    ft
                                  </option>
                                  <option value="mi">mile</option>
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
                        <i
                          className='material-icons'
                          style={{ width: 100,  cursor: "pointer" }}
                          id="doBuffer"
                        >done</i>
                        <i
                        className='material-icons'
                          style={{ cursor: "pointer" }}
                          id="undoBuffer">close</i>
                      </div>
                    </div>
                  </div>
                    : null
                }
            </div>  
        )
    }
}

export default BufferSearch;