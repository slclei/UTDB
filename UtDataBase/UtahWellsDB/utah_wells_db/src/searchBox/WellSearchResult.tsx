import React, { useState } from "react";
import WellService from "../services/WellService";
import Square from "./Onclick";

import Amplify, { graphqlOperation } from 'aws-amplify';

import config from '../aws-exports';
import {API} from "aws-amplify";
import { DataStore } from '@aws-amplify/datastore';
import { Wells } from '../models';
//import LogIn from './elements/logIn';
import * as mutations from '../graphql/mutations';
import readToJson from './readFile';
import {listWells} from '../graphql/queries';
import gql from 'graphql-tag';
import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';

Amplify.configure(config);

const client=new AWSAppSyncClient({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
        apiKey: config.aws_appsync_apiKey,
    }
});

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
            const apiValue = (document.getElementById('API') as HTMLInputElement)!.value;
            query += "API:";
            query += apiValue;
        }
        if (document.getElementById('WellName')) {
            //get api value and operation
            const nameValue = (document.getElementById('WellName') as HTMLInputElement)!.value;
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
                .catch((err: any) => {
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
            const apiValue = (document.getElementById('API') as HTMLInputElement)!.value;
            query += "API:";
            query += apiValue;
        }
        if (document.getElementById('WellName')) {
            //get api value and operation
            const nameValue = (document.getElementById('WellName') as HTMLInputElement)!.value;
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
                .catch((err: any) => {
                    console.log(err);
                });
        }
        return
    }

    const listAll=async (e: React.MouseEvent<HTMLElement>)=>{
        console.log("start list all");
        const wellList=readToJson("D:\\Github\\UTDB\\UtDataBase\\UtahWellsDB\\utah_wells_db\\src\\searchBox\\readFile.tsx");
    
        for (var newWell of await wellList){
            const newInputWell=await API.graphql({ query: mutations.createWells, variables: {input: newWell}});
        }
    
        const allTodos = await API.graphql({ query: listWells });
        console.log("end list");
        console.log(allTodos); 
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
                    left: 0
                }}
                className="headerRect"
            >
                <table>
                    <tr>
                        <td style={{ width: "80%" }}>
                            <Square
                                message={'Add to Result'}
                                onClick={(e: React.MouseEvent<HTMLElement>) => listAll(e)}
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