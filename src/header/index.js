import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socials } from "../content_option";
import Themetoggle from "../components/themetoggle";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const today = new Date();

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">{logotext}</Link>

          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opened" : ""}`}>
          <div className="bg__menu h-100 container-fluid">
            <div className="h-100 row">
              <div className="col-12 col-lg-6 offset-lg-3 p-3 d-flex align-items-center justify-content-center">
                <ul className="menu__container w-100 p-0 m-0">
                  <li className="menu_item my-3">
                    <Link onClick={handleToggle} to="/">Home</Link>
                  </li>
                  <li className="menu_item my-3">
                    <Link onClick={handleToggle} to="/work">Recent Work</Link>
                  </li>
                  <li className="menu_item my-3">
                    <Link onClick={handleToggle} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu_footer d-flex justify-content-between align-items-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socials.github} className="me-2"><FaGithub /></a>
              <a href={socials.youtube} className="me-2"><FaYoutube /></a>
              <a href={socials.linkedin}><FaLinkedin /></a>
            </div>
            <p className="m-0">&copy; {today.getFullYear()} | {logotext}</p>
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
