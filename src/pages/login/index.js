import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Link } from "react-router-dom";

import Opener from "../../components/opener";
import Footer from "../../components/footer";

export const Login = (props) => {

  const {loggedIn } = props;
  if( loggedIn ){
    window.location = '/';
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    
    setEmailError('');
    setPasswordError('');


    // Email errors
    if( '' === email ){
      setEmailError('Please enter your email');
      return
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return
    }

    // Password Errors
    if( '' === password ){
      setPasswordError('Please enter your password');
    }

    if (password.length <= 7) {
      setPasswordError('Your password should be atleast 8 characters');
      return
    }
  }

  return (
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="container-fluid login py-5 pb-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 intro text-center d-flex justify-content-center align-items-center">
              <div>
                <img src="/dist/images/desktop-logo.png" alt="Reach Logo" title="Reach Logo" />
                <h1 className="h3">Effortlessly connect with anyone.</h1>
                <Link href="/register" className="btn btn-white mt-4">Need to register?</Link>
              </div>
            </div>

            <div className="col-12 col-md-7 offset-md-1 form d-flex align-items-center mt-5">
              <div className="d-lg-flex justify-content-between w-100">
                  <div className="form-floating mb-4 mb-lg-0 pe-lg-4 w-100 position-relative">
                    <input type="email" class="form-control" id="email" placeholder="name@reach.com" onChange={(ev) => setEmail(ev.target.value)} />
                    <label for="email">Email address</label>
                    <small className="errorLabel">{emailError}</small>
                  </div>

                  <div className="form-floating mb-4 mb-lg-0 pe-lg-4 w-100 position-relative">
                    <input type="password" class="form-control" id="password_field" placeholder="password" onChange={(ev) => setPassword(ev.target.value)} />
                    <label for="password_field">Password</label>
                    <small className="errorLabel">{passwordError}</small>
                  </div>

                  <div>
                    <input className="submit btn h-100 w-100" type="button" onClick={onButtonClick} value="Log In" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Opener />
      <Footer />
    </HelmetProvider>
  );
};
