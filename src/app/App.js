import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "../pages/home";
import { Login } from "../pages/login";

import AnimatedCursor  from "../hooks/AnimatedCursor";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  
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
          <Route exact path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="*" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
