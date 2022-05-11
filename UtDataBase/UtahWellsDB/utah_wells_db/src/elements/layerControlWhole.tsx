import React from 'react';
import ReactDOM from 'react-dom/client';
import {LayerControl} from '../layerControl/LayerControl';

class LayerControlWhole extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div style={{position: 'relative'}} className="popover-icons">
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="layersIcon"
                    uib-tooltip="Layers"
                    onClick={() => this.setState({ showing: !showing })}>
                          layers
                </i>
                <div className='popover-message'>Layer Control</div>
                { showing 
                    ? <div
                    id="layersPopoverTemplate"
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
                      </div>
                    </div>
                  </div>
                    : null
                }
            </div>  
        )
    }
}

export default LayerControlWhole;