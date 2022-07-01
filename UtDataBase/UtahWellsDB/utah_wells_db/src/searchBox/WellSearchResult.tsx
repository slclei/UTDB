/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Square from "./Onclick";
import Amplify from "aws-amplify";
import config from "../aws-exports";
//import welldata from '../data/wellUTforData.json';
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { MapControl } from "../basemap/exportMap";
import mapboxgl from "mapbox-gl";
import searchFields from "./SearchField";

Amplify.configure(config);
const eMap = MapControl[0];

//get input from search parameters, and search result from target layer
function WellSearchResult() {
  const [resultDic, setresultDic] = useState<any>({});
  const [resultList, setresultList] = useState<any>([]);

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

    const search1Name = ((
      document.getElementById("search1") as HTMLTableColElement
    )?.innerText).toLowerCase();

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

      for (const each of tmp) {
        const tmpEach: any[] = [];
        if (field != undefined) {
          tmpEach.push(each.properties[field[0].toLowerCase()]);
          tmpEach.push(each.properties[field[1].toLowerCase()]);
          tmpEach.push(each.properties[field[2].toLowerCase()]);
          tmpEach.push(each.properties[field[3].toLowerCase()]);
          tmpEach.push(each.geometry.coordinates);

          if (tmpEach.length > 0) {
            tmpArr[each.properties[field[0].toLowerCase()]] = tmpEach;
          }
        }
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

    const search1Name = ((
      document.getElementById("search1") as HTMLTableColElement
    )?.innerText).toLowerCase();

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

      for (const each of tmp) {
        const tmpEach: any[] = [];
        if (field != undefined) {
          tmpEach.push(each.properties[field[0].toLowerCase()]);
          tmpEach.push(each.properties[field[1].toLowerCase()]);
          tmpEach.push(each.properties[field[2].toLowerCase()]);
          tmpEach.push(each.properties[field[3].toLowerCase()]);
          tmpEach.push(each.geometry.coordinates);

          if (tmpEach.length > 0) {
            tmpArr[each.properties[field[0].toLowerCase()]] = tmpEach;
          }
        }
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
          <tbody>
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
          </tbody>
        </table>
      </div>
      <div
        id="ReNumber"
        style={{ overflow: "auto", height: "52vh", padding: "2px" }}
      >
        Result total number is: {resultList.length}
        <table style={{ overflow: "auto", height: "100%" }} id="ReTable">
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #e6e6e6",
                  width: "3vw",
                  textAlign: "center",
                }}
              >
                No.
              </th>
              <th
                style={{
                  border: "1px solid #e6e6e6",
                  width: "5vw",
                  textAlign: "center",
                }}
              >
                {field?.at(0)}
              </th>
              <th
                style={{
                  border: "1px solid #e6e6e6",
                  width: "5vw",
                  textAlign: "center",
                }}
              >
                {field?.at(1)}
              </th>
              <th
                style={{
                  border: "1px solid #e6e6e6",
                  width: "5vw",
                  textAlign: "center",
                }}
              >
                {field?.at(2)}
              </th>
              <th
                style={{
                  border: "1px solid #e6e6e6",
                  width: "5vw",
                  textAlign: "center",
                }}
              >
                {field?.at(3)}
              </th>
            </tr>
          </thead>

          {resultList.length > 0 &&
            resultList.map((item: any) => (
              <tbody  key={item[0] + "tbody"}>
                <tr
                  onMouseOver={(e: React.MouseEvent<HTMLElement>) => handler(e)}
                  onMouseOut={(e: React.MouseEvent<HTMLElement>) => handler(e)}
                >
                  <td
                    style={{
                      border: "1px solid #e6e6e6",
                      padding: 0,
                      width: "20px",
                      textAlign: "center",
                    }}
                  >
                    {resultList.indexOf(item)}
                  </td>
                  <td
                    style={{
                      border: "1px solid #e6e6e6",
                      padding: 0,
                      width: "5vw",
                      textAlign: "center",
                    }}
                  >
                    {item[0]}
                  </td>
                  <td
                    style={{
                      border: "1px solid #e6e6e6",
                      width: "5vw",
                      textAlign: "center",
                    }}
                  >
                    {item[1]}
                  </td>
                  <td
                    style={{
                      border: "1px solid #e6e6e6",
                      width: "5vw",
                      textAlign: "center",
                    }}
                  >
                    {item[2]}
                  </td>
                  <td
                    style={{
                      border: "1px solid #e6e6e6",
                      width: "5vw",
                      textAlign: "center",
                    }}
                  >
                    {item[3]}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}

export default WellSearchResult;
