const counter = (state, action) => {
    console.log("in counter reducer:", state, action)
    if (!state) state = 0;
    switch (action.type) {
      case 'INC':
        return state + 1;
        break;
  
      case 'DEC':
        return state - 1;
        break;
  
      default:
        return state;
    }
  };
  
  export default counter;