import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta, dataportfolio, about } from "../../content_option";
import { Link } from "react-router-dom";

import Banner from "../../assets/images/home-main-update.png";
import Card from "../../components/Card";

export const Home = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Full Stack Developer</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <h1>Here's a wee title</h1>
    </HelmetProvider>
  );
};
