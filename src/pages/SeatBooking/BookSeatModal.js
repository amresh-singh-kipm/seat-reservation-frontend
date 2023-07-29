import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { config } from "../../utils/constantApi";

function BookSeat({ openModal, setOpenModal, seatList, setSeatList,setBookedSeat }) {
  const [seat, setSeat] = useState({ book: "" });
  
  // function to book seats
  const bookTicket = (e, seat) => {
    e.preventDefault();
    console.log(seat);
    fetch(`${config.host}${config.seats.bookSeat}/:available`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(seat),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status === "SUCCESS") {
          setBookedSeat(resp.bookedSeat)
          setOpenModal(false);
          setSeat({ book: "" });
          setSeatList(!seatList);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(seat);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSeat({ ...seat, [name]: value });
  };

  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
      <div className="seat-form">
        <div className="seat-form-content">
          <h3 className="seat-form-content-title">Book Seat</h3>
          <form className="form-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="book">Seat</label>
                  <input
                    type="text"
                    name="book"
                    id="book"
                    value={seat.book}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter the amount of seat"
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="d-grid mt-4 submitbtn">
                  <button className="btn" onClick={(e) => bookTicket(e, seat)}>
                    Book
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default BookSeat;
