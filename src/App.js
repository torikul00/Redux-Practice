
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'
import './App.css';
import Child from './Child';
function App() {

  const myState = useSelector((state) => state.counter)
  const disPatch = useDispatch()
  return (
    <div>

      <h1>Welcome to Redux</h1>
      <h1>Count {myState}</h1>

      <button onClick={() => disPatch(incNumber())}>Increment</button>
      <button onClick={() => disPatch(decNumber())}>Decrement</button>

      <br />
      <Child />

    </div>
  );
}

export default App;
