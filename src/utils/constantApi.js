const BASE_URL = `http://localhost:5051`;

export const config = {
  host: BASE_URL,
  seats: {
    bookSeat: "/book/seats",
    getSeat: "/available/seats",
    resetSeat: "/reset/seats",
  },
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
