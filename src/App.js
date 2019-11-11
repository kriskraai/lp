import React from 'react';
import './App.css';
import Attack from './Attack'
import Reducerx from './reducer'

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
        Cures
        <p>

          <Attack/>
        </p>

      </header>
    </div>
  );
}

export default App;
