// Placeholder for the RecommendedServicesContainer component

import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import Button from "../Common/Button";

const RecommendedServicesContainer = () => {
  return (
    <>
      <div className="container">
        <div className="mt-1 pt-5">
          <p className="bh">Explore recommended services for you</p>
        </div>

        <div className="px-2">
          <p className="bottom-text p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="container">
          <div className="row mb-4" style={{ rowGap: "20px" }}>
            <div className="col-md-6">
              <div className="position-relative">
                <img
                  src={image1}
                  className="img-fluid"
                  alt="Background Image"
                />
                <div className="ot">
                  <div>
                    <h1 className="fh">Questions?</h1>
                    <p className="fp">
                      Learn about our services through frequently asked
                    </p>
                    {
                      /* Button with props, redirects to # on click */
                      <Button
                        text="View FAQs"
                        onClick={() => (window.location.href = "#")}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative">
                <img
                  src={image2}
                  className="img-fluid"
                  alt="Background Image"
                />
                <div className="ot">
                  <div className="fontz">
                    <h1 className="fh">Stay up to date</h1>
                    <p className="fp">Learn about our product updates</p>
                    {
                      /* Button with props, redirects to # on click */
                      <Button
                        text="View FAQs"
                        onClick={() => (window.location.href = "#")}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedServicesContainer;
