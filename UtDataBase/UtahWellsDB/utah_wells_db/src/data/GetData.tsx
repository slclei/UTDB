import request from "react-request";
import JSZip from "jszip";
import http from "./http-zip";

const CO2Link="/a79f2a8c-7a63-418a-9526-7f637a84c4d8";

const getZip =(link:string)=>{
    return http.get<any>(link);
};

const getOne =()=>{fetch("https://edx.netl.doe.gov/" + CO2Link, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/zip',
      'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials':`true`
    },})       // 1) fetch the url
    .then(function (response) {                       // 2) filter on 200 OK
        if (response.status === 200 || response.status === 0) {
            return Promise.resolve(response.blob());
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    })
    .then(JSZip.loadAsync)                            // 3) chain with the zip promise
    .then(function (zip) {
        console.log(zip); // 4) chain with the text content promise
    });}

const getTwo=()=>{fetch("https://edx.netl.doe.gov/" + CO2Link)
  .then((response) => response.blob())
  .then((blob) => {
    console.log(blob);
  });
}

const getMethod={getOne, getTwo}

export default getMethod;
/*
request({
  method : "GET",
  url : "http://localhost/.../file.zip",
  encoding: null // <- this one is important !
}, function (error, response, body) {
  if(error ||  response.statusCode !== 200) {
    // handle error
    return;
  }
  JSZip.loadAsync(body).then(function (zip) {
    return zip.file("content.txt").async("string");
  }).then(function (text) {
    console.log(text);
  });
});*/