import React from "react";
import {createStore} from 'redux';

class Reducerx extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
      }

render() { 
    //2. Reducer - State 
    // - Action
    console.log('inside the reducer');
    const reducer = function(state, action) {
      
      if (action.type === "Cold"){
      return action.payload
    }
      if (action.type === "Flu"){
      return action.payload
    }
      return state;
    }
    
    //1. Store - reducer (agent)
    //- state
    const store = createStore(reducer, "Health")

    //3. Subscribe 
    store.subscribe(() => {
      console.log("Store is now ... ", store.getState())
    })

    //4. Dispatch (take action)
    switch(this.props.dis) {
      case "ATTACK":
        store.dispatch({type: "Cold", payload: "Lemon and Honey"})
        break;
      case "GREENATTACK":
        store.dispatch({type: "Flu", payload: "Anti-biotics"})
        break;
      default:
        store.dispatch({type: "Nothing", payload: "Rest"})
    }
    return (
     <div/>
    )
  }
}

export default Reducerx;