import React from "react";
import moment from "moment";

const SearchResults = prop => {
  const Heading = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "E-mail",
    "Room id",
    "Check In",
    "Check Out",
    "Total Nights"
  ];

  return (
    <table class="table">
      <thead>
        <tr>
          {Heading.map((any, index) => (
            <td key={index}>{any}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {prop.results.map((any, index) => (
          <tr>
            <td key={index}>{any.id}</td>
            <td key={index}>{any.title}</td>
            <td key={index}>{any.firstName}</td>
            <td key={index}>{any.surname}</td>
            <td key={index}>{any.email}</td>
            <td key={index}>{any.roomId}</td>
            <td key={index}>{any.checkInDate}</td>
            <td key={index}>{any.checkOutDate}</td>
            <td key={index}>
              {moment(any.checkOutDate).diff(moment(any.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
