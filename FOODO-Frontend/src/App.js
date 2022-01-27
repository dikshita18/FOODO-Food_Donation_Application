import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Home from "./components/Home";
import Login from "./components/login.component";
import Main from "./components/main";
import SignUp from "./components/signup.component";
import Feedback from "./components/feedback";
import Notify from './components/Notify';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { GiBowlOfRice } from "react-icons/gi";
import Update from "./components/update";




export default function App() {

  const history = useHistory();
  const url = 'http://127.0.0.1:8000/user/';

  useEffect(() => {
    localStorage.getItem('login');
  }, [url]);

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };

  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="#home">FOODO <GiBowlOfRice size="35px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                   
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/sign-in">Sign In</Nav.Link>
          <Nav.Link href="/main">Main</Nav.Link>
          <Nav.Link href="/notify">Notify</Nav.Link>
          <Nav.Link href="/feedback">Contact Us</Nav.Link>  
          <Nav.Link Link to="/" style={{textDecoration: 'none'}} onClick={handleLogout}> Logout       
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>

      </Navbar>

      <br />

      <Switch> 
        <Route exact path='/' component={Home} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/main" component={Main} />
        <Route path="/notify" component={Notify} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/update/:id" component={Update} />
        
      </Switch>

    </div>
  );
}












/*--maincode

<Nav.Link href="/main">Main</Nav.Link>

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Home from "./components/Home";
import Login from "./components/login.component";
import User from "./components/main";
import SignUp from "./components/signup.component";
import { Route, Switch } from 'react-router-dom';
import { GiBowlOfRice } from "react-icons/gi";



export default function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="#home">FOODO <GiBowlOfRice size="35px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/sign-in">Sign In</Nav.Link>
          <Nav.Link href="/user">Main</Nav.Link>
          <Nav.Link href="/sign-out"> Logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      <Switch> 
        <Route exact path='/' component={Home} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/user" component={User} />
        <Route path="/sign-out" component={Home} />
      </Switch>
      
    </div>
  );
}

--maincode */






































/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/