const BASE_URL = `https://fuzzy-gray-goat.cyclic.app/api`;
// const BASE_URL = 'http://localhost:5050/api'

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
