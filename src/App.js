import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; /*Hooks의 useState를 사용하기 위해서는 import를 해줘야 함. */

const App=()=> {

  const [increase, setIncrease] = useState(0) /*Hooks중 하나인 useState를 사용함, 초기값은 0으로 지정 */
  /*increase는 getter, 즉 변수값을 가져오는 역할, setIncrease는 setter, 즉 변수값을 변화시키는 역할을 함 */

  return (
    <div className="App">
      <h1>onClick Event Handling</h1>
      {increase}
      <button onClick={()=>setIncrease(increase+1)}>increase</button> {/*{increase}값을 증가시킴 */}
      <button onClick={()=>setIncrease(increase-1)}>decrease</button> {/*{increase}값을 감소시킴 */}
      
    </div>
  );
}

export default App;
