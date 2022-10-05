import { stringify } from 'querystring';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapControl } from '../basemap/exportMap';

class AddressSearch extends React.Component {

    accessToken =
  "pk.eyJ1Ijoic2xjbGVpIiwiYSI6ImNsMXV6czRnYjJkbnQzZG1qMHRxeGd0YmoifQ.mvtESpI1GCIdTrWSupNEIw";

    state = { showing: false };
    //<input type="text" class="mapboxgl-ctrl-geocoder--input" placeholder="Search" aria-label="Search">
    //search element

    //id="doSearchByAddress"    onClick={submit()}

    submit(){
      let searchText=(document.getElementById("txtAddress") as HTMLInputElement)
      ?.value;

      //let search=document.getElementsByClassName("mapboxgl-ctrl-geocoder--input")[0] as HTMLInputElement;
      //console.log(search);
      //search.value=searchText;
      //search.userEvent("onclick");
      let url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+searchText+".json?"+"access_token="+this.accessToken;

      let result=this.getData(url);
      //console.log(this.searchXY);
    }

    //set url for geocode api
    //https://api.mapbox.com/geocoding/v5/mapbox.places/{longitude},{latitude}.json
    //id="txtAddress"

    //// Center the map on the coordinates of any clicked circle from the 'circle' layer.
    //map.on('click', 'circle', (e) => {
    //map.flyTo({
    //center: e.features[0].geometry.coordinates
    //});
    //});
    getData(url: string) {
      return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.features[0].center);
        const searchXY=responseJson.features[0].center;
        const map=MapControl[0].map;
        // Center the map on the coordinates of any clicked circle from the 'circle' layer.
        
        map.flyTo({
        center: searchXY,
        zoom: 18,
        });
        return responseJson.features[0].center;
      })
      .catch((error) => {
        console.error(error);
      });
   }

    render() {
        const { showing } = this.state;
        return (
            <div style={{position: 'relative'}} className="popover-icons">
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons"
                    id="addressIcon"
                    uib-tooltip="Search by Address"
                    onClick={() => this.setState({ showing: !showing })}>
                          place
                </i>
                <div className='popover-message'>Search by Address</div>
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
                            onClick={(e: React.MouseEvent<HTMLElement>) => this.submit()}
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