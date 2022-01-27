
import React, { Component } from "react";
import './signup.component.css';
import { Link } from 'react-router-dom';
export default class SignUp extends Component {

    constructor(){
        super();
        this.state={
            full_name:'',
            email_id:'',
            pwd:'',
            ngo_name:'',
            address:'',
            contact:'',
            
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    //Input change handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    //Submit 
    submitForm(){
        fetch('http://127.0.0.1:8000/user/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 21d47454cbc676384aee1277daf2392f290b25fa'
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            full_name:'',
            email_id:'',
            pwd:'',
            ngo_name:'',
            address:'',
            contact:'',

            
        });
    }

    render() {
        return (
          <div className="outer">
            <br /><br />
            <div className="inner">
            
              <form> 
                  <h3>Sign Up</h3>

                  <div className="form-group">
                      <label>Full name</label>
                      <input type="text" name="full_name" onChange={this.changeHandler} className="form-control" placeholder="Full name" required/>
                  </div>

                  <div className="form-group">
                      <label>Email Id</label>
                      <input type="email" name="email_id" onChange={this.changeHandler} className="form-control" placeholder="Email Id" required/>
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="pwd" onChange={this.changeHandler} className="form-control" placeholder="Password" required/>
                  </div>

                  <div className="form-group">
                      <label>NGO name</label>
                      <input type="text" name="ngo_name" onChange={this.changeHandler} className="form-control" placeholder="NGO name" />
                  </div>

                  <div className="form-group">
                      <label>Address</label>
                      <input type="text" name="address" onChange={this.changeHandler} className="form-control" placeholder="Address" required/>
                  </div>

                  <div className="form-group">
                      <label>Contact No.</label>
                      <input type="text" name="contact" onChange={this.changeHandler} className="form-control" placeholder="Contact No." required/>
                  </div><br />
                  
                  <div className="text-center">
                  <Link to="/sign-in" className="btn btn-dark btn-lg btn-block col-xs-3" align="center" onClick={this.submitForm}>Sign Up</Link>
                  </div>
                </form> <br />
                <p style={{ textAlign: 'center' }}>
                    Already Registered? <Link to='/sign-in'>Sign In</Link>
                </p>
            </div>
          </div>
        );
    }
}









/* supermaincode


import React, { Component } from "react";
import './signup.component.css';

export default class SignUp extends Component {

    constructor(){
        super();
        this.state={
            full_name:'',
            email_id:'',
            pwd:'',
            ngo_name:'',
            address:'',
            contact:'',
            
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    //Input change handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    //Submit 
    submitForm(){
        fetch('http://127.0.0.1:8000/user/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 21d47454cbc676384aee1277daf2392f290b25fa'
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
        

        this.setState({
            full_name:'',
            email_id:'',
            pwd:'',
            ngo_name:'',
            address:'',
            contact:'',

            
        });
    }

    render() {
        return (
          <div className="outer">
            <div className="inner">
              <form>
                  <h3>Sign Up</h3>

                  <div className="form-group">
                      <label>Full name</label>
                      <input type="text" name="full_name" onChange={this.changeHandler} className="form-control" placeholder="Full name" required/>
                  </div>

                  <div className="form-group">
                      <label>Email Id</label>
                      <input type="email" name="email_id" onChange={this.changeHandler} className="form-control" placeholder="Email Id" required/>
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="pwd" onChange={this.changeHandler} className="form-control" placeholder="Password" required/>
                  </div>

                  <div className="form-group">
                      <label>NGO name</label>
                      <input type="text" name="ngo_name" onChange={this.changeHandler} className="form-control" placeholder="NGO name" />
                  </div>

                  <div className="form-group">
                      <label>Address</label>
                      <input type="text" name="address" onChange={this.changeHandler} className="form-control" placeholder="Address" required/>
                  </div>

                  <div className="form-group">
                      <label>Contact No.</label>
                      <input type="text" name="contact" onChange={this.changeHandler} className="form-control" placeholder="Contact No." required/>
                  </div><br />
                  
                  <div className="text-center">
                  <button type="submit" className="btn btn-dark btn-lg btn-block col-xs-3" align="center" onClick={this.submitForm}>Sign Up</button>
                  </div>
              </form>
            </div>
          </div>
        );
    }
}


supermaincode */






































/*
import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" required/>
                </div>

                <div className="form-group">
                    <label>Email Id</label>
                    <input type="email" className="form-control" placeholder="Email Id" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" required/>
                </div>

                <div className="form-group">
                    <label>NGO name</label>
                    <input type="text" className="form-control" placeholder="NGO name" required/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>

                <div className="form-group">
                    <label>Contact No.</label>
                    <input type="text" className="form-control" placeholder="Contact No." required/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}
*/