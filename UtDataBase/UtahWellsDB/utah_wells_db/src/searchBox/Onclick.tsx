import React from "react";

//interface for onClick in Square . message is used to be displayerd
interface IProps_Square {
    message: string,
    onClick: any,
  }
  
  //Square element for onClick 
class Square extends React.Component < IProps_Square > {
     render() {  
       return (
         <button onClick={this.props.onClick}>
           {this.props.message}
         </button>
       );
     }
}

export default Square