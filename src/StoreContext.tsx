import React from "react";
import {StoreType} from "./App";

export type StoreContextType = StoreType | null

const StoreContext = React.createContext<StoreContextType>(null)

export default StoreContext;