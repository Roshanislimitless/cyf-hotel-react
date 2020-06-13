import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul className="footer-ul">
        {props.footerArray.map((any, index) => {
          return <li key={index}>{any}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
