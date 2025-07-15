import { Provider } from "react-redux";
import "./App.css";
import CounterButton from "./CounterButton";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <h1>State management tool -redux</h1>
      <CounterButton />
    </Provider>
  );
}

export default App;
