export default async function readToJSON(fileName: String){
    console.log('start to json');
    const csv=require('csvtojson');
    const fs=require('fs');

    fs.createReadStream(fileName)
  .pipe(csv())
  .on(fileName, (row: any) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
    console.log("done to json");
    return "jsonArray";
}