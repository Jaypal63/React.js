import React, { useState } from 'react';
function ChildComponent({ messageFromParent }) {
  // Using state in the child component
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div  className='container'>
      <h2>Message from Parent: {messageFromParent}</h2>

      {/* Displaying and updating state */}
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

function ParentComponent() {
  const parentMessage = "Hello from Parent!";

  return (
    <div  className='container'>
      <h1 className='text-danger'>Props and State Example</h1>
      {/* Passing data (props) to the child component */}
      <ChildComponent messageFromParent={parentMessage} />
    </div>
  );
}

export default ParentComponent;
