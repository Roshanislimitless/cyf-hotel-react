import React from "react";
import moment from "moment";
import SearchRows from "./SearchRows";

const SearchResults = props => {
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
    <table className="table">
      <thead>
        <tr>
          {Heading.map((any, index) => (
            <td key={index}>{any}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {props.results.map((data, index) => (
          <SearchRows key={index} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
