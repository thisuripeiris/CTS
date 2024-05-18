import React from "react";

export default function Carousal() {
  const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "20px", // Increased padding for better visibility
    textAlign: "left", // Align text to the left
    fontSize: "2.5rem", // Increased font size for a big caption
    position: "absolute", // Position the caption absolutely
    top: "50%", // Position the caption vertically at 50% from the top
    left: "5%", // Align caption to the left
    transform: "translateY(-50%)", // Center the caption vertically
    width: "30%", // Set width to 30% for left aside position
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1500x700/?mechanic"
              className="d-block w-100"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block" style={captionStyle}>
              <h5>Welcome to Continental Tyre Service</h5>
              <p>Professional mechanic services for all vehicle types.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1500x700/?car"
              className="d-block w-100"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block" style={captionStyle}>
              <h5>Expert Car Services</h5>
              <p>Reliable and efficient car services tailored to your needs.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1500x700/?tyre"
              className="d-block w-100"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block" style={captionStyle}>
              <h5>Premium Tyre Solutions</h5>
              <p>Top-quality tyres for a smooth and safe ride.</p>
            </div>
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
