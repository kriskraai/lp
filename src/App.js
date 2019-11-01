import React from 'react';
import './App.css';
import Attack from './Attack'

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
          <Attack/>
        </p>

      </header>
    </div>
  );
}

export default App;
