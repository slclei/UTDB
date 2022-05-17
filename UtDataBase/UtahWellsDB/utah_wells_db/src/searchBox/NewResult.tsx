import React from "react";
import WellService from "../services/WellService";
import Square from "./Onclick";

class NewResult extends React.Component {
    render() {
      return (
        <Square
           message = { 'Filter New Result' }
           onClick = { async () => {
            const result: Promise<any>[]=[];        
            
          //get information from compareAPI and API elements for search by API
            if(document.getElementById('compareAPI') && document.getElementById('API') && result){
              //get api value and operation
                const apiValue=document.getElementById('API')!.value;   
                const apiOperation=document.getElementById('compareAPI')!.value;
                //in case of "=" operation, get result from server, and write it to result
                if (apiOperation==="="){
                    //get result from getAPI; promise type
                    const apiResult=WellService.getAPI(apiValue);
                    result.push(apiResult);
                    /*
                    apiResult.
                    then((res)=>{
                        console.log(res.data.county);
                        result!.innerHTML +=res.data.api;
                    })
                    .catch((err)=>{
                        console.log(err);
                    });*/
                }
            } 
            return
          }   }
        />
      );
    }
}

export default NewResult