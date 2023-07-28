import React from "react";
import BookSeat from "./BookSeatModal";
import SeatDetails from "./SeatDetails";

function Index({ seatList, setSeatList }) {
  return (
    <>
      <BookSeat setSeatList={setSeatList} />
      <SeatDetails seatList={seatList} />
    </>
  );
}

export default Index;
