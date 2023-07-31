// const BASE_URL = `https://fuzzy-gray-goat.cyclic.app/api`;
// const BASE_URL = 'http://localhost:5050/api'
const BASE_URL = `https://seat-reservation-backend-production-92f6.up.railway.app/api`

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


