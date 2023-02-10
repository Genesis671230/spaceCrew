import React, { useState } from "react";
import "./Destination.css";
import moonImage from "../assets/destination/image-moon.png";
import marsImage from "../assets/destination/image-mars.png";
import europeImage from "../assets/destination/image-europa.png";
import titanImage from "../assets/destination/image-titan.png";

const allPlanets = {
  MOON: {
    name: "MOON",
    planetImg: moonImage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 km",
    travelTime: "3 days",
  },
  MARS: {
    name: "MARS",
    planetImg: marsImage,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!.",
    avgDistance: "225 MIL. km",
    travelTime: "9 months",
  },
  EUROPE: {
    name: "EUROPE",
    planetImg: europeImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL. km",
    travelTime: "3 years",
  },
  TITAN: {
    name: "TITAN",
    planetImg: titanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL. km",
    travelTime: "7 years",
  },
};

const Destination = () => {
  const [planet, setPlanet] = useState("MOON");

  return (
    <div className="destination">
      <div>
        <div className="destinationTitle">
          <span className="destinationNumber">01</span>{" "}
          <span className="destinationHeader"> PICK YOUR DESTINATION</span>
        </div>

        <div className="destinationContainer">
          <div className="destinationImage">
            <img src={allPlanets[planet]?.planetImg} alt="" />
          </div>

          <div className="destinationDetails">
            <div className="dynamicNav">
              <div
                className="destinationType"
                onClick={() => setPlanet("MOON")}
                style={
                  allPlanets[planet]?.name === "MOON"
                    ? { borderBottom: "3px solid white",color:"white" }
                    : {}
                }
              >
                MOON
              </div>
              <div
                className="destinationType"
                onClick={() => setPlanet("MARS")}
                style={
                  allPlanets[planet]?.name === "MARS"
                    ? { borderBottom: "3px solid white",color:"white" }
                    : {}
                }
              >
                MARS
              </div>
              <div
                className="destinationType"
                onClick={() => setPlanet("EUROPE")}
                style={
                  allPlanets[planet]?.name === "EUROPE"
                    ? { borderBottom: "3px solid white",color:"white" }
                    : {}
                }
              >
                EUROPE
              </div>
              <div
                className="destinationType"
                onClick={() => setPlanet("TITAN")}
                style={
                  allPlanets[planet]?.name === "TITAN"
                    ? { borderBottom: "3px solid white",color:"white" }
                    : {}
                }
              >
                TITAN
              </div>
            </div>
            <div className="planetTitle">{allPlanets[planet]?.name}</div>
            <div className="planetDescription">
              {allPlanets[planet]?.description}
            </div>

            <div className="divider"></div>

            <div className="planetMetrics">
              <div className="planetDistance">
                <div>
                  <div className="distance">AVG. DISTANCE</div>
                  <div className="travelCount">
                    {" "}
                    {allPlanets[planet]?.avgDistance}{" "}
                  </div>
                </div>
              </div>
              <div className="planetTravelTime">
                <div>
                  <div className="distance">Travel time</div>
                  <div className="travelCount">
                    {allPlanets[planet]?.travelTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
