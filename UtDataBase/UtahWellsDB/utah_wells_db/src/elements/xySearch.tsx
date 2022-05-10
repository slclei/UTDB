import React from 'react';
import ReactDOM from 'react-dom/client';

class XySearch extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div style={{position: 'relative'}} className="popover-icons">
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="xyIcon"
                    uib-tooltip="Center by X, Y or Latitude, Longitude"
                    onClick={() => this.setState({ showing: !showing })}>
                          my_location
                </i>
                <div className='popover-message'>Center by X, Y or Latitude, Longitude</div>
                { showing 
                    ? <div
                    id="xyPopoverTemplate"
                    className="popover bottom"
                    style={{
                      position: "absolute",
                      right: 10,
                      zIndex: 1050,
                      width: 257,
                      display: "none !important",
                      left: -280,
                      top: '30px',
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
                        
                        <i className="material-icons"
                          style={{ paddingLeft: 47, cursor: "pointer", width: 100 }}
                          id="centerXY"
                        >check</i>
                        <i
                          className="material-icons"
                          id="cancelCenterXY"
                          style={{ cursor: "pointer" }}
                        >close</i>
                      </div>
                    </div>
                  </div>
                    : null
                }
            </div>  
        )
    }
}

export default XySearch;