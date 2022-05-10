import React from 'react';
import ReactDOM from 'react-dom/client';

class AddressSearch extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div style={{position: 'relative'}}>
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="activePointSelectIcon"
                    uib-tooltip="Search by Address"
                    onClick={() => this.setState({ showing: !showing })}>
                          near_me
                </i>
                { showing 
                    ? <div
                    id="addressPopoverTemplate"
                    style={{
                      position: 'absolute',
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
                    <div style={{ width: '100%', padding: "10px 10px" }}>
                      <table
                        className="header1Text"
                        style={{ fontWeight: "bold" }}
                      >
                        <tbody>
                          <tr style={{ boxSizing: "border-box" }}>
                            <td style={{ padding: "0px 10px 3px 0px" }}>
                              <i className="material-icons">place</i>
                            </td>
                            <td className="header1Text">Search by Address</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="popoverLine" style={{ width: '100%' }} />
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
                            style={{ cursor: "pointer", width: 100 }}
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
                    : null
                }
            </div>  
        )
    }
}

export default AddressSearch;