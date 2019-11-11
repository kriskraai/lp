import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const rootReducer = (state, action) => {
  if (action.type === "SIGNOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    //,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;