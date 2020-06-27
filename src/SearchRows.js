import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchRows = props => {
  const data = props.data;

  const [highlightedTr, toChangeColor] = useState(null);

  const changeColor = () => {
    highlightedTr === null ? toChangeColor("whiteRow") : toChangeColor(null);
  };

  const [id, setid] = useState(null);

  const ProfileHandler = () => {
    setid(data.id);
  };

  return (
    <div>
      <tr
        className={highlightedTr}
        onClick={changeColor} //onClick={clickCounter}
      >
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.firstName}</td>
        <td>{data.surname}</td>
        <td>{data.email}</td>
        <td>{data.roomId}</td>
        <td>{data.checkInDate}</td>
        <td>{data.checkOutDate}</td>
        <td>
          {moment(data.checkOutDate).diff(moment(data.checkInDate), "days")}
        </td>
        <button onClick={ProfileHandler}>show profile</button>
      </tr>
      {id ? <CustomerProfile id={id} /> : null}
    </div>
  );
};

export default SearchRows;
