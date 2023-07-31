import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/SeatBooking/Index";

function App() {
  //state to display updated seat
  const [seatList, setSeatList] = useState(false);

  //state to store the data of booked seat
  const [bookedSeat, setBookedSeat] = useState("");

    //state to display loader
    const [isLoading,setIsLoading] = useState(false)

  return (
    <div className="App">
      <Navbar
        seatList={seatList}
        setSeatList={setSeatList}
        setBookedSeat={setBookedSeat}
        setIsLoading={setIsLoading}
      />
      <h2>Train Ticket Booking Application</h2>
      <Index  seatList={seatList} bookedSeat={bookedSeat} isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;
