import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});

  const customStyles = {
    width: "800px",
    height: "600px",
  };

  const handleClickDay = (date) => {
    setSelectedDate(date);

    const eventName = prompt("Enter event name: ");
    if (eventName) {
      if (events[date.toDateString()]) {
        events[date.toDateString()].push(eventName);
      } else {
        events[date.toDateString()] = [eventName];
      }
      setEvents(events);
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && events[date.toDateString()]) {
      return events[date.toDateString()].map((event) => (
        <div key={event}>{event}</div>
      ));
    }
  };

  return (
    <div>
      <Calendar
        value={selectedDate}
        onClickDay={handleClickDay}
        style={customStyles}
        tileContent={tileContent}
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
