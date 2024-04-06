// DiscoverAvailableServicesContainer component

import React, { useEffect, useState } from "react";
import axios from "axios";
import ServicesCard from "../Common/ServicesCard";

const DiscoverAvailableServicesContainer = () => {
  const date = new Date();
  // increase the month by 1 because the month starts from 0
  date.setMonth(date.getMonth() + 1);

  // state varible islaoding to check if the data is loaded or not
  const [isLoading, setIsLoading] = useState(true);

  // Different state variables to store the data fetched from the api
  const [dayText, setDayText] = useState("");
  const [monthText, setMonthText] = useState("");
  const [yearText, setYearText] = useState("");

  const fetch = async () => {
    setIsLoading(true);

    // add 3 secs wait time to show the spinner
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // fetch data from the api
    await axios
      .get(`http://numbersapi.com/${date.getDate()}`)
      .then((response) => {
        setDayText(response.data);
      })
      .catch((error) => {
        setDayText("Error while retriving data.");
      });

    await axios
      .get(`http://numbersapi.com/${date.getMonth()}`)
      .then((response) => {
        setMonthText(response.data);
      })
      .catch((error) => {
        setMonthText("Error while retriving data.");
      });

    await axios
      .get(`http://numbersapi.com/${date.getFullYear()}`)
      .then((response) => {
        setYearText(response.data);
      })
      .catch((error) => {
        setYearText("Error while retriving data.");
      });

    setIsLoading(false);
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
          width: "100%",
          margin: "30px 19px 30px",
          backgroundSize: "cover",
          padding: "30px 26px",
          borderRadius: "25px",
          justifyContent: "space-evenly",
        }}
      >
        <ServicesCard
          isLoading={isLoading}
          title={date.getDate()}
          subtitle="Today's DAY"
          desc={dayText}
        />

        <ServicesCard
          isLoading={isLoading}
          title={date.getMonth()}
          subtitle="Today's Month"
          desc={monthText}
        />

        <ServicesCard
          isLoading={isLoading}
          title={date.getFullYear()}
          subtitle="Today's YEAR"
          desc={yearText}
        />
      </div>
    </>
  );
};

export default DiscoverAvailableServicesContainer;
