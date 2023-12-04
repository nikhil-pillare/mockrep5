import Reducer from "./Reducer";




import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer=combineReducers({Reducer})

export const store= legacy_createStore(rootReducer,[])