import React, { Component, PropTypes } from 'react';

function AppComp({ counter, onInc, onDec, onIncAsync, onDecAsync }) {
  return (
    <div>
      <div> counter = {counter} </div>
      <button onClick={onInc}>Inc</button>
      {" "}
      <button onClick={onDec}>Dec</button>
      {" "}
      <button onClick={onIncAsync}>Inc Async</button>
      {" "}
      <button onClick={onDecAsync}>Dec Async</button>
    </div>
  );
}

export default AppComp;