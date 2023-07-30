import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/SeatBooking/Index";

function App() {
  //state to display updated seat
  const [seatList, setSeatList] = useState(false);

  //state to store the data of booked seat
  const [bookedSeat, setBookedSeat] = useState("");

  return (
    <div className="App">
      <Navbar
        seatList={seatList}
        setSeatList={setSeatList}
        setBookedSeat={setBookedSeat}
      />
      <h2>Train Ticket Booking Application</h2>
      <Index  seatList={seatList} bookedSeat={bookedSeat} />
    </div>
  );
}

export default App;
