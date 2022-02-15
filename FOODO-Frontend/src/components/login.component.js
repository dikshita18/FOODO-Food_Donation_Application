import React from "react";
import "./login.component.css";
import { useState, useEffect } from 'react';
import { useFetch } from "./useFetch";
import { Link, useHistory } from 'react-router-dom';



const url = 'http://127.0.0.1:8000/user/';

const Login = () => {
  let history = useHistory();
  const { items } = useFetch(url);
  const [email_id, setEmail] = useState('');
  const [pwd, setPassword] = useState('');

  
    useEffect(() => {
        if (localStorage.getItem('login')) {
          let retrivedData = JSON.parse(localStorage.getItem('login'));
          console.log(retrivedData.full_name);
        }
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        const existingUser = items.find((user) => user.email_id === email_id);
        if (email_id && pwd) {
          if (existingUser && existingUser.email_id && existingUser.pwd) {
            if (existingUser.email_id === email_id) {
              if (existingUser.pwd === pwd) {
                console.log("Success!");
                alert('Login Successful!');
                history.push('/main')
                localStorage.setItem('login', JSON.stringify(existingUser));
                
              } else {
                alert('Password Invalid!');
              }
            }
          } else {
            alert('Login Failed, Invalid Credentials!');
          }
        }
        window.location.reload();
      };

    return(
      <div className="outer">
        <div className="inner">
          <form onSubmit={(e) => handleSubmit(e)}>

            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email Id</label>
                <input type="email" name='email_id' className="form-control" value={email_id} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" required />
            </div> 

            <div className="form-group">
                <label>Password</label>
                <input type="password" name='pwd' className="form-control" value={pwd} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
            </div><br />

            <div className="text-center">
            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>
            </div>
          </form> <br /> 
          <p style={{ textAlign: 'center' }}>
            Not yet Registered? <Link to='/sign-up'>Sign Up</Link>
          </p>
        </div>
      </div>       
    );
};


export default Login













/* supermaincode


import React from "react";
import "./login.component.css";
import { useState, useEffect } from 'react';
import { useFetch } from "./useFetch";
import { Link, useHistory } from 'react-router-dom';



const url = 'http://127.0.0.1:8000/user/';

const Login = () => {
  let history = useHistory();
  const { items } = useFetch(url);
  const [email_id, setEmail] = useState('');
  const [pwd, setPassword] = useState('');

  
    useEffect(() => {
        if (localStorage.getItem('login')) {
          let retrivedData = JSON.parse(localStorage.getItem('login'));
          console.log(retrivedData.full_name);
        }
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        const existingUser = items.find((user) => user.email_id === email_id);
        if (email_id && pwd) {
          if (existingUser && existingUser.email_id && existingUser.pwd) {
            if (existingUser.email_id === email_id) {
              if (existingUser.pwd === pwd) {
                console.log("Success!");
                alert('Login Successful!');
                history.push('/main')
                localStorage.setItem('login', JSON.stringify(existingUser));
                
              } else {
                alert('Password Invalid!');
              }
            }
          } else {
            alert('Login Failed, Invalid Credentials!');
          }
        }
        window.location.reload();
      };

    return(
      <div className="outer">
        <div className="inner">
          <form onSubmit={(e) => handleSubmit(e)}>

            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email Id</label>
                <input type="email" name='email_id' className="form-control" value={email_id} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" required />
            </div> 

            <div className="form-group">
                <label>Password</label>
                <input type="password" name='pwd' className="form-control" value={pwd} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
            </div><br />

            <div className="text-center">
            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>
            </div>
          </form> <br /> 
          <p style={{ textAlign: 'center' }}>
            Not yet Registered? <Link to='/sign-up'>Sign Up</Link>
          </p>
        </div>
      </div>       
    );
};


export default Login



supermaincode */
