
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import './main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Update extends Component {
  constructor() {
    super();
    this.state = {
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



  submitForm(){
    var id=this.props.match.params.id;
    fetch('http://127.0.0.1:8000/user/'+id+'/',{
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
    alert("Profile Updated!");

}


  fetchData(){
    var id=this.props.match.params.id;
    fetch('http://127.0.0.1:8000/user/'+id,{
        headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 21d47454cbc676384aee1277daf2392f290b25fa'
        },
    })
    .then(response=>response.json())
    .then((data)=>{
    this.setState({
            full_name:data.full_name,
            email_id:data.email_id,
            pwd:data.pwd,
            ngo_name:data.ngo_name,
            address:data.address,
            contact:data.contact
        });
    });
}

componentDidMount(){
    this.fetchData();
}


  render() {


    return (
      
        <div>
          <br /><br />
          <Card border="primary" className="col-5 offset-3">                        
            <Card.Body>
                <form name="dForm" align="left" >
                <Card.Text><h4 align="left">Your Profile</h4></Card.Text>
                <hr />
                  <div className="form-group">
                    <label><b>Full Name</b></label>
                    <input value={this.state.full_name} type="text" name="full_name" onChange={this.changeHandler} className="form-control" required/><br />
                    
                    <label><b>Email ID</b></label>
                    <input value={this.state.email_id} type="text" name="email_id" onChange={this.changeHandler} className="form-control" required/><br />
                    
                    <label><b>Password</b></label>
                    <input value={this.state.password} type="text" name="password" onChange={this.changeHandler} className="form-control" required/><br />
                    
                    <label><b>NGO Name</b></label>
                    <input value={this.state.ngo_name} type="text" name="ngo_name" onChange={this.changeHandler} className="form-control" required/><br />
                    
                    <label><b>Address</b></label>
                    <input value={this.state.address} type="text" name="address" onChange={this.changeHandler} className="form-control" required/><br />
                    
                    <label><b>Contact No.</b></label>
                    <input value={this.state.contact} type="text" name="contact" onChange={this.changeHandler} className="form-control" required/><br />

                  </div>
                  <div className="text-center">
                    <button className="btn btn-dark btn-lg btn-block" align="center" onClick={this.submitForm}>Update Profile</button><br />
                  </div>

                </form>
            </Card.Body>  
          </Card>
            
        </div>

    );
  }
}

export default Update;


