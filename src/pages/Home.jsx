import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="leftContainer">
          <div className="homeTopPara">SO, YOU WANT TO TRAVEL TO</div>
          <div className="homeHeading">SPACE</div>
          <div className="homePara">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="rightExplore">EXPLORE</div>
      </div>
    </div>
  );
};

export default Home;
