import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const customStyles = {
    width: "1800px",
    height: "1600px",
  };

  return (
    <div>
      <Calendar style={customStyles} />
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
