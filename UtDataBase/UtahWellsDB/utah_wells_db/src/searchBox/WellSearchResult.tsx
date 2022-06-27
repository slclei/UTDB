/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Square from "./Onclick";
import Amplify from "aws-amplify";
import config from "../aws-exports";
//import welldata from '../data/wellUTforData.json';
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { MapControl } from "../basemap/exportMap";
import mapboxgl from "mapbox-gl";

Amplify.configure(config);
const eMap = MapControl[0];

//get input from search parameters, and search result from target layer
function WellSearchResult() {
  const [resultDic, setresultDic] = useState<any>({});
  const [resultList, setresultList] = useState<any>([]);

  const searchFields = new Map<string, string[]>();
  searchFields.set("wells", ["No.", "API", "WellName", "County", "WellType"]);
  //  , "epa_sector": "Other", "fuel": null, "co2_tonne": 51383, "co2_bio": null, "year": 2013, "data_source": "U.S. EPA GHG Reporting Program", "comments": null, "featid": 78 }, "geometry": { "type": "Point", "coordinates": [ -111.646375416999945, 40.247044129000074 ] } },

  searchFields.set("CO2", [
    "No.",
    "Ghgrp_id",
    "Source_name",
    "City",
    "CO2_tonne",
  ]);

  const fieldID = (document.getElementById("searchBy") as HTMLInputElement)
    ?.value;
  const field = searchFields.get(fieldID);

  const newResult = async (e: React.MouseEvent<HTMLElement>) => {
    //get search layer from element searchBy
    const layer =
      (document.getElementById("searchBy") as HTMLInputElement)?.value + "InUT";
    const map = eMap.map;
    //get information from compareAPI and API elements for search by API
    const tmpArr: { [key: number]: any[] } = {};
    //query=api:4300320047,wellName:abc
    const query: any[] = ["all"];

    //get api value and operation
    const search1Value = (
      document.getElementById("searchInput1") as HTMLInputElement
    )?.value;

    const search1Name = ((document.getElementById("search1") as HTMLTableColElement)
      ?.innerText).toLowerCase();

    if (search1Value !== "") {
      const tmpQ: any[] = [];
      tmpQ.push("==");
      tmpQ.push(search1Name);
      tmpQ.push(parseInt(search1Value));
      query.push(tmpQ);
    }

    //get api value and operation
    const search2Value = (
      document.getElementById("searchInput2") as HTMLInputElement
    )?.value;
    const search2Name = (
      document.getElementById("search2") as HTMLTableColElement
    )?.innerText.toLowerCase();

    if (search2Value != "") {
      const tmpQ = [];
      tmpQ.push("==");
      tmpQ.push(search2Name);
      tmpQ.push(search2Value);
      query.push(tmpQ);
    }

    //in case of query is not null, get data with query
    if (query.length > 0) {
      const tmp = map?.querySourceFeatures(layer, {
        filter: query,
      });

      console.log(query);

      for (const each of tmp) {
        
        const tmpEach: any[] = [];
        if (field!=undefined){
        tmpEach.push(each.properties[field[1].toLowerCase()]);
        tmpEach.push(each.properties[field[2].toLowerCase()]);
        tmpEach.push(each.properties[field[3].toLowerCase()]);
        tmpEach.push(each.properties[field[4].toLowerCase()]);
        tmpEach.push(each.geometry.coordinates);
        console.log(tmpEach); 
        if (tmpEach.length > 0) {
          tmpArr[each.properties[field[1].toLowerCase()]] = tmpEach;
        }}
      }

      setresultDic(tmpArr);
      const tmpArr1: any[][] = [];
      for (const key in resultDic) {
        tmpArr1.push(resultDic[key]);
      }
      setresultList(tmpArr1);
    }
    return;
  };

  const addToResult = async (e: React.MouseEvent<HTMLElement>) => {
    //get search layer from element searchBy
    const layer =
      (document.getElementById("searchBy") as HTMLInputElement)?.value + "InUT";
    const map = eMap.map;
    //get information from compareAPI and API elements for search by API
    const tmpArr: { [key: number]: any[] } = resultDic;
    //query=api:4300320047,wellName:abc
    const query: any[] = ["all"];

    //get api value and operation
    const search1Value = (
      document.getElementById("searchInput1") as HTMLInputElement
    )?.value;

    const search1Name = ((document.getElementById("search1") as HTMLTableColElement)
      ?.innerText).toLowerCase();

    if (search1Value !== "") {
      const tmpQ: any[] = [];
      tmpQ.push("==");
      tmpQ.push(search1Name);
      tmpQ.push(parseInt(search1Value));
      query.push(tmpQ);
    }

    //get api value and operation
    const search2Value = (
      document.getElementById("searchInput2") as HTMLInputElement
    )?.value;
    const search2Name = (
      document.getElementById("search2") as HTMLTableColElement
    )?.innerText.toLowerCase();

    if (search2Value != "") {
      const tmpQ = [];
      tmpQ.push("==");
      tmpQ.push(search2Name);
      tmpQ.push(search2Value);
      query.push(tmpQ);
    }

    //in case of query is not null, get data with query
    if (query.length > 0) {
      const tmp = map?.querySourceFeatures(layer, {
        filter: query,
      });

      console.log(query);

      for (const each of tmp) {
        
        const tmpEach: any[] = [];
        if (field!=undefined){
        tmpEach.push(each.properties[field[1].toLowerCase()]);
        tmpEach.push(each.properties[field[2].toLowerCase()]);
        tmpEach.push(each.properties[field[3].toLowerCase()]);
        tmpEach.push(each.properties[field[4].toLowerCase()]);
        tmpEach.push(each.geometry.coordinates);
        console.log(tmpEach); 
        if (tmpEach.length > 0) {
          tmpArr[each.properties[field[1].toLowerCase()]] = tmpEach;
        }}
      }

      setresultDic(tmpArr);
      const tmpArr1: any[][] = [];
      for (const key in resultDic) {
        tmpArr1.push(resultDic[key]);
      }
      setresultList(tmpArr1);
    }
    return;
  };

  const handler = async (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element) {
      if (event.type == "mouseover" && event.target.parentElement != null) {
        event.target.parentElement!.className = "SelectedRow";
        if (event.target.parentElement!.childNodes[0].textContent != null) {
          const i = parseInt(
            event.target.parentElement!.childNodes[0].textContent
          );
          const cor = resultList[i][4];

          const el = document.createElement("div");
          el.className = "marker";
          new mapboxgl.Marker(el).setLngLat(cor).addTo(eMap.map);
        }
      }
      if (event.type == "mouseout" && event.target.parentElement != null) {
        event.target.parentElement!.className = "";
        const els = document.getElementsByClassName("marker");
        for (const el of els) {
          el.className = "markerdisabled";
        }
      }
    }
  };

  return (
    <div>
      <div
        style={{
          height: 40,
          boxShadow: "none",
          borderTop: "1px solid #CACACA",
          boxSizing: "border-box",
          position: "relative",
          bottom: 0,
          width: "100%",
          left: 0,
        }}
        className="headerRect"
      >
        <table>
          <tr>
            <td style={{ width: "50%" }}>
              <Square
                message={"Add to Result"}
                onClick={(e: React.MouseEvent<HTMLElement>) => addToResult(e)}
              />
            </td>
            <td>
              <Square
                message={"Filter New Result"}
                onClick={(e: React.MouseEvent<HTMLElement>) => newResult(e)}
              />
            </td>
          </tr>
        </table>
      </div>
      <div id="ReNumber" style={{ overflow: "auto", padding: "2px" }}>
        Result total number is: {resultList.length}
        <table>
          <thead>
            <tr>
              <th style={{ width: "3vw" }}>{field?.at(0)}</th>
              <th style={{ width: "5vw" }}>{field?.at(1)}</th>
              <th style={{ width: "5vw" }}>{field?.at(2)}</th>
              <th style={{ width: "5vw" }}>{field?.at(3)}</th>
              <th style={{ width: "5vw" }}>{field?.at(4)}</th>
            </tr>
          </thead>
        </table>
        <div id="resultDic">
          <table>
            {resultList.length > 0 &&
              resultList.map((item: any) => (
                <tr
                  style={{ border: "1px solid #e6e6e6" }}
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => handler(e)}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => handler(e)}
                >
                  <td style={{ padding: 0, width: "20px" }}>
                    {resultList.indexOf(item)}
                  </td>
                  <td style={{ padding: 0, width: "5vw" }}>{item[0]}</td>
                  <td style={{ width: "5vw", textAlign: "center" }}>
                    {item[1]}
                  </td>
                  <td style={{ width: "5vw", textAlign: "center" }}>
                    {item[2]}
                  </td>
                  <td style={{ width: "5vw", textAlign: "center" }}>
                    {item[3]}
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default WellSearchResult;
