import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card">
      <img src={props.imageSrc} className="card-img-top" alt={props.cityName} />
      <div className="card-body">
        <h5 className="card-title">{props.cityName}</h5>
        <a href={props.linkUrl} className="btn btn-primary">
          Enter site
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
