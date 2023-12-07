import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppStateType} from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import React from "react";
import './index.css';



export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}