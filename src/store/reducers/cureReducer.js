// import {
//   ORG_THOUGHTS,
//   ILEAD_THOUGHTS,
//   CORP_ILEAD_THOUGHTS,
//   GC_THOUGHTS,
//   DAILY_THOUGHTS,
//   MY_THOUGHTS,
//   PLDP_THOUGHTS,
//   CREATE_THOUGHT_SUCCESS,
//   FILTERED_POST,
//   SELECTED_GROUP_POSTS
// } from "../actions/types";

const initState = {
  something: [],
  somethingelse: {},
  CREATE_CURE: ""
};

const cureReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECTED_GROUP_POSTS:
      return {
        ...state,
        cure: action.cure,
        type: SELECTED_GROUP_POSTS,
        CREATE_CURE: ""
      };
    default:
      return state;
  }
};

export default cureReducer;