import Calendar from './pages/Calendar/Calendar';
import './App.css';
import { Line, LineHorizontal } from './pages/Calendar/styled';

function App() {
  return (
    <div className="App">
      <Line />
      <LineHorizontal />
      <Calendar />
    </div>
  );
};

export default App;
