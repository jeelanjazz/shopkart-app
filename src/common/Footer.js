import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="row text-center justify-content-center d-flex">
          <div className="col-md-5 mb-3">
            <h5 className="fw-bold mb-3">Shopkart</h5>
            <p>
              Your one-stop shop for all your fashion needs. Browse our wide
              range of products and enjoy the best shopping experience.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li>Phone: +91 1234567890</li>
              <li>
                Email:{" "}
                <a href="mailto:info@shopkart.com" className="text-white">
                  info@shopkart.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.facebook.com"
                className="text-white me-3 fs-3"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-white me-3 fs-3"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-white me-3 fs-3"
              >
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" className="text-white fs-3">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className="mb-0">&copy; 2024 Shopkart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
