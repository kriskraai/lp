// import cureReducer from "./cureReducer";

// const rootReducer = combineReducers({
//     cure: cureReducer
//     });

// export default rootReducer;

import { combineReducers } from 'redux'
import counter from './counter'

const appReducer = combineReducers({
  counter
})

export default appReducer
    