import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [resourceType, setResourceType] = useState("posts");
  //Ha alapból a useEffect nyílfüggvény fgv. teste minden egyes rendereléskor megváltozik (ha a képernyő tartalma módusol, akkor fut le)
  /*
  useEffect( () => {
    console.log("render");
  });
  */

  //Amikor megváltozik a resourceType akkor fut le
  /*
  useEffect( () => {
    console.log("resource type change ");
  }, [resourceType] );
  */

  //Ha a tömb üres akkor csak 1szer fut le
  /*
  useEffect( () => {
    console.log("onmount ");
  }, [] );
  */


  
  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType] );

  return (
    <>
    <div>
      <button onClick={ () => setResourceType('posts') }>Posts</button>
      <button onClick={ () => setResourceType('users') }>Users</button>
      <button onClick={ () => setResourceType('comments') }>Comments</button> 
    </div>
    <h1>{resourceType}</h1>
    </>
  );
}

export default App;