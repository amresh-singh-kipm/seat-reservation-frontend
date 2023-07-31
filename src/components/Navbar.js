import './Navbar.css'
import React, { useState } from "react";
import BookSeat from "../pages/SeatBooking/BookSeatModal";
import { config } from "../utils/constantApi";

function Navbar({seatList, setSeatList,setBookedSeat,setIsLoading }) {

  //state to open and close model
  const [openModal, setOpenModal] = useState(false);

  //function to reset seat staus
  const resetAll = () => {
    setIsLoading(true)
    fetch(`${config.host}${config.seats.resetSeat}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setSeatList(!seatList);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  };
  const modelOpen = ()=>{
    setOpenModal(true)
    setBookedSeat("")
  }
  return (
    <div className="fliud-container">
      <nav className="custom-navbar">
        <div className="navbar-heading">
          <h3 className="heading">
            Train<b>Ticket</b>
          </h3>
        </div>
        <ul className="nav-link-section">
          <li className="custom-nav-link" onClick={() =>modelOpen() }>
            Book
          </li>
          <li className="custom-nav-link" onClick={resetAll}>
            ResetSeat
          </li>
          {/* Modal to take input to book seat */}
          <BookSeat openModal={openModal} seatList={seatList} setOpenModal={setOpenModal} setSeatList={setSeatList} setBookedSeat={setBookedSeat}/>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
