/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const JSZip = require("jszip");
const https = require("https");
const url = require("url");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());
const port = process.env.PORT || 6123;

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

//read remote file
function readRemoteFile(req, res1) {
  const Curl =
    "https://pubs.usgs.gov/of/2012/1024/e/downloads/SAU_C5036_C5037.zip";
    var ret="";
  // Add your code here
  var req = https.get(url.parse(Curl), function (res) {
  if (res.statusCode !== 200) {
    console.log(res.statusCode);
    // handle error
    return;
  }
  var data = [], dataLen = 0;

  // don't set the encoding, it will break everything !
  // or, if you must, set it to null. In that case the chunk will be a string.

  res.on("data", function (chunk) {
    data.push(chunk);
    dataLen += chunk.length;
  });

  res.on("end", function () {
    //console.log(data);
    var buf = Buffer.concat(data);

    // here we go !
    //console.log(buf);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
    JSZip.loadAsync(buf).then(function (zip) {
      //console.log(zip);
      const fistLayer=zip.files["SAU_C5036.zip"];
      console.log(fistLayer);
      console.log("----------------------------------------------------------------");
      return zip;
    });
  });
});

req.on("error", function(err){
  // handle error
  console.log(err);
});
return req;
}

app.get("/server", function (req, res) {
  var ret=readRemoteFile(req, res);

  res.json({ success: ret, url: req.url });
});

app.get("/server/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/server", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/server/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/server", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/server/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/server", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/server/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
