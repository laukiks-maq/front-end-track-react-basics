// DiscoverAvailableServicesContainer component

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DiscoverAvailableServicesContainer = () => {
  const date = new Date();
  // increase the month by 1 because the month starts from 0
  date.setMonth(date.getMonth() + 1);

  const [text, setText] = useState({
    monthText: "",
    dayText: "",
    yearText: "",
  });

  const fetch = async () => {
    try {
      const dateData = await axios.get(
        `http://numbersapi.com/${date.getDate()}`
      );
      const monthData = await axios.get(
        `http://numbersapi.com/${date.getMonth()}`
      );
      const yearData = await axios.get(
        `http://numbersapi.com/${date.getFullYear()}`
      );

      const dt = dateData.data;
      const mt = monthData.data;
      const yt = yearData.data;
      setText({ dayText: dt, monthText: mt, yearText: yt });
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <p className="bh">Discover available services</p>

      <div
        className="row rect40"
        style={{
          margin: "19px",
          backgroundSize: "cover",
          padding: "30px 26px",
          borderRadius: "25px",
          justifyContent: "space-evenly",
        }}
      >
        <div className="col-md-3 bg-white rounded-3 mt-4 mb-4 pl-3 detail-card">
          <h1
            id="day"
            className="display-4"
            style={{
              font: "normal normal normal 75px/90px Lato",
              letterSpacing: "0px",
              color: "#885ef0",
              opacity: "1",
              textAlign: "left",
            }}
          >
            {date.getDate()}
          </h1>
          <h4
            style={{
              textAlign: "left",
              font: "normal normal bold 16px/18px Lato",
              letterSpacing: "0px",
              color: "#425656",
              opacity: "1",
            }}
          >
            Today's DAY
          </h4>
          <p
            id="dayText"
            className="lead"
            style={{
              textAlign: "left",
              font: "normal normal normal 16px/22px Lato",
              letterSpacing: "0px",
              color: "#425656",
              opacity: "1",
              marginTop: "20px",
            }}
          >
            {text.dayText}
          </p>
        </div>

        <div className="col-md-3 bg-white rounded-3 mt-4 mb-4 pl-3 detail-card">
          <h1
            id="month"
            className="display-4"
            style={{
              textAlign: "left",
              font: "normal normal normal 75px/90px Lato",
              letterSpacing: "0px",
              color: "#885ef0",
              opacity: "1",
            }}
          >
            {date.getMonth()}
          </h1>
          <h4
            style={{
              textAlign: "left",
              font: "normal normal bold 16px/18px Lato",
              letterSpacing: "0px",
              color: "#425656",
              opacity: "1",
            }}
          >
            Today's Month
          </h4>
          <p
            id="monthText"
            className="lead"
            style={{
              textAlign: "left",
              font: "normal normal normal 16px/22px Lato",
              letterSpacing: "0px",
              color: "#425656",
              opacity: "1",
              marginTop: "20px",
            }}
          >
            {text.monthText}
          </p>
        </div>

        <div className="col-md-3 bg-white rounded-3 mt-4 mb-4 pl-3 detail-card">
          <h1
            id="year"
            className="display-4"
            style={{
              font: "normal normal normal 75px/90px Lato",
              letterSpacing: "0px",
              color: "#885ef0",
              opacity: "1",
              textAlign: "left",
            }}
          >
            {date.getFullYear()}
          </h1>
          <h4
            style={{
              textAlign: "left",
              font: "normal normal bold 16px/18px Lato",
              letterSpacing: "0px",
              color: "#425656",
              opacity: "1",
            }}
          >
            Today's YEAR
          </h4>
          <p
            id="yearText"
            className="lead"
            style={{
              textAlign: "left",
              font: "normal normal normal 16px/22px Lato",
              letterSpacing: "0px",
              color: "#425656",
              opacity: "1",
              marginTop: "20px",
            }}
          >
            {text.yearText}
          </p>
        </div>
      </div>
    </>
  );
};

export default DiscoverAvailableServicesContainer;
