import { config } from "../../utils/constantApi";
import "./seatBooking.css";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line

function SeatDetails({ seatList, bookedSeat }) {
  // eslint-disable-next-line

  //state to display seat
  const [seatDetail, setSeatDetail] = useState();

  //function to display seats
  function seatBookStatus() {
    return fetch(`${config.host}${config.seats.getSeat}`)
      .then((resp) => resp.json())
      .then((resp) => setSeatDetail(resp.seats))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    seatBookStatus();

    // eslint-disable-next-line
  }, [seatList]);

  return (
    <div className="coach">
      {/* showing booked seat number if user book any seat */}
      {bookedSeat ? (
        <ul className="booked-seat-wrapper">
          <li className="booked-seat">Booked seat are:</li>
          {bookedSeat &&
            bookedSeat.map((seat, index) => {
              return (
                <li key={index} className="booked-seat">
                  {seat.seatNumber}
                </li>
              );
            })}
        </ul>
      ) : null}

      {/*displaying seat status  */}
      {seatDetail?.seatInRow?.map((seat, index) => {
        return (
          <ul className="seat-row" key={index}>
            {seat?.map((seats, index) => {
              return seats.status ? (
                <li className="seats" key={index}>
                  <img src="/assets/images/reserve seat.png" alt="booked" />
                </li>
              ) : (
                <li className="seats" key={index}>
                  <img
                    src="/assets/images/available seat.jpeg"
                    alt="available"
                  />
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default SeatDetails;
