import React from 'react';
import { Link } from 'react-router-dom';
import companyImg from '../Images/companyImg.png';
import Navbar from './Navbar';

const AboutUsPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container py-5">

        <div className="row">
          <div className="col-lg-6">
            <Link to="/Car">
              <img src={companyImg} alt="Company Image" className="img-fluid rounded" />
            </Link>
          </div>

          <div className="col-lg-6">
            <h2 className="mb-4">About Us</h2>
            <p className="lead">Continental Tyre Service is a leading provider of professional tyre services for all vehicle types.</p>
            <p>With over 20 years of experience in the industry, we are dedicated to delivering high-quality products and exceptional customer service to ensure a safe and smooth driving experience for our clients.</p>
            <p>Our team of certified technicians is committed to providing reliable tyre solutions, including tyre fitting, balancing, rotation, and alignment. We also offer a wide range of top-quality tyres from leading brands to suit every vehicle and budget.</p>
            <p>At Continental Tyre Service, customer satisfaction is our top priority. We strive to exceed expectations by offering personalized service, expert advice, and competitive pricing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
