import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {  
  return (
    <footer className="container-fluid py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="mb-0 small">made with ❤️ by <a href="https://garethgreenaway.co.uk" target="_blank">gareth greenaway</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
