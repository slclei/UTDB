import React, { useState } from "react";
import WellService from "../services/WellService";
import Square from "./Onclick";

function SearchResult() {
    const [resultList, setresultList] = useState<any>([]);

    const newResult = async () => {
        //get information from compareAPI and API elements for search by API
        let tmpArr: any[][] = [];
        if (document.getElementById('compareAPI') && document.getElementById('API')) {
            //get api value and operation
            const apiValue = document.getElementById('API')!.value;
            const apiOperation = document.getElementById('compareAPI')!.value;
            //in case of "=" operation, get result from server, and write it to result
            if (apiOperation === "=") {
                //get result from getAPI; promise type
                const apiResult = WellService.getAPI(apiValue);
                const tmp: any[] = [];
                apiResult.
                    then((res) => {
                        tmp.push(res.data.api);
                        tmp.push(res.data.wellName);
                        tmp.push(res.data.county);
                        tmp.push(res.data.wellType);
                        if (tmp.length > 0) {
                            tmpArr.push(tmp);
                            setresultList(tmpArr);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
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
            <div style={{ padding: 10, overflow: "auto", height: "50%", border: "1px solid #e6e6e6" }}>Result
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "30%" }}>API</th>
                            <th style={{ width: "30%" }}>WellName</th>
                            <th style={{ width: "30%" }}>County</th>
                            <th style={{ width: "30%" }}>WellType</th>
                        </tr>
                    </thead>
                </table>
                <div id="resultList">
                    {resultList.length > 0 && resultList.map((item: any) =><table>
                        <tr>
                            <th style={{ padding: 0, width: "5vw" }}>{item[0]}</th>
                            <th style={{ width: "5vw", textAlign:"center" }}>{item[1]}</th>
                            <th style={{ width: "5vw", textAlign:"center"  }}>{item[2]}</th>
                            <th style={{ width: "5vw", textAlign:"center"  }}>{item[3]}</th>
                        </tr></table>)}
                </div>

            </div>
        </div>
    );
}


export default SearchResult