import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log("hello", bookings);

  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");
  console.log("searchValue", searchValue);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("something went wrong");
        }
      })
      .then(data => setBookings(data))
      .catch(e => setError(e.message));
  }, []);

  const filteredBookings = bookings.filter(
    booking =>
      booking.firstName === searchValue || booking.surname === searchValue
  );

  if (error) {
    return <p>{error}</p>;
  }
  if (bookings.length == 0) {
    return <p>Loading...</p>;
  }

  const handleSubmitBooking = booking => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="App-content">
      <div className="container">
        <BookingForm submitBooking={handleSubmitBooking} booking={bookings} />
        <Search search={setSearchValue} />
        <SearchResults results={searchValue ? filteredBookings : bookings} />
      </div>
    </div>
  );
};

export default Bookings;
