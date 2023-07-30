import React from "react";
import BookSeat from "./BookSeatModal";
import SeatDetails from "./SeatDetails";

function Index({ seatList,bookedSeat }) {
  return (
    <React.Fragment>
      <BookSeat />
      <SeatDetails seatList={seatList} bookedSeat={bookedSeat}/>
    </React.Fragment>
  );
}

export default Index;
