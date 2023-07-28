import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/SeatBooking/Index";

function App() {
  const [seatList, setSeatList] = useState(false);
  return (
    <div className="App">
      <Navbar seatList={seatList} setSeatList={setSeatList} />
      <h2>Train Ticket Booking Application</h2>
      <Index seatList={seatList} setSeatList={setSeatList} />
    </div>
  );
}

export default App;
