// Card to desplay available services

import React from "react";
import Spinner from "../Common/Spinner";
import PropTypes from "prop-types";

const ServicesCard = ({ isLoading, title, subtitle, desc }) => {
  return (
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
        {title}
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
        {subtitle}
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
        {isLoading ? <Spinner /> : desc}
      </p>
    </div>
  );
};

ServicesCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default ServicesCard;