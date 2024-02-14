import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";




let reducers = combineReducers({    //объект с редюсерами. нужно воспринимать его как state
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
   });


let store = createStore(reducers)
export type AppRootStateType = ReturnType<typeof reducers>
export type DispatchType = ReturnType<typeof store.dispatch>
//@ts-ignore
window.store = store
export default store;