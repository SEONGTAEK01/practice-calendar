import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const customStyles = {
    width: "800px",
    height: "600px",
  };

  const handleClickDay = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar
        value={selectedDate}
        onClickDay={handleClickDay}
        style={customStyles}
      />
      <p>Selected Date: {selectedDate.toDateString()}</p>
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
