import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {/* <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div> */}
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1500x700/?carservice"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1500x700/?bike"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1500x700/?tyre"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
