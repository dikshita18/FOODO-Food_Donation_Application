
import React, { Component } from "react";
import './main.css';
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";


class Main extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      key: '',
      isLoaded: false,
      showHide: false,
      full_name:'',
      cont_no:'',
      food_type:'',
      cdt:'',
      pdt:'',
      ploc:'',
    }
    this.changeHandler=this.changeHandler.bind(this);
    this.submitForm=this.submitForm.bind(this);
  }

  async fetchData() {
      try{
        const response = await fetch('http://127.0.0.1:8000/donateform/', {
          headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 21d47454cbc676384aee1277daf2392f290b25fa'
        },
        });
        const data = await response.json();
        //console.log(data);
        this.setState({data: data.splice(0, 10),isLoaded: true});
      } catch(err){
        console.log(err);
      }
  }

  componentDidMount(){
    this.fetchData();
  }

      //Input change handler
  changeHandler(event){
      this.setState({
          [event.target.name]:event.target.value
      });
  }


  submitForm(){
    fetch('http://127.0.0.1:8000/donateform/',{
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
    alert('Donation Form Sent!');
    this.setState({
      full_name:'',
      cont_no:'',
      food_type:'',
      cdt:'',
      pdt:'',
      ploc:'', 
  });
  }

  deleteData(id){
    fetch('http://127.0.0.1:8000/donateform/'+id+'/',{
        method:'DELETE',
        body:JSON.stringify(this.state),
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token 21d47454cbc676384aee1277daf2392f290b25fa'
      },
    })
    .then(response=>response)
    .then((data)=>{
      if(data){
          this.fetchData();
      }
    });
    const key = id;
    this.setState({ key })
    alert('Donation Accepted!');

}
  

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}

  handleModalShowHide2() {
    this.setState({ showHide2: !this.state.showHide2 })
    
}

  handleModalShowHide3() {
    this.setState({ showHide3: !this.state.showHide3 })
  }

  render() {
    const {data, isLoaded} = this.state;
    const { key }=this.state;

    return (
      <div className="outer">
        <div className="inner">
          <div>
            <h3>Hello, User!</h3>
            <p align="center">Choose what you would like to do for today!</p>
            <div>
              <button className="btn btn-dark btn-lg btn-block btn-space" onClick={() => this.handleModalShowHide()}>Donate Food</button>           
              <button className="btn btn-dark btn-lg btn-block" onClick={() => this.handleModalShowHide2()}>Search for donations</button>
            </div>

          </div> 

        
          <Modal show={this.state.showHide}      
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Donation Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form name="dForm">
                  <p align="center"><b>Enter the details of the Food Item you wish to donate.</b></p>
                  <div className="form-group">

                    <label>Full Name</label>
                    <input type="text" name="full_name" onChange={this.changeHandler} className="form-control" placeholder="Enter Full Name" required/><br />
                    
                    <label>Contact No</label>
                    <input type="text" name="cont_no" onChange={this.changeHandler} className="form-control" placeholder="Enter Contact No" required/><br />
                    
                    <label>Food Type</label>
                    <input type="text" name="food_type" onChange={this.changeHandler} className="form-control" placeholder="Enter food type" required/><br />
                    
                    <label>Cooking Date and Time</label>
                    <input type="text" name="cdt" onChange={this.changeHandler} className="form-control" placeholder="Eg: 12/07/2021 10:00 am" required/><br />
                    
                    <label>Pickup Date and Time</label>
                    <input type="text" name="pdt" onChange={this.changeHandler} className="form-control" placeholder="Eg: 12/07/2021 10:00 am" required/><br />
                    
                    <label>Pickup Location</label>
                    <input type="text" name="ploc" onChange={this.changeHandler} className="form-control" placeholder="Enter Pickup Location" required/><br />

                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-dark btn-lg btn-block btn-space" onClick={() => this.handleModalShowHide()}>Close</button>
                    <button type="submit" className="btn btn-dark btn-lg btn-block" align="center" onClick={this.submitForm}>Send</button><br />
                  </div>
                </form>
 
              </Modal.Body>
          </Modal>


          <Modal show={this.state.showHide2}    
            scrollable={true} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Donations Available</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  {!isLoaded ? <div>Loading....</div> :
                    <div>
                      {data.map((item)=>{
                        return <p key={item.id}><b>Full Name:</b> {item.full_name}<br />

                        <b>Contact No:</b> {item.cont_no}<br />
                        <b>Food Type:</b> {item.food_type}<br />
                        <b>Cooking Date and Time:</b> {item.cdt}<br />
                        <b>Pickup Date and Time:</b> {item.pdt}<br />
                        <b>Pickup Location:</b> {item.ploc}<br /><br />
                        
                        <button type="submit" className="btn btn-dark btn-md btn-block" align="center" 
                        onClick={() => {this.handleModalShowHide3(); this.deleteData(item.id)}}>Accept Donation</button> <br /> 
                        < hr/>

                        </p>
                        
                      })}
                      
                    </div>
                  }
                 
                </div>

  
              </Modal.Body>
              <Modal.Footer>
                <div className="text-center">
                  <button type="button" className="btn btn-dark btn-lg btn-block" onClick={() => this.handleModalShowHide2()}>Close</button>
                </div>
              </Modal.Footer>
          </Modal>

          <Modal show={this.state.showHide3}    
            scrollable={true} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Donation ID</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>You have accepted the donation. Your Donation ID is <b>{key}</b>. <br />
                Once the donation process has been complete please notify us by entering this id in the notify tab. <br />
                Thank you!</p>
              </Modal.Body>
              <Modal.Footer>
                <div className="text-center">
                  <button type="button" className="btn btn-dark btn-lg btn-block" onClick={() => this.handleModalShowHide3()}>Close</button>
                </div>
              </Modal.Footer>
            </Modal>
                  
        </div>
      </div>
    );
  }
}

export default withRouter(Main);



















