import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyCalendar />
    </div>
  );
}

export default App;
