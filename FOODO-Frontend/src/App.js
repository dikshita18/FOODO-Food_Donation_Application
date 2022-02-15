import React from 'react';
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
import { Route, Switch, useHistory } from 'react-router-dom';
import { GiBowlOfRice } from "react-icons/gi";


export default function App() {

  const history = useHistory();

  const LoggedIn = localStorage.getItem('login');

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
                       
          {LoggedIn ? 
          
          (
        
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>  
            <Nav.Link href="/main">Main</Nav.Link>
            <Nav.Link href="/notify">Notify</Nav.Link>
            <Nav.Link href="/feedback">Contact Us</Nav.Link>
            <Nav.Link Link to="/" style={{textDecoration: 'none'}} onClick={handleLogout}> Logout </Nav.Link>
            </Nav>
          
          ) : (
                   
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/sign-in">Sign In</Nav.Link> 
          <Nav.Link href="/feedback">Contact Us</Nav.Link>  
          </Nav>
          
          )         
          }
                            
        </Navbar.Collapse>
        </Container>

      </Navbar>

      <br />

      <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/notify" component={Notify} />
        <Route exact path="/feedback" component={Feedback} />
        
      </Switch>

    </div>
  );
}







/*--maincode
import React from 'react';
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
import { Route, Switch, useHistory } from 'react-router-dom';
import { GiBowlOfRice } from "react-icons/gi";
import Update from "./components/update";


export default function App() {

  const history = useHistory();

  const LoggedIn = localStorage.getItem('login');
  console.log(LoggedIn);

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
                       
          {LoggedIn ? 
          
          (
        
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/feedback">Contact Us</Nav.Link>  
            <Nav.Link href="/main">Main</Nav.Link>
            <Nav.Link href="/notify">Notify</Nav.Link>
            <Nav.Link Link to="/" style={{textDecoration: 'none'}} onClick={handleLogout}> Logout </Nav.Link>
            </Nav>
          
          ) : (
                   
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/sign-in">Sign In</Nav.Link> 
          <Nav.Link href="/feedback">Contact Us</Nav.Link>  
          </Nav>
          
          )
          
          }
                            
        </Navbar.Collapse>
        </Container>

      </Navbar>

      <br />

      <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/notify" component={Notify} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/update/:id" component={Update} />
        
      </Switch>

    </div>
  );
}

--maincode */






































