import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log("hello", bookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    setBookings(
      bookings.filter(single => {
        return (
          single.firstName.includes(searchVal) ||
          single.surname.includes(searchVal)
        );
      })
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
