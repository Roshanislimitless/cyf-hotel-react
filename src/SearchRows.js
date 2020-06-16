import React from "react";
import moment from "moment";

const SearchRows = props => {
  const data = props.data;
  return (
    <tr>
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
    </tr>
  );
};

export default SearchRows;
