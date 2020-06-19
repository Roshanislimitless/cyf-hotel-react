import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./footer";
import Restaurant from "./Restaurant.js";
import { useState } from "react";

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
      <Restaurant />
      <Footer footerArray={array} />
    </div>
  );
};

export default App;
