// HeaderContainer Component

import React from "react";
import images2x from "../../assets/images/images@2x.png";
import Group51 from "../../assets/images/Group 51.svg";

const HeaderContainer = () => {
  return (
    <>
      <div class="CarousalCard">
        <div class="firstCardRectangle38">
          <nav
            class="navbar navbar-expand-md"
            style={{ zIndex: 2, width: "95%" }}
          >
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <a
                class="nav-link"
                style={{ color: "white !important" }}
                href="#"
              >
                <img src={Group51} />
              </a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-1">
                  <li
                    class="nav-item"
                    style={{ color: "white !important", fontSize: "14px" }}
                  >
                    <a
                      class="nav-link"
                      style={{ color: "white !important" }}
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li
                    class="nav-item"
                    style={{ color: "white !important", fontSize: "14px" }}
                  >
                    <a
                      class="nav-link"
                      style={{ color: "white !important" }}
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li
                    class="nav-item"
                    style={{ color: "white !important", fontSize: "14px" }}
                  >
                    <a
                      class="nav-link"
                      style={{ color: "white !important" }}
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                  <li
                    class="nav-item"
                    style={{ color: "white !important", fontSize: "14px" }}
                  >
                    <a
                      class="nav-link"
                      style={{ color: "white !important" }}
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <form class="d-flex mx-auto">
                  <div class="input-group" style={{ width: "85%" }}>
                    <input
                      type="text"
                      class="form-control"
                      id="search"
                      name="search"
                      placeholder="Search"
                      aria-describedby="search-icon"
                      style={{ border: "none", margin: "0" }}
                    />
                    <button
                      class=""
                      type="submit"
                      id="search-icon"
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        height: "38px",
                        width: "40px",
                        borderTopRightRadius: "10%",
                        borderBottomRightRadius: "10%",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 20 20"
                        height="20"
                        viewBox="0 0 20 20"
                        width="24"
                        focusable="false"
                        style={{
                          pointerEvents: "none",
                          display: "block",
                          width: "100%",
                          height: "9 0%",
                        }}
                      >
                        <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                      </svg>
                    </button>
                  </div>
                </form>
                <div class="d-flex gap-2">
                  <div class="ProfileImgBg">
                    <img
                      id="imageId"
                      src={images2x}
                      alt="Ellipse Icon"
                      class="ProfileImg"
                    />
                  </div>
                  <select
                    id="person-select"
                    style={{ width: "100px", borderRadius: "10px" }}
                  >
                    <option class="changeImage" value="images@2x">
                      Daniel
                    </option>
                  </select>
                </div>
              </div>
              <div class="im">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 20 20"
                  height="20"
                  viewBox="0 0 20 20"
                  width="24"
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "100%",
                    height: "90%",
                  }}
                >
                  <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                </svg>
              </div>
            </div>
          </nav>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
            data-interval="false"
            style={{ marginTop: "-50px" }}
          >
            <ol class="carousel-indicators" style={{ color: "transparent" }}>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div
                  class="flexbox_custom"
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <div
                    class="flexbox_custom"
                    style={{
                      gap: "50px",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div
                      class="flexbox_custom"
                      style={{
                        width: "80%",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      <div
                        class="flexbox_custom"
                        id="carousel_data"
                        style={{
                          flexDirection: "column",
                          width: "300px",
                          justifyContent: "end",
                          height: "265px",
                          color: "white",
                          gap: "10px",
                        }}
                      >
                        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                          Carousel 1
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sit amet ultrices erat.
                        </div>
                        <div class="flexbox_custom">
                          <button
                            style={{
                              backgroundColor: "#885ef0",
                              border: "none",
                              color: "white",
                              padding: "10px",
                              width: "100px",
                            }}
                          >
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div
                  class="flexbox_custom"
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    height: "500px",
                  }}
                >
                  <div
                    class="flexbox_custom"
                    style={{
                      gap: "50px",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div
                      class="flexbox_custom"
                      style={{
                        width: "80%",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      <div
                        class="flexbox_custom"
                        id="carousel_data"
                        style={{
                          flexDirection: "column",
                          width: "300px",
                          justifyContent: "end",
                          height: "265px",
                          color: "white",
                          gap: "10px",
                        }}
                      >
                        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                          Carousel 2
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sit amet ultrices erat.
                        </div>
                        <div class="flexbox_custom">
                          <button
                            style={{
                              backgroundColor: "#885ef0",
                              border: "none",
                              color: "white",
                              padding: "10px",
                              width: "100px",
                            }}
                          >
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div
                  class="flexbox_custom"
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    height: "500px",
                  }}
                >
                  <div
                    class="flexbox_custom"
                    style={{
                      gap: "50px",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div
                      class="flexbox_custom"
                      style={{
                        width: "80%",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      <div
                        class="flexbox_custom"
                        id="carousel_data"
                        style={{
                          flexDirection: "column",
                          width: "300px",
                          justifyContent: "end",
                          height: "265px",
                          color: "white",
                          gap: "10px",
                        }}
                      >
                        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                          Carousel 3
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sit amet ultrices erat.
                        </div>
                        <div class="flexbox_custom">
                          <button
                            style={{
                              backgroundColor: "#885ef0",
                              border: "none",
                              color: "white",
                              padding: "10px",
                              width: "100px",
                            }}
                          >
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContainer;
