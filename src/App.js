import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=()=> {

  const [increase, setIncrease] = useState(1)

  return (
    <div className="App">
      <h1>onClick Event Handling</h1>
      {increase}
      <button onClick={()=>setIncrease(increase+1)}>increase</button>
      <button onClick={()=>setIncrease(increase-1)}>decrease</button>
      
    </div>
  );
}

export default App;
