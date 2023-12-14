import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppStateType} from "./App";
import React from "react";
import './index.css';
import store from './redux/state'

//
// type Store =  {
//     _state: AppStateType
//     getState: ()=>AppStateType
//     rerenderEntireTree: ()=>void
//     subscribe: (observer: (state: AppStateType) => void)  =>void
//     addPost: () => void
//     updateNewPostText: (inputText: string) => void
//     addMessage: () => void
//     updateMessage: (inputText: string) => void
// }

export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateMessage={store.updateMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


