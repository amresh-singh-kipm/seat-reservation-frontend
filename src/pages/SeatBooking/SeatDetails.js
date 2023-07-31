import Loader from "../../components/Loader/Loader";
import { config } from "../../utils/constantApi";
import "./seatBooking.css";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line

function SeatDetails({ seatList, bookedSeat, isLoading, setIsLoading }) {
  // eslint-disable-next-line

  //state to display seat
  const [seatDetail, setSeatDetail] = useState();

  //variable to display number of seat in row

  let seatContain = 1;

  //function to display seats
  function seatBookStatus() {
    setIsLoading(true);
    return fetch(`${config.host}${config.seats.getSeat}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setSeatDetail(resp.seats);
        setIsLoading(false);
      })
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
      {isLoading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        seatDetail?.seatInRow?.map((seat, index) => {
          return (
            <ul className="seat-row" key={index}>
              <li className="row-number">{seatContain} - {seatContain+(seatDetail.seatInRow.length-1===index ? 2:6)}</li>
              {seat?.map((seats, index) => {
                return seats.status ? (
                  <li className="seats" key={index}>
                    <img
                      src="/assets/images/reserve seat.png"
                      alt="booked"
                      title={seats.seatNumber}
                    />
                  </li>
                ) : (
                  <li className="seats" key={index}>
                    <img
                      src="/assets/images/available seat.jpeg"
                      title={seats.seatNumber}
                      alt="available"
                    />
                  </li>
                );
              })}
              <div style={{display:"none"}}>
              {(seatContain = seatContain+seat.length)}
              </div>
            </ul>
          );
        })
      )}
    </div>
  );
}

export default SeatDetails;
