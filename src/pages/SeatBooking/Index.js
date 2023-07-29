import React from "react";
import BookSeat from "./BookSeatModal";
import SeatDetails from "./SeatDetails";

function Index({ seatList,bookedSeat }) {
  return (
    <>
      <BookSeat />
      <SeatDetails seatList={seatList} bookedSeat = {bookedSeat} />
    </>
  );
}

export default Index;
