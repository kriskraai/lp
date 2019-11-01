import React from "react";
import {createStore} from 'redux';

class Reducer extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
      }
render() { 
    //2. Reducer - State 
    // - Action
    const reducer = function(state, action) {
      
      if (action.type === "ATTACK"){
      return action.payload
    }
      if (action.type === "GREENATTACK"){
      return action.payload
    }
      return state;
    }
    
    //1. Store - reducer (agent)
    //- state
    const store = createStore(reducer, "Peace")

    //3. Subscribe 
    store.subscribe(() => {
      console.log("Store is now", store.getState())
    })

    //4. Dispatch (take action)
    switch(this.props.attk) {
      case "ATTACK":
        store.dispatch({type: "ATTACK", payload: "Iron Man"})
        break;
      case "GREENATTACK":
        store.dispatch({type: "GREENATTACK", payload: "Hulk"})
        break;
      default:
        store.dispatch({type: "NADA", payload: "nada"})
    }
    return (
     <div />
    )
  }
}

export default Reducer;