import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

import Opener from "../../components/opener";
import Footer from "../../components/footer";

export const Register = (props) => {

  // VALUES
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')
  
  // ERRORS
  const [fnError, setfnError] = useState('')
  const [lnError, setlnError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordError2, setPasswordError2] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    
    // general validations
    setfnError('');
    setlnError('');
    setEmailError('');
    setPasswordError('');

    // NAME errors
    if( '' === firstName ){
      setfnError('Please enter your first name');
      return;
    }
    if( '' === lastName ){
      setlnError('Please enter your last name');
      return;
    }
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
    if( confirm_password !== password ){ // if passwords do not match
      setPasswordError2('Passwords do not match');
    }
    if( '' === password ){
      setPasswordError('Please enter your password');
    }
    if (password.length <= 7) {
      setPasswordError('Your password should be at least 8 characters');
      return
    }

    // check if an email account already exists. if not, then offer to create an account!
    checkAccountExists((accountExists) => {
      
      if (accountExists){
        setEmailError('This email address already exists on our system.');
      } else{
        createAccount();
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
  const createAccount = () => {
    fetch('http://localhost:3080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((r) => r.json())
      .then((r) => {
        if ('success' === r.message) {
          localStorage.setItem('user', JSON.stringify({ email, token: r.token }))
          props.setLoggedIn(true)
          props.setEmail(email)
          props.setFirstName(firstName)
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

      <section className="container-fluid register py-5 pb-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 intro text-center d-flex justify-content-center align-items-center">
              <div>
                <img src="/dist/images/desktop-logo.png" alt="Reach Logo" title="Reach Logo" />
                <h1 className="h3">Effortlessly connect with anyone.</h1>
                <a href="/login" className="btn btn-white mt-4">Already have an account? Log in</a>
              </div>
            </div>

            <div className="col-12 col-md-7 offset-md-1 form d-flex align-items-center mt-5">
              <div className="d-lg-flex flex-flow w-100">

                <h2 className="col-12 mb-4">Register FREE Today!</h2>
                
                <div className="form-floating mb-4 mb-lg-0 col-12 col-lg-6 pe-lg-2 position-relative">
                  <input type="text" className="form-control" id="first_name" placeholder="John" onChange={(ev) => setFirstName(ev.target.value)} pattern="[a-zA-Z]*" />
                  <label htmlFor="first_name">First Name</label>
                  <small className="errorLabel">{fnError}</small>
                </div>

                <div className="form-floating mb-4 mb-lg-0 col-12 col-lg-6 ps-lg-2 position-relative">
                  <input type="text" className="form-control" id="last_name" placeholder="Doe" onChange={(ev) => setLastName(ev.target.value)} pattern="[a-zA-Z]*" />
                  <label htmlFor="last_name">Last Name</label>
                  <small className="errorLabel">{lnError}</small>
                </div>


                <div className="form-floating mb-4 mb-lg-0 mt-lg-4 col-12 col-lg-6 pe-lg-2 position-relative">
                  <input type="email" className="form-control" id="email" placeholder="name@reach.com" onChange={(ev) => setEmail(ev.target.value)} />
                  <label htmlFor="email">Email address</label>
                  <small className="errorLabel">{emailError}</small>
                </div>

                <div className="d-none d-lg-block col-lg-6"></div>

                <div className="form-floating mb-4 mb-lg-0 mt-lg-4 col-12 col-lg-6 pe-lg-2 position-relative">
                  <input type="password" className="form-control" id="password_field" placeholder="password" onChange={(ev) => setPassword(ev.target.value)} />
                  <label htmlFor="password_field">Password</label>
                  <small className="errorLabel">{passwordError}</small>
                </div>

                <div className="form-floating mb-4 mb-lg-0 mt-lg-4 col-12 col-lg-6 ps-lg-2 position-relative">
                  <input type="password" className="form-control" id="confirm_pass" placeholder="password" onChange={(ev) => setConfirmPassword(ev.target.value)} />
                  <label htmlFor="confirm_pass">Confirm Password</label>
                  <small className="errorLabel">{passwordError2}</small>
                </div>

                <div className="col-12 mt-lg-4">
                  <input className="submit btn" type="button" onClick={onButtonClick} value="Register for FREE" />
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
