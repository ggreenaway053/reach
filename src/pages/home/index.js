import React from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

export const Home = (props) => {

  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
  }

  // IF NOT LOGGED IN, WE NEED TO REDIRECT TO THE LOGIN PAGE ;)
  if( !loggedIn ){
    window.location = '/login';
  }

  return (
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="container-fluid login py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 intro text-center d-flex align-items-center">
              <div>
                <img src="/dist/images/desktop-logo.png" alt="Reach Logo" title="Reach Logo" />
                <h1 className="h3">Home page :)</h1>
              </div>
            </div>

          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
