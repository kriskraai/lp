import React from "react";
import { connect } from "react-redux";
//import {createStore} from 'redux';
//import Reducerx from './reducer';

//import FormControl from "@material-ui/core/FormControl";
//import Select from 'react-select'
import { createCure } from "../../store/actions/cureActions";

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
        console.log('inside handleInput - ', event.target.value),
        this.setState({ attack: event.target.value })

      );
      var body = event.target.value;
      this.props.createCure(body);
    };

  render() { 

    return (
      <div>
       {/* <Reducerx dis={this.state.attack}/> */}
        <FormControl style={{ width: "300px", color: "green" }}>
            <InputLabel shrink htmlFor="remedies">
              My Remedy
            </InputLabel>
        <Select
              value={this.state.attack}
              displayEmpty
              onChange={event => this.handleInput(event, "remedies")}
              input={<Input name="remedies" id="remedies" />}
              >
                <MenuItem value="Nothing">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="Nothing">
                  <em>NOTHING</em>
                </MenuItem>
                <MenuItem value="Cold">
                  <em>Cold</em>
                </MenuItem>
                <MenuItem value="Flu">
                  <em>Flu</em>
                </MenuItem>
              </Select>
        </FormControl>
        <br/>
        <FormControlLabel
          value="rval"
          style={{color:"black"}}
          control={<InputLabel color="primary" />}
        />
      </div>
    )
   }
  }

  const mapStateToProps = state => {
    return {
     CREATE_CURE: state.thoughts.CREATE_CURE
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      createCure: params => dispatch(createCure(params))
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Attack);

//export default Attack;
