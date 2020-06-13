import React from "react";

const TouristInfoCards = () => {
  return (
    // <div className="infocards">
    //     <div className="each-info-card" >
    //         <img src="https://www.wallcoatingscotland.com/wp-content/uploads/2019/03/PeopleMakeGlasgow.jpg" ></img>
    //         <p></p>
    //     </div>

    //     <div className="each-info-card" >
    //         <img src="https://www.wallcoatingscotland.com/wp-content/uploads/2019/03/PeopleMakeGlasgow.jpg" ></img>
    //         <p></p>
    //     </div>

    //     <div className="each-info-card" >
    //         <img src="https://www.wallcoatingscotland.com/wp-content/uploads/2019/03/PeopleMakeGlasgow.jpg"></img>
    //         <p></p>
    //     </div>

    // </div>
    <div className="card-div">
      <div className="card">
        <img
          src="https://frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
          className="card-img-top"
          alt="picture glassgow"
        />
        <div className="card-body">
          <h5 className="card-title">Glassgow</h5>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Enter site
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://amagazine.co.uk/wp-content/uploads/2019/12/1858455_shutterstock_268385231_552936.jpg"
          className="card-img-top"
          alt="picture glassgow"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Enter site
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide.jpg"
          className="card-img-top"
          alt="picture glassgow"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <a href="visitlondon.com" className="btn btn-primary">
            Enter site
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
