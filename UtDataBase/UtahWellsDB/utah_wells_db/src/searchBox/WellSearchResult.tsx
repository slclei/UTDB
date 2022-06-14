import React, { useState } from "react";
import WellService from "../services/WellService";
import Square from "./Onclick";

import Amplify, { graphqlOperation } from 'aws-amplify';

import config from '../aws-exports';
import { API } from "aws-amplify";
import { DataStore } from '@aws-amplify/datastore';
import { Wells } from '../models';
//import LogIn from './elements/logIn';
import * as mutations from '../graphql/mutations';
import welldata from '../data/test1.json';
import { listWells } from '../graphql/queries';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

Amplify.configure(config);

const client = new AWSAppSyncClient({
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
        const tmpArr: any[][] = [];
        //query=api:4300320047,wellName:abc
        let query = "";
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
            })
                .catch((err: any) => {
                    console.log(err);
                });
        }
        return
    }

    const addToResult = async (e: React.MouseEvent<HTMLElement>) => {
        //get information from compareAPI and API elements for search by API
        const tmpArr: any[][] = resultDic;
        //query=api:4300320047,wellName:abc
        let query = "";
        if (document.getElementById('compareAPI') && document.getElementById('API')) {
            //get api value and operation
            const apiValue = (document.getElementById('API') as HTMLInputElement)?.value;
            query += "API:";
            query += apiValue;
        }
        if (document.getElementById('WellName')) {
            //get api value and operation
            const nameValue = (document.getElementById('WellName') as HTMLInputElement)?.value;
            query += ",WellName:";
            query += nameValue;
        }
        //in case of query is not null, get data with query
        if (query !== "") {
            const apiResult = WellService.findMultiQueries(query);
            apiResult.then((res) => {
                const tmp: any[] = res.data;
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
            })
                .catch((err: any) => {
                    console.log(err);
                });
        }
        return
    }

    const listAll = async (e: React.MouseEvent<HTMLElement>) => {
        
        const wellList = welldata;

        //console.log(wellList);
        for (const well in wellList) {
            //get sing well from well ist
            const newWell = wellList.at(parseInt(well));
            if (newWell !== undefined) {
                console.log("start list all");
                await DataStore.save(
                    new Wells({
                        api: (newWell?.["api"]).toString(),
                        wellname: newWell?.["wellname"],
                        operator: newWell?.["operator"],
                        operatorno: newWell?.["operatorno"],
                        fieldname: newWell?.["fieldname"],
                        ground_ele: newWell?.["ground_ele"],
                        kelly_elev: newWell?.["kelly_elev"],
                        drkfloor_e: newWell?.["drkfloor_e"],
                        coordssurf: newWell?.["coordssurf"],
                        coordssu_1: newWell?.["coordssu_1"],
                        utmzone: newWell?.["utmzone"],
                        latitude: newWell?.["latitude"],
                        longitude: newWell?.["longitude"],
                        footagens: newWell?.["footagens"],
                        dir_ns: newWell?.["dir_ns"],
                        footageew: newWell?.["footageew"],
                        dir_ew: newWell?.["dir_ew"],
                        qtrqtr: newWell?.["qtrqtr"],
                        section: newWell?.["section"],
                        township: newWell?.["township"],
                        townshipdi: newWell?.["townshipdi"],
                        range: newWell?.["range"],
                        rangedir: newWell?.["rangedir"],
                        meridian: newWell?.["meridian"],
                        county: newWell?.["county"],
                        dir_horiz: newWell?.["dir_horiz"],
                        dir_vert: newWell?.["dir_vert"],
                        dir_direct: newWell?.["dir_direct"],
                        confidenti: newWell?.["confidenti"],
                        confreldat: newWell?.["confreldat"],
                        leasenumbe: newWell?.["leasenumbe"],
                        leasetype: newWell?.["leasetype"],
                        surfaceown: newWell?.["surfaceown"],
                        abandondat: newWell?.["abandondat"],
                        wellstatus: newWell?.["wellstatus"],
                        welltype: newWell?.["welltype"],
                        totcum_oil: newWell?.["totcum_oil"],
                        totcum_gas: newWell?.["totcum_gas"],
                        totcum_wat: newWell?.["totcum_wat"],
                        indiantrib: newWell?.["indiantrib"],
                        multi_lats: newWell?.["multi_lats"],
                        originalfi: newWell?.["originalfi"],
                        unitname: newWell?.["unitname"],
                        gisstatust: newWell?.["gisstatust"],
                        origcompld: newWell?.["origcompld"],
                        jurisdicti: newWell?.["jurisdicti"],
                        forklift_h: newWell?.["forklift_h"],
                        globalid: newWell?.["globalid"],
                        extent: newWell?.["extent"],
                        formationtopdepths: parseFloat(newWell?.["formationtopdepths"]),
                        netpay: newWell?.["netpay"],
                        netsand: newWell?.["netsand"],
                        reportsid: newWell?.["reportsid"],
                        tdsnavajo: newWell?.["tdsnavajo"],
                        tdswingate: newWell?.["tdswingate"],
                        thickness: parseFloat(newWell?.["thickness"]),
                    })
                );
            }
        }

        const allWells = await DataStore.query(Wells);
        console.log("end list");
        console.log(JSON.stringify(allWells, null, 2)); 
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
                                message={'Add to Result2'}
                                onClick={(e: React.MouseEvent<HTMLElement>) => listAll(e)}
                            />
                        </td>
                        <td>
                            <Square
                                message={'Filter New Result'}
                                onClick={(e: React.MouseEvent<HTMLElement>) => newResult(e)}
                            />
                        </td>
                        <td>
                            <Square
                                message={'Add list'}
                                onClick={(e: React.MouseEvent<HTMLElement>) => listAll(e)}
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