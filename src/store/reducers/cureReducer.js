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
//       SELECTED_CURE_POSTS
// } from "../actions/types";

const initState = {
  something: [],
  somethingelse: {},
  CREATE_CURE: ""
};

const cureReducer = (state = initState, action) => {
  switch (action.type) {
    case "cold":
      return {
        ...state,
        cure: action.cure,
        type: "", //SELECTED_CURE_POSTS,
        CREATE_CURE: "Lemon and Honey"
      };
      case "flu":
        return {
          ...state,
          cure: action.cure,
          type: "", //SELECTED_CURE_POSTS,
          CREATE_CURE: "Anti-biotics"
        };  
    default:
      return state;
  }
};

export default cureReducer;