import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReduxExp from './Reducer'
//import Select from 'react-select'

function App() {
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  
  // const MyComponent = () => (
  //   <Select options={options} />
  // )
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyComponent/> */}
        <p>
          <ReduxExp/>
        </p>

      </header>
    </div>
  );
}

export default App;
