export default async function readToJSON(fileName: String){
    console.log('start to json');
    const csv=require('csvtojson');

    const jsonArray=await csv().fromFile(fileName);
    console.log("done to json");
    return jsonArray;
}