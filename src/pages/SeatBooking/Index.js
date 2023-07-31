import React from "react";
import BookSeat from "./BookSeatModal";
import SeatDetails from "./SeatDetails";

function Index({ seatList, bookedSeat, isLoading, setIsLoading }) {
  return (
    <React.Fragment>
      <BookSeat />
      <SeatDetails
        seatList={seatList}
        bookedSeat={bookedSeat}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </React.Fragment>
  );
}

export default Index;
