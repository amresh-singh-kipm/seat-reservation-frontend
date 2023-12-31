import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { config } from "../../utils/constantApi";
import Loader from "../../components/Loader/Loader";

function BookSeat({
  openModal,
  setOpenModal,
  seatList,
  setSeatList,
  setBookedSeat,
}) {
  //state to input to book seats
  const [seat, setSeat] = useState({ book: "" });

  //state to display error
  const [error, setError] = useState("");

  //state to display loader
  const [isLoading, setIsLoading] = useState(false);

  // function to book seats
  const bookTicket = (e, seat) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(`${config.host}${config.seats.bookSeat}/:available`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(seat),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status === "SUCCESS") {
          //storing data of booked seats
          setBookedSeat(resp.bookedSeat);
          setIsLoading(false);
          //closing modal after successfully seat booking
          closeModal();
          setSeatList(!seatList);
        } else {
          setError(resp.message);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  //function to close modal
  const closeModal = () => {
    setOpenModal(false);
    setSeat({ book: "" });
    setError("");
  };
  //input onchange function
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSeat({ ...seat, [name]: value });
  };

  return (
    <Modal show={openModal} onHide={() => closeModal()}>
      <div className="seat-form">
        {isLoading ? (
          <div className="modal-loader">
            <Loader />
          </div>
        ) : (
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
                  <div className="d-grid mt-4">
                    {error && (
                      <span
                        className="alert alert-danger "
                        style={{ fontSize: "15px", textAlign: "center" }}
                      >
                        {error}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="d-grid mt-4 submitbtn">
                    <button
                      className="btn"
                      onClick={(e) => bookTicket(e, seat)}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default BookSeat;
