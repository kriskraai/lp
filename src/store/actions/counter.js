import React from 'react'
//import { INC, DEC } from "./types";

export const inc = () => {
  return {
    type: 'INC',
  }
}

export const dec = () => {
  return {
    type: 'DEC',
  }
}

export function incAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(inc());
    }, 1000);
    return 100;
  };
}


// This action creator returns a function
//   function(dispatch, getState)
// This function will be invocated in Thunk middleware, 
// and it's return value would be the return value of next() or dispatch() of higher level
export function decAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(dec());
    }, 1000);
    return 200;
  };
}