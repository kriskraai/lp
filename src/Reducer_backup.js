import React from "react";
import {createStore} from 'redux';
//import FormControl from "@material-ui/core/FormControl";
import Select from 'react-select'
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  FormControl,
  //Select,
  MenuItem,
  InputLabel,
  Input,
  Grid,
  FormHelperText
} from "@material-ui/core";

const styles = {
  root: {
    "&>div": {
      "&:hover": {
        borderBottom: "1px solid red"
      }
    }
  },
  formControl: {
    width: "100%",
    "& label span": {
      color: "red"
    }
  },
  searchForm_submit_button: {
    background: "#e40000",
    borderRadius: 0,
    color: "#FFF",
    fontSize: 20,
    fontWeight: 100,
    "&:hover": {
      background: "#a30000",
      borderColor: "#a30000"
    }
  }
};

  class ReduxExp extends React.Component {
    constructor(props) {
      super(props);
      //this.handleChange = this.handleChange.bind(this);
    }

    state = {
      attack:"nada"
    }

    //  handleChange(event, name) {
    //   console.log('in handleChange')
    //   const { target } = event;
    //   const targetValue = event.target.value;
    //   this.setState({
    //     attack: targetValue
    //   });
    // }

    handleChange(value, name) {
      console.log('inside handleChange', value.label)
      this.setState({ attack: value.value });
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

      //function callDispatch(){
        //4. Dispatch (take action)
        console.log('in dispatch ')
        switch(this.state.attack) {
          case "ATTACK":
            store.dispatch({type: "ATTACK", payload: "Iron Man"})
            break;
          case "GREENATTACK":
            store.dispatch({type: "GREENATTACK", payload: "Hulk"})
            break;
          default:
            store.dispatch({type: "NADA", payload: "nada"})
        }
      //}
 
        // store.dispatch({type: "ATTACK", payload: "Iron Man"})
        // store.dispatch({type: "GREENATTACK", payload: "Hulk"})
        //store.dispatch({type: this.state.attack, payload: this.title.value})

        const options = [
          { value: 'NADA', label: 'NADA' },
          { value: 'ATTACK', label: 'ATTACK' },
          { value: 'GREENATTACK', label: 'GREENATTACK' }
        ]

        const MySelect = () => (
          <Select options={options}
           //onChange={() => this.callDispatch}
           //onClick={() => this.handleChange()}
          onChange={this.handleChange.bind(this)} 
          />
        )

    return (
      <div>
        <FormControl style={{ width: "300px", color: "green" }}>
          <MySelect/>
        </FormControl>
        <br/>
        <FormControlLabel
          value="rval"
          style={{color:"black"}}
          control={<InputLabel color="primary" />}
          label={this.state.attack}
          //labelPlacement="end"
          //onClick={() => this.setState({ showA: false })}
        />
      </div>
    )
   }
  }

//export default withStyles(styles)(ReduxExp);
export default ReduxExp;
