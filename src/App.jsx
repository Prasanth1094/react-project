
import './App.css'
import { Counter } from './Counter'
import CounterButton from './CounterButton';

const counter= new Counter();
function App() {

  return (
    <>
     <h1>State management tool - Mobx</h1>
	 <CounterButton counter={counter} />
    </>
  )
}

export default App
