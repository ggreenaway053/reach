import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

import Opener from "../../components/opener";
import Footer from "../../components/footer";

export const Login = (props) => {

  setTimeout(function(){
    if( props.loggedIn === true ){
      window.location = '/';
    }
  }, 100);

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    
    // general validations
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

    // check if an email account already exists. if not, then offer to create an account!
    checkAccountExists((accountExists) => {
      // If yes, log in
      if (accountExists) logIn()
      // Else, ask user if they want to create a new account and if yes, then log in
      else if (
        window.confirm(
          'An account does not exist with this email address: ' + email + '. Do you want to create a new account?',
        )
      ) {
        logIn()
      }
    })
  }

  // Call the server API to check if the given email ID already exists
  const checkAccountExists = (callback) => {
    fetch('http://localhost:3080/check-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((r) => {
        callback(r?.userExists)
      })
  }

  // Log in a user using email and password
  const logIn = () => {
    fetch('http://localhost:3080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((r) => {
        if ('success' === r.message) {
          localStorage.setItem('user', JSON.stringify({ email, name: r.name, token: r.token }))
          props.setLoggedIn(true)
          props.setEmail(email)
          props.setFirstName(r.name)
          navigate('/')
        } else {
          window.alert('Wrong email or password')
        }
      })
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
                <a href="/register" className="btn btn-white mt-4">Need to register?</a>
              </div>
            </div>

            <div className="col-12 col-md-7 offset-md-1 form d-flex align-items-center mt-5">
              <div className="d-lg-flex justify-content-between w-100">
                  <div className="form-floating mb-4 mb-lg-0 pe-lg-4 w-100 position-relative">
                    <input type="email" className="form-control" id="email" placeholder="name@reach.com" onChange={(ev) => setEmail(ev.target.value)} />
                    <label htmlFor="email">Email address</label>
                    <small className="errorLabel">{emailError}</small>
                  </div>

                  <div className="form-floating mb-4 mb-lg-0 pe-lg-4 w-100 position-relative">
                    <input type="password" className="form-control" id="password_field" placeholder="password" onChange={(ev) => setPassword(ev.target.value)} />
                    <label htmlFor="password_field">Password</label>
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
