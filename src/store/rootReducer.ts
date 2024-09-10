import { combineReducers } from "@reduxjs/toolkit";
import contactReducer from "./contact"

const rootReducer = combineReducers({contactReducer});

export default rootReducer;