import "./App.css";
import CounterButton from "./CounterButton";
import { CounterProvider } from "./CounterProvider";

function App() {
  return (
    <CounterProvider>
      <h1>Statemanagement example - context provider</h1>
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
