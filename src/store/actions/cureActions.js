import {
  //   ORG_THOUGHTS,
  //   ILEAD_THOUGHTS,
  //   CORP_ILEAD_THOUGHTS,
  //   GC_THOUGHTS,
  //   DAILY_THOUGHTS,
  //   MY_THOUGHTS,
  //   PLDP_THOUGHTS,
  //   CREATE_THOUGHT_SUCCESS,
  //   FILTERED_POST,
       SELECTED_CURE
  } from "./actions/types";

export const createCure = params => {
   // set conditions for dispatch
    return (dispatch, getState) => {
        dispatch({
            type: "SHOW_TOAST",
            cure: "the cure is: ",
            variant: "error",
            message: "Error response: " + err.response.data.message
          });
      }
    }; 