import React from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

export const Home = (props) => {

  // morning, afternoon, evening
  let message;
  var date = new Date();
  var hours = date.getHours();
  if (hours < 12) {
    message = "🌅 Morning";
  } else if (hours < 18) {
    message = "👋 Afternoon";
  } else {
    message = "🥱 Evening";
  }
  const navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem('user')
    props.setLoggedIn(false);

    navigate('/login');
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
            <div className="col-12 col-lg-4 contactList">
              <div>
                <h1 className="h3">{message}, {props.firstName}!</h1>
                {props.loggedIn ? <input className="btn btn-white" type="button" onClick={onLogout} value="Log Out" /> : <div />}
              </div>
            </div>

          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
