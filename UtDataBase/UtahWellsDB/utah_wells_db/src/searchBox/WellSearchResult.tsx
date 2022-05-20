import React, { useState } from "react";
import WellService from "../services/WellService";
import Square from "./Onclick";

function WellSearchResult() {
    const [resultDic, setresultDic] = useState<any>({});
    const [resultList, setresultList] = useState<any>([]);

    const newResult = async (e: React.MouseEvent<HTMLElement>) => {
        //get information from compareAPI and API elements for search by API
        let tmpArr: any[][] = [];
        //query=api:4300320047,wellName:abc
        let query: String = "";
        if (document.getElementById('compareAPI') && document.getElementById('API')) {
            //get api value and operation
            const apiValue = document.getElementById('API')!.value;
            query += "API:";
            query += apiValue;
        }
        if (document.getElementById('WellName')) {
            //get api value and operation
            const nameValue = document.getElementById('WellName')!.value;
            query += ",WellName:";
            query += nameValue;
        }
        //in case of query is not null, get data with query
        if (query !== "") {
            const apiResult = WellService.findMultiQueries(query);
            apiResult.then((res) => {
                const tmp: any[] = res.data;
                for (var each of tmp) {
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
                let tmpArr1: any[][] = [];
                for (let key in resultDic) {
                    tmpArr1.push(resultDic[key]);
                }
                setresultList(tmpArr1);
                console.log(resultList);
            })
                .catch((err) => {
                    console.log(err);
                });
        }
        return
    }

    const addToResult = async (e: React.MouseEvent<HTMLElement>) => {
        //get information from compareAPI and API elements for search by API
        let tmpArr: any[][] = resultDic;
        //query=api:4300320047,wellName:abc
        let query: String = "";
        if (document.getElementById('compareAPI') && document.getElementById('API')) {
            //get api value and operation
            const apiValue = document.getElementById('API')!.value;
            query += "API:";
            query += apiValue;
        }
        if (document.getElementById('WellName')) {
            //get api value and operation
            const nameValue = document.getElementById('WellName')!.value;
            query += ",WellName:";
            query += nameValue;
        }
        //in case of query is not null, get data with query
        if (query !== "") {
            const apiResult = WellService.findMultiQueries(query);
            apiResult.then((res) => {
                const tmp: any[] = res.data;
                for (var each of tmp) {
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
                let tmpArr1: any[][] = [];
                for (let key in resultDic) {
                    tmpArr1.push(resultDic[key]);
                }
                setresultList(tmpArr1);
                console.log(resultList);
            })
                .catch((err) => {
                    console.log(err);
                });
        }
        return
    }

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
                    left: 0
                }}
                className="headerRect"
            >
                <table>
                    <tr>
                        <td style={{ width: "80%" }}>
                            <Square
                                message={'Add to Result'}
                                onClick={(e: React.MouseEvent<HTMLElement>) => addToResult(e)}
                            />
                        </td>
                        <td>
                            <Square
                                message={'Filter New Result'}
                                onClick={(e: React.MouseEvent<HTMLElement>) => newResult(e)}
                            />
                        </td>
                    </tr>
                </table>
            </div>
            <div id="ReNumber">Result total number is: {resultList.length}
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
                <div id="resultDic" style={{ overflow: "auto", height: "500px" }}>
                    {resultList.length > 0 && resultList.map((item: any) => <table>
                        <tr style={{ border: "1px solid #e6e6e6" }}>
                            <td style={{ padding: 0, width: "5vw" }}>{resultList.indexOf(item)}</td>
                            <td style={{ padding: 0, width: "5vw" }}>{item[0]}</td>
                            <td style={{ width: "5vw", textAlign: "center" }}>{item[1]}</td>
                            <td style={{ width: "5vw", textAlign: "center" }}>{item[2]}</td>
                            <td style={{ width: "5vw", textAlign: "center" }}>{item[3]}</td>
                        </tr></table>)}
                </div>

            </div>
        </div>
    );
}


export default WellSearchResult