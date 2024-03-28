import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = ()=>{
    setCounter(counter+1);
  }

  const handleDecrement = ()=>{
    setCounter(counter-1);
  }

  return (
    <div className={styles.container}>
    <h1>Counter App</h1>
    <p>Count: {counter}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
