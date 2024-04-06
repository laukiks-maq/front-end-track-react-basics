// DiscoverAvailableServicesContainer component

import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Common/Spinner";
import ServicesCard from "../Common/ServicesCard";

const DiscoverAvailableServicesContainer = () => {
  const date = new Date();
  // increase the month by 1 because the month starts from 0
  date.setMonth(date.getMonth() + 1);

  // state varible islaoding to check if the data is loaded or not
  const [isLoading, setIsLoading] = useState(true);

  const [text, setText] = useState({
    monthText: "",
    dayText: "",
    yearText: "",
  });

  const fetch = async () => {
    // setIsLoading(true);
    try {
      // add 3 secs wait time to show the spinner
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // fetch data from the api
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
      setIsLoading(false);
    } catch (error) {
      const dt = "Error while retriving data.";
      const mt = "Error while retriving data.";
      const yt = "Error while retriving data.";
      setText({ dayText: dt, monthText: mt, yearText: yt });
      setIsLoading(false);
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
        <ServicesCard
          isLoading={isLoading}
          title={date.getDate()}
          subtitle="Today's DAY"
          desc={text.dayText}
        />

        <ServicesCard
          isLoading={isLoading}
          title={date.getMonth()}
          subtitle="Today's Month"
          desc={text.monthText}
        />

        <ServicesCard
          isLoading={isLoading}
          title={date.getFullYear()}
          subtitle="Today's YEAR"
          desc={text.yearText}
        />
      </div>
    </>
  );
};

export default DiscoverAvailableServicesContainer;
