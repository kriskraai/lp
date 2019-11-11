
import { createStore, applyMiddleware, compose} from "redux";
import appReducer from "./reducers"
import thunk from "redux-thunk"