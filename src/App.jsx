import { RecoilRoot } from "recoil";
import "./App.css";
import CounterButton from "./CounterButton";

function App() {
  return (
    <RecoilRoot>
      <h1>State Management- Recoil</h1>
      <CounterButton />
    </RecoilRoot>
  );
}

export default App;
