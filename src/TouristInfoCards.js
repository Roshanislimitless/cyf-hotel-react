import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = props => {
  return (
    <div className="card-container">
      <TouristInfoCard
        imageSrc="https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        cityName="Glassgow"
        linkUrl="http://peoplemakeglasgow.com"
      />
      <TouristInfoCard
        imageSrc="https://images.pexels.com/photos/396036/pexels-photo-396036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        cityName="Manchester"
        linkUrl="http://visitmanchester.com"
      />
      <TouristInfoCard
        imageSrc="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        cityName="London"
        linkUrl="http://visitlondon.com"
      />
      <TouristInfoCard
        imageSrc="https://blog.laterooms.com/wp-content/uploads/2017/01/iStock-171572347.jpg"
        cityName="Liverpool"
        linkUrl="http://visitliverpool.com"
      />
    </div>
  );
};

export default TouristInfoCards;
