import React, { useState } from "react";
import BookSeat from "../pages/SeatBooking/BookSeatModal";
import { config } from "../utils/constantApi";

function Navbar({seatList, setSeatList,setBookedSeat }) {
  const [openModal, setOpenModal] = useState(false);
  const resetAll = () => {
    fetch(`${config.host}${config.seats.resetSeat}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setSeatList(!seatList);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <nav className="custom-navbar">
        <div className="navbar-heading">
          <h3 className="heading">
            Train<b>Ticket</b>
          </h3>
        </div>
        <ul className="nav-link-section">
          {/* <li className="custom-nav-link">Home</li> */}
          <li className="custom-nav-link" onClick={() => setOpenModal(true)}>
            Book
          </li>
          <li className="custom-nav-link" onClick={resetAll}>
            ResetSeat
          </li>
          <BookSeat openModal={openModal} seatList={seatList} setOpenModal={setOpenModal} setSeatList={setSeatList} setBookedSeat={setBookedSeat}/>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
