import React, { useState } from "react";

import { useForm } from "./form";
import {readFileSync, writeFileSync} from 'fs';

function FeedBack() {
    // defining the initial state for the form
    const initialState = {
        email: "",
        name: "",
        note: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        FeedBackUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function FeedBackUserCallback() {
        const email = document.getElementById("email")!.value;
        const name = document.getElementById("name")!.value;
        const note = document.getElementById("note")!.value;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        const fileName ='feedback'+mm + '-' + dd + '-' + yyyy;
        const data='Email: '+email+'\n'+'Name: '+name+'\n'+'Note: '+note+'\n';
        
        localStorage.setItem(fileName,data);
    }

    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit} id="feedback">
            <div>
                <input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    required
                />

                <input
                    name='name'
                    id='name'
                    type='name'
                    placeholder='name'
                    onChange={onChange}
                    required
                />
                <input
                    name='note'
                    id='note'
                    type='note'
                    placeholder='note'
                    onChange={onChange}
                    required
                />
                <button type='submit'>FeedBack</button>
            </div>
        </form>
    );
}

export default FeedBack;