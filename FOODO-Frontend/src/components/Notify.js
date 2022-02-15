
import React, { Component } from "react";
import './signup.component.css';

export default class Notify extends Component {

    constructor(){
        super();
        this.state={
            don_id:''
            
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    
    submitForm(){
        fetch('http://127.0.0.1:8000/donateprocess/',{
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

        alert("Donation Process Complete!")
        this.setState({
            don_id:''

        });
    }

    render() {
        return (
          <div className="outer">
            <br /><br />
            <div className="inner">
            
              <form> 
                  <h4 align="center"><b>Donation Process Completion</b></h4> <br />

                  <div className="form-group">
                      <label>Donation ID</label> <br />
                      <input type="text" name="don_id" onChange={this.changeHandler} className="form-control" placeholder="Enter Donation ID provided to you." required/>
                  </div> <br />


                  <div className="text-center">
                  <button className="btn btn-dark btn-md btn-block col-xs-3" align="center" onClick={this.submitForm}>Donation Process Complete</button>
                  </div>
                </form> <br />

            </div>
          </div>
        );
    }
}









