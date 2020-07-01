import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(data => data.json())
      .then(data => setData(data));
  }, [props.id]);

  const [className, setClassName] = useState("");

  const onClickHandler = () => {
    setClassName("No");
  };

  const classNameChanger = () => {
    props.classNameChangerFunction(className);
  };

  return (
    <div>
      <h3>Customer Id: {data.id}</h3>
      <p>Customer Email: {data.email}</p>
      <p>Is VIP: {data.vip ? "Yes" : "No"}</p>
      <p>Customer Phone: {data.phoneNumber}</p>
      <button onClick={onClickHandler}>close</button>
    </div>
  );
};

export default CustomerProfile;
