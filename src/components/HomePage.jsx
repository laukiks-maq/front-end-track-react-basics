// Base container that will return 4 components:
// HeaderContainer
// DiscoverAvailableServicesContainer
// RecommendedServicesContainer
// FooterContainer

import React from "react";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import DiscoverAvailableServicesContainer from "./DiscoverAvailableServicesContainer/DiscoverAvailableServicesContainer";
import RecommendedServicesContainer from "./RecommendedServicesContainer/RecommendedServicesContainer";
import FooterContainer from "./FooterContainer/FooterContainer";

const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <DiscoverAvailableServicesContainer />
      <RecommendedServicesContainer />
      <FooterContainer />
    </>
  );
};

export default HomePage;
