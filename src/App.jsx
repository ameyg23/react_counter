import React, { useState } from 'react';
import './App.css'; // Optional, if you want to move styles there

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
      setMessage('');
    } else {
      setMessage('Cannot go above 20');
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    } else {
      setMessage('Cannot go below 0');
    }
  };
  return (
    <div className="container">
      <button onClick={increaseCount}>Add Count</button>
      <p className="count">Current Count: {count}</p>
      <button onClick={decreaseCount}>Reduce Count</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
