import React, { useState } from "react";
import WellService from "../services/WellService";
import Square from "./Onclick";

function SearchResult() {
    const [resultList, setresultList] = useState<any>([]);

    const newResult = async () => {
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
            console.log(apiResult);
            apiResult.then((res) => {
                    const tmp: any[]=res.data;
                    for(var each of tmp){
                        const tmpEach: any[]=[];
                        tmpEach.push(each.api);
                        tmpEach.push(each.wellName);
                        tmpEach.push(each.county);
                        tmpEach.push(each.wellType);
                        if (tmpEach.length>0){
                            tmpArr.push(tmpEach);
                        }
                    }
                    setresultList(tmpArr);
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
                            <span
                                id="btnAdd"
                                className="linkText">
                                Add to Results
                            </span>
                        </td>
                        <td>
                            <Square
                                message={'Filter New Result'}
                                onClick={newResult}
                            />
                        </td>
                    </tr>
                </table>
            </div>
            <div style={{ padding: 10, height: "50%", border: "1px solid #e6e6e6" }}>Result
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
                <div id="resultList" style={{overflow:"auto", height:"500px"}}>
                    {resultList.length > 0 && resultList.map((item: any) => <table>
                        <tr style={{ border: "1px solid #e6e6e6" }}>
                            <th style={{ padding: 0, width: "3vw" }}>{resultList.indexOf(item)}</th>
                            <th style={{ padding: 0, width: "5vw" }}>{item[0]}</th>
                            <th style={{ width: "5vw", textAlign: "center" }}>{item[1]}</th>
                            <th style={{ width: "5vw", textAlign: "center" }}>{item[2]}</th>
                            <th style={{ width: "5vw", textAlign: "center" }}>{item[3]}</th>
                        </tr></table>)}
                </div>

            </div>
        </div>
    );
}


export default SearchResult