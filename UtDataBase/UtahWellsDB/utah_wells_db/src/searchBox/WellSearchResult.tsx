/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Square from "./Onclick";
import Amplify from "aws-amplify";
import config from "../aws-exports";
//import welldata from '../data/wellUTforData.json';
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import eMap from "../basemap/exportMap";

Amplify.configure(config);

//get input from search parameters, and search result from target layer
function WellSearchResult() {
  const [resultDic, setresultDic] = useState<any>({});
  const [resultList, setresultList] = useState<any>([]);

  //get search layer from element searchBy
  const layer=(document.getElementById("searchBy") as HTMLInputElement)?.value+"InUT";

  const newResult = async (e: React.MouseEvent<HTMLElement>) => {
    const map = eMap.map;
    //get information from compareAPI and API elements for search by API
    const tmpArr:  { [key: number]:any[]; }= {};
    //query=api:4300320047,wellName:abc
    const query: any[] = ["all"];
    if (
      document.getElementById("compareAPI") &&
      document.getElementById("API")
    ) {
      //get api value and operation
      const apiValue = (document.getElementById("API") as HTMLInputElement)
        ?.value;
      if (apiValue !== "") {
        const tmpQ: any[] = [];
        tmpQ.push("==");
        tmpQ.push("api");
        tmpQ.push(parseInt(apiValue));
        query.push(tmpQ);
      }
    }
    if (document.getElementById("WellName")) {
      //get api value and operation
      const nameValue = (
        document.getElementById("WellName") as HTMLInputElement
      )?.value;
      if (nameValue != "") {
        const tmpQ = [];
        tmpQ.push("==");
        tmpQ.push("wellname");
        tmpQ.push(nameValue);
        query.push(tmpQ);
      }
    }
    console.log("1");
    console.log(query);
    //in case of query is not null, get data with query
    if (query.length > 0) {
      const tmp = map?.querySourceFeatures(layer, {
        filter: query
      });
      console.log("2");
      
      for (const each of tmp) {
        const tmpEach: any[] = [];
        tmpEach.push(each.properties.api);
        tmpEach.push(each.properties.wellname);
        tmpEach.push(each.properties.county);
        tmpEach.push(each.properties.welltype);
        if (tmpEach.length > 0) {
          tmpArr[each.properties.api] = tmpEach;
        }
      }
      
      setresultDic(tmpArr);
      console.log(resultDic);
      const tmpArr1: any[][] = [];
      for (const key in resultDic) {
        console.log(resultDic[key]);
        tmpArr1.push(resultDic[key]);
      }
      console.log(tmpArr1);
      setresultList(tmpArr1);
      console.log("3");
      console.log(resultList);
    }
    return;
  };

  const addToResult = async (e: React.MouseEvent<HTMLElement>) => {
    const map = eMap.map;
    //get information from compareAPI and API elements for search by API
    const tmpArr = resultDic;
    //query=api:4300320047,wellName:abc
    const query = [];
    if (
      document.getElementById("compareAPI") &&
      document.getElementById("API")
    ) {
      //get api value and operation
      const apiValue = (document.getElementById("API") as HTMLInputElement)
        ?.value;
      const tmpQ = [];
      tmpQ.push("like");
      tmpQ.push("api");
      tmpQ.push(apiValue);
      query.push(tmpQ);
    }
    if (document.getElementById("WellName")) {
      //get api value and operation
      const nameValue = (
        document.getElementById("WellName") as HTMLInputElement
      )?.value;
      const tmpQ = [];
      tmpQ.push("like");
      tmpQ.push("wellname");
      tmpQ.push(nameValue);
      query.push(tmpQ);
    }
    //in case of query is not null, get data with query
    if (query.length > 0) {
      /*const relatedCounties = map.querySourceFeatures('counties', {
                sourceLayer: 'original',
                filter: ['in', 'COUNTY', feature.properties.COUNTY]
            });
            var breweryFilter=[
                "all",
                ["in", "stateNam", 'Utah','Texas','Florida'],
                ["in", "breweryType", 'Irish','American']
            ] */

      const tmp = map?.querySourceFeatures("wellsInUTLayer", {
        filter: query,
      });

      for (const each of tmp) {
        const tmpEach: any[] = [];
        tmpEach.push(each.api);
        tmpEach.push(each.wellName);
        tmpEach.push(each.county);
        tmpEach.push(each.wellType);
        if (tmpEach.length > 0) {
          tmpArr[each.api] = tmpEach;
        }
      }
      setresultDic(tmpArr);
      const tmpArr1: any[][] = [];
      for (const key in resultDic) {
        tmpArr1.push(resultDic[key]);
      }
      setresultList(tmpArr1);
      console.log(resultList);
    }
    return;
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
      <div id="ReNumber">
        Result total number is: {resultList.length}
        <table>
          <thead>
            <tr>
              <th style={{ width: "3vw" }}>ItemNo.</th>
              <th style={{ width: "5vw" }}>API</th>
              <th style={{ width: "5vw" }}>WellName</th>
              <th style={{ width: "5vw" }}>County</th>
              <th style={{ width: "5vw" }}>WellType</th>
            </tr>
          </thead>
        </table>
        <div id="resultDic" style={{ overflow: "auto" }}>
          {resultList.length > 0 &&
            resultList.map((item: any) => (
              <table>
                <tr style={{ border: "1px solid #e6e6e6" }}>
                  <td style={{ padding: 0, width: "5vw" }}>
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
              </table>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WellSearchResult;
