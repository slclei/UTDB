import "@aws-amplify/ui-react/styles.css";
import { FC } from "react";
import logo from "./logo.svg";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
} from "@aws-amplify/ui-react";

let flag=0;

function logIn({ signOut }) {
    const logout = async() => {
        const logV = document.getElementById('logView');
        if (flag==0){            
            logV.style.display = "block";
            flag=1;
        }
        else{
            logV.style.display = "none";
            flag=0;
        }

    }
    return( <div>
        <button 
        type = "button"
        id = "logoutBtn"
        className = "btn btn-primary"
        style = {{ width: "50px" }}
        onClick = {(e) => { logout() }}> Log in/out </button> 
        <View id = "logView"
        style = {
            { display: "none", position:'absolute', top: '30vh', left:'30vw',zIndex:4000 }
        } > < Card > 
        < Image src = { logo }
        className = "App-logo"
        alt = "logo" / > 
        < Heading level = { 1 } >Do you want to Logout? (current no function for log in/out) </Heading> 
        </Card > 
        <Button style={{background: '#FFF8DC'}}onClick = { signOut } > Sign Out </Button> 
        </View></div>
        );
    }
    export default withAuthenticator(logIn);