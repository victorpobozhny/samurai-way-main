import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppStateType} from "./App";
import React from "react";
import './index.css';
import store from './redux/redux-store'
import StoreContext from "./StoreContext";

export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>

                <App/>
            </StoreContext.Provider>

        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    }
)


