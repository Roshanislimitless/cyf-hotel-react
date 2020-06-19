import React, { useState } from "react";
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
  const [backgroundColor, toChangeColor] = useState("blackRow");

  const changeColor = () => {
    if (backgroundColor === "blackRow") {
      toChangeColor("whiteRow");
    } else {
      toChangeColor("blackRow");
    }
  };

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
          <SearchRows
            name={backgroundColor}
            color={changeColor}
            key={index}
            data={data}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
