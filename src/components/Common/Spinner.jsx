import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <BallTriangle
      height={40}
      width={40}
      radius={5}
      color="#282c34"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
