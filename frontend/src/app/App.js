import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

import AnimatedCursor  from "../hooks/AnimatedCursor";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem('user'))
  
    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }
  
    // If the token exists, verify it with the auth server to see if it is valid
    fetch('http://localhost:3080/verify', {
      method: 'POST',
      headers: {
        'jwt-token': user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn('success' === r.message)
        setEmail(user.email || '')
        if( user.name !== undefined ){
          var fn = user.name;
          setFirstName(fn.toString());
        }
      })
  }, [])
  
  return (

    <div className="App">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home firstName={firstName} email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} setFirstName={setFirstName} />} />
          <Route path="/register" element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} setFirstName={setFirstName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
