import React from 'react';
import { connect } from 'react-redux';

import AppComp from '../components/app';
//import { inc, dec, incAsync, decAsync } from '../store/actions';
import { inc, dec, incAsync, decAsync } from '../store/actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInc: () => {
      dispatch(inc());
    },
    onDec: () => {
      dispatch(dec());
    },
    onIncAsync: () => {
      let r = dispatch(incAsync());
      console.log("onIncAsync", r)
    },
    onDecAsync: () => {
      let r = dispatch(decAsync());
      console.log("onDecAsync", r)
    },
  };
}

let AppCtn = connect(mapStateToProps, mapDispatchToProps)(AppComp);

export default AppCtn;
