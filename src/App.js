import { CounterProvider } from "./contexts/counter-context";
import CounterView from "./views/counter";

function App() {
  return (
    <CounterProvider>
      <CounterView />
    </CounterProvider>
  );
}

export default App;
