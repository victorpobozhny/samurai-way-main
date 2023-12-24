import React from "react";
import {StoreType} from "./App";
import store from "./redux/redux-store";

export type StoreContextType = StoreType | null

const StoreContext = React.createContext<StoreContextType>(null)


// const Provider = (props: any) => {
//     return (
//         <StoreContext.Provider value={props.store}>
//             {props.children}
//         </StoreContext.Provider >
//     )
// }

export default StoreContext;