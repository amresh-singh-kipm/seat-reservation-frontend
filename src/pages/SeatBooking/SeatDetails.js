import { config } from "../../utils/constantApi";
import "./seatBooking.css";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line

function SeatDetails({ seatList, bookedSeat }) {
  // eslint-disable-next-line
  const [seatDetail, setSeatDetail] = useState();
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

      {seatDetail?.seatInRow?.map((seat, index) => {
        return (
          <ul className="seat-row" key={index}>
            {seat?.map((seats, index) => {
              return seats.status ? (
                <li className="seats" key={index}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAZlBMVEX///8BAQEAAAD7+/v39/c1NTWAgICrq6vx8fF2dnbq6ur09PTFxcXk5ORRUVHBwcGcnJzd3d1CQkJMTEy1tbU6OjpnZ2eWlpZfX1+JiYnMzMykpKRXV1cSEhIZGRlsbGwsLCwjIyMuCrJzAAAE50lEQVR4nO2biZKiMBCGoRFEPFE8QER8/5fcHKhpDIdTpDNTm7+2dixra/z36yR9BD3PycnJycmJXEGcJEvbJt5K5vfN/ng8lFExs+2Fa3uCt27ntW0/qfDjg+/zv9jL6mqX04rbQQIoY4uGdpLPm5HgtE+tGco+CElMe1uUClDQKC8ALoEdR3sdILmWrlYM7bQhk5YqG4dAXLeCpbwAOFtwlImP74ybhVPpInDoGTFHBbmhOOwmxCFF5I6KG3SvI35ykzvKuneaYHQgX0gZ9DM6JtSO5gOM6B0NRY0+t20HorYhT23po5/RndqQzLM9jOb0jvK+hQRAvrA9by0K7C5GJ3pDnnfvhMSsbm04St+ldYuRJUSed+6AxBBZqv2DhcaSqNdWdgx53nKv6Y6Yo50tQ8ySpAQ4ZJk9QyxwZ//pSRa5rH+krx6x0juoqi1G7KU03z/kYKQuM5s9v6p0m83n28JC5vhrCn7R3M/zZtsF3/iP3PZOe2pVvnbbwvrcj+sMr0mSzRyCDKHcb6UUUbVFozaeaokDFyyXqM9YHlvFJNA2/cn1FIalOrb+7NxIIWUyYUD1nuuVn40b4UCrmc6CUgQlmrENbKgMpVVTR3NLzSYvKg2jkOr4zuG9VJ7VfXHTMHoQFdoBWsNNk6hrt8nqyARQIy0/la0jTQdJNNBO8UF4ke8eND0SLGgcxZhRM7Ra6BgdiYY1Ne465G6b6xgB0WbLcW+WizdTHSOqrnaLN1st3ox1zTbV/Cg5Ih5y/89KzdiGammzHIZAyD0e6RhRTdjxKm6O7atuIEE1PV7jqIWi6ljponYjagECfBzKUVpiM4+IGl+5t5bFYqgbSFKVSKvWaEa8edct7QuRo2XdVGzqQXjVMQIiR95F2Vjsc0UlWWhv/amKtkxlxPY/z6jJTceIqpFc40QirtFjbUFCNduaXdAzInL/RzpGZHc1eIot85dusg0l1b1ogR35/L2VzlFN1kZWoEZNXOw/C3AUNbhHPbpO6HeBz0hxNms6JB8GdJmsqFsBInLhy6X8ZPRZV6IXPBlPdT6sHxgSx7/rvSLVi1maKHLBXWXkiyRf6B4f62MkpzpTFZqt/c9Tanrrv2zvgAQTDeTXaB1BHYtT+3tG7M9UKwlP+cSv1RUkIyBNVdZFOGx8/+c/cTRdD7XC6/gQyE7u66hN91QAa9sQe76Jf7Cyp+wz74DWJ2/bXo+PWmHEylj0P+X7P+i+/qdgFIOvEJFtWxANZjIAMMXIayUS+YuLKBxjyQgjdmyjhfF6biUYUgyGGLVKNDiM7fJjU4zi1lO+7PQdl8eNORJtmxI1pvC0+FSUteaRxqIm2zZMqUNX5Mkco7h9HnYegrgIMsco2Iw8DwFfJJlj9Mwag4yYpUop8c0xao1t+jEp/bZBRrPjWEZoSmqQkXcaz6hWHRljxGo0fyyjg+rIHKNkdPXR3FY0jswxwt12nyH1mX+jjgql2OmJGr5rMxk1MRAdwiQSnjqQNMqIJbdqRIV2QoWKWUasu72e9mGfDnmrazXMiCmY9erjbtQ0o+9lntH3jhyjv+jot0Vthgc91p9488Sc+cXIt/WsO5Lohp+IDpa+U4q0Dl9djKVvTHzo+awi+5EP/2sSFXuZgis7X7rVKZlvfP+4+w2r2snJycnJycnJyem/1D8H/jRhFrUi/gAAAABJRU5ErkJggg=="
                    alt="booked"
                    width="150px"
                  />
                </li>
              ) : (
                <li className="seats" key={index}>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="available"
                    width="150px"
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
