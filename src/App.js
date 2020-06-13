import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./heading";
import TouristInfoCards from "./touristInfo";
import Footer from "./footer";

let array = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer footerArray={array} />
    </div>
  );
};

export default App;
