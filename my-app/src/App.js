import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(5);

  function decrementCount () {
    //setCount(count - 1);
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount () {
    //setCount(count + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;