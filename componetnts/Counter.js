import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); //Count

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);


  return (
    <div style={{textAlign: "center"}}>
        <p>Counter from the first lab</p>
        <p>Count: {count}</p>
        <button onClick={increment} style={{ border: '2px solid black', borderRadius: '4px', backgroundColor: 'lightgrey', marginRight: '10px' }}>Increment</button>
        <button onClick={decrement} style={{ border: '2px solid black', borderRadius: '4px', backgroundColor: 'lightgrey', marginRight: '10px' }}>Decrement</button>
    </div>
  );
}
