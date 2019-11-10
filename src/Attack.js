import React from "react";
import {createStore} from 'redux';
import xReducer from './reducer';

//import FormControl from "@material-ui/core/FormControl";
//import Select from 'react-select'

import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Input
  // Grid,
  // FormHelperText
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
  class Attack extends React.Component {
    constructor(props) {
      super(props);
      //this.handleChange = this.handleChange.bind(this);
    }

    state = {
      attack:"nada",
      selectlabel: "name",
      selectid: "id"
    }

    //  handleChange(event, name) {
    //   console.log('in handleChange')
    //   const { target } = event;
    //   const targetValue = event.target.value;
    //   this.setState({
    //     attack: targetValue
    //   });
    // }

    // handleChange(value, name) {
    //   console.log('inside handleChange', value.label)
    //   this.setState({ attack: value.value });
    // }

  //  getStore() {
  //   store.subscribe(() => {
  //     return store.getState();
  //   })
  // }

  // getStore() {
  //   store.subscribe( store.getState() )
  // }

    handleInput(event, name) {
      const { target } = event;
      this.setState(
        preState => ({
          ...preState,
          form: {
            ...preState.form,
            [name]: target.value
          },
          attackid: target.value.attackid,
          attackname: target.value.attackname
        }),
        console.log('inside handleChange', event.target.value),
        this.setState({ attack: event.target.value })
        // function() {
        //   this.props.handleGroups(target.value.group_id, target.value.selectlabel);
        // }
      );
    };

  render() { 

    return (
      <div>
        <xReducer attk={this.state.attack}/>
        <FormControl style={{ width: "300px", color: "green" }}>
            <InputLabel shrink htmlFor="groups">
              My Groups
            </InputLabel>
        <Select
              value={this.state.attack}
              displayEmpty
              onChange={event => this.handleInput(event, "groups")}
              input={<Input name="groups" id="groups" />}
              >
                <MenuItem value="NADA">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="NADA">
                  <em>NOTHING</em>
                </MenuItem>
                <MenuItem value="ATTACK">
                  <em>ATTACK</em>
                </MenuItem>
                <MenuItem value="GREENATTACK">
                  <em>GREENATTACK</em>
                </MenuItem>
              </Select>
        </FormControl>
        <br/>
        <FormControlLabel
          value="rval"
          style={{color:"black"}}
          control={<InputLabel color="primary" />}
          // label={store.getState()}

          //label={this.state.attack}

          //labelPlacement="end"
        />
      </div>
    )
   }
  }

//export default withStyles(styles)(ReduxExp);
export default Attack;
