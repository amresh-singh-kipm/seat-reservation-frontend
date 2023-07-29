import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/SeatBooking/Index";

function App() {
  const [seatList, setSeatList] = useState(false);
  const [bookedSeat,setBookedSeat] = useState("")
  return (
    <div className="App">
      <Navbar seatList={seatList} setSeatList={setSeatList} setBookedSeat={setBookedSeat} />
      <h2>Train Ticket Booking Application</h2>
      <Index seatList={seatList} bookedSeat={bookedSeat} />
    </div>
  );
}

export default App;
