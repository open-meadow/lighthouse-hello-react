import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button>Hi</button>
  )
};

const Application = () => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <h1>Hello React</h1>
      <h1>Hi</h1>
      <Button/>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
