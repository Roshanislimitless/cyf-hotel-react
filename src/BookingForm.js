import React, { useState } from "react";

const BookingForm = props => {
  const [bookingData, setBookingData] = useState({
    id: "",
    firstName: "",
    surname: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const initialValue = {
    firstName: "",
    surname: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  };
  const [newId, setNewId] = useState("");

  const handleOnChange = event => {
    const updateBookingData = {
      ...bookingData,
      [event.target.name]: event.target.value,
      id: newId
    };
    setBookingData(updateBookingData);

    const Bookings = props.booking;
    setNewId(Bookings[Bookings.length - 1].id + 1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.submitBooking(bookingData);
    setBookingData(initialValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={bookingData.firstName}
        onChange={handleOnChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="surname"
        value={bookingData.surname}
        onChange={handleOnChange}
        placeholder="Surname"
      />
      <input
        type="text"
        name="title"
        value={bookingData.title}
        onChange={handleOnChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="roomId"
        value={bookingData.roomId}
        onChange={handleOnChange}
        placeholder="roomId"
      />
      <input
        type="date"
        name="checkInDate"
        value={bookingData.checkInDate}
        onChange={handleOnChange}
        placeholder="checkInDate"
      />
      <input
        type="date"
        name="checkOutDate"
        value={bookingData.checkOutDate}
        onChange={handleOnChange}
        placeholder="checkOutDate"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
