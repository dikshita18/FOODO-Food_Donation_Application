
import React, { Component } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";


class Feedback extends Component{

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

                <CardGroup border="primary">

                    <Card bg="dark" text="white" border="primary">                        
                        <Card.Body>
                        <Card.Text><h4><b>About Us</b></h4></Card.Text>
                        <hr />
                        <Card.Text>
                            <h4>Hello, User!</h4>                      
                            <h6 align="left">FOODO revolves around helping the needy by connecting NGOs and common people.
                            Our objective is to enable a link of communication and interactions between NGOs and the donors. <br /><br />
                            This app can play a major role in helping many people including the homes, events, restaurants, hotels, etc. to manage the surplus food by donating them into organizations. 
                            It contributes in minimizing food wastage by donating it instead of disposing it. <br /><br />
                            FOODO shall aim to mitigate issues like lack of awareness among donors, lack of transparency in the donation process and thus acting as a bridge between the people in need. <br />
                            </h6> <br /> 
                        </Card.Text>
                        <Card.Text>
                            <h5 align="left"> Contact Us at:</h5> <br />
                            <h6 align="left"> <BsFillTelephoneFill size="25px" />  +91 90040682822 </h6>  
                            <h6 align="left"> <MdEmail size="25px"/> foodo.contactus@gmail.com </h6>                    
                            <h6 align="left"> <TiLocation size="25px" /> Mumbai, Maharashtra, India </h6><br />
                        </Card.Text>
                        </Card.Body>

                    </Card><br />

                    <Card bg="dark" text="white" border="primary">                        
                        <Card.Body>
                        <Card.Text><h4><b>Feedback Form</b></h4></Card.Text>
                        <hr />
                        <Card.Text>
                        Send us Your Feedback here <BsFillArrowDownSquareFill size="25px" />
                        </Card.Text>

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
               </CardGroup>
            </div>
            
        )
    }
}


export default Feedback











