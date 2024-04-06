// Placeholder for the FooterContainer component

import React from "react";
import Path13 from "../../assets/images/Path 13.png";

const FooterContainer = () => {
  return (
    <>
      <footer className="bg-light">
        <div className="grid container">
          <div className="row upper justify-content-between d-none d-md-flex">
            <div className="col mt-5">
              <h6>Services Hub</h6>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Home
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Getting Started
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Release Notes
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Give custom-feedback
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Documentation
                </a>
              </span>
            </div>
            <div className="col mt-5">
              <h6>Contract</h6>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Contract Details
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Manage Access
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Shared Files
                </a>
              </span>
            </div>
            <div className="col mt-5">
              <h6>Support</h6>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Contact Support
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Customer Pulse
                </a>
              </span>
            </div>
            <div className="col mt-5">
              <h6>Services</h6>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Catalog
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Plans
                </a>
              </span>
            </div>
            <div className="col mt-5">
              <h6>Health</h6>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Critical Alerts
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Product Updates
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Office 365 Roadmap
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Assessments
                </a>
              </span>
            </div>
            <div className="col mt-5">
              <h6>Learning</h6>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Learn-on-demand
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-decoration-none text-reset"
                >
                  Workshops
                </a>
              </span>
            </div>
          </div>
          <div className="lr row justify-content-between mt-3">
            <div className="col-12 col-sm-4 mt-3">
              <img src={Path13} alt="Current Culture" /> Current Culture: United
              States - English
            </div>
            <div
              className="col-12 col-sm-8 row mt-3"
              style={{ textAlign: "end" }}
            >
              <span className="col">
                <a
                  className="text-decoration-none text-reset"
                  href="#"
                >
                  Contact Us
                </a>
              </span>
              <span className="col">
                <a
                  className="text-decoration-none text-reset"
                  href="#"
                >
                  Privacy and Cookies
                </a>
              </span>
              <span className="col">
                <a
                  className="text-decoration-none text-reset"
                  href="#"
                >
                  Trademarks
                </a>
              </span>
              <span className="col">
                <a
                  className="text-decoration-none text-reset"
                  href="#"
                >
                  About our ads
                </a>
              </span>
              <span className="col">
                <a
                  className="text-decoration-none text-reset"
                  href="#"
                >
                  @Microsoft <span id="cy"> </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterContainer;
