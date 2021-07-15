import React, { useState, useEffect } from 'react';

function ExampleOne() {
  const [count, setCount] = useState(0); //useState használata -0ról indul a számláló

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`; // a "Doksi" címe frissül így. Minden egyes renderelődésnél
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> 
        Click me
      </button>
    </div>
  );
}

export default ExampleOne;