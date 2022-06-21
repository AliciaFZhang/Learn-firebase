import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';
import Home from './pages/Home';
import CreateDate from './pages/CreateDate';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth)
    .then(()=> {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    })
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createdate">CreateDate</Link>
        {!isAuth ? <Link to="/login">Login</Link> :
        (
          <>
        <button onClick={signUserOut}>Log Out</button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/createdate" element={<CreateDate isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
