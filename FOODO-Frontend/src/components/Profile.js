
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { BsFillArrowDownSquareFill } from "react-icons/bs";


class Profile extends Component{

    constructor() {
        super();
        this.state = {
          full_name:'',
          email_id:'',
          cont_no:'',
          feedback:''

        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
      }


    submitForm(){
        fetch('http://127.0.0.1:8000/feedbackform/',{
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
        alert('Feedback Sent!')

        this.setState({
            full_name:'',
            email_id:'',
            cont_no:'',
            feedback:''
            
        });

    }

        changeHandler(event){
            this.setState({
                [event.target.name]:event.target.value
            });
        }


    render() {   

        return (
            <div className="offset-md-1 col-md-10">          
                <br /><br /><br /><br />


                    <Card bg="dark" text="white" border="primary">                        
                        <Card.Body>
                        <Card.Text><h4><b>Your Profile</b></h4></Card.Text>
                        <hr />

                        <form align="left">
                            
                                <div className="form-group">
                                    <label><b>Full name</b></label>
                                    <input type="text" name="full_name" onChange={this.changeHandler} className="form-control" placeholder="Full name" required/>
                                </div><br />

                                <div className="form-group">
                                    <label><b>Email Id </b></label>
                                    <input type="email" name="email_id" onChange={this.changeHandler} className="form-control" placeholder="Email Id" required/>
                                </div><br />

                                <div className="form-group">
                                    <label><b>Contact No.</b></label>
                                    <input type="text" name="cont_no" onChange={this.changeHandler} className="form-control" placeholder="Contact No." required/>
                                </div><br />

                                <div class="form-group">
                                    <label><b>Your Feedback</b></label>
                                    <textarea name="feedback" onChange={this.changeHandler} className="form-control" rows="2" placeholder="Give us your Feedback" required></textarea>                    
                                </div><br />   

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-md btn-block" align="center" onClick={this.submitForm}>Send Feedback</button><br />
                                </div>

                        </form>

                        </Card.Body>
                    </Card>

            </div>
            
        )
    }
}


export default Profile










