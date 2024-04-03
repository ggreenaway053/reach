import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="site__header container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand d-block d-lg-none" to="/"><img src="/dist/images/reach-button-logo.png" alt="Logo" title="Logo" /></Link>
          <Link className="navbar-brand d-none d-lg-block" to="/"><img src="/dist/images/desktop-logo.png" alt="Logo" title="Logo" /></Link>
        </div>
      </header>
    </>
  );
};

export default Header;
