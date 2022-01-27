import React, { Component } from "react";

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
    }
    this.submitForm=this.submitForm.bind(this);
  }

  handleValidation() {
    let fields = this.state.fields;
    let formIsValid = true;

    if (!fields["full_name"]) {
      formIsValid = false;
      alert("Enter Full name!");
    };

    if (!fields["cont_no"]) {
      formIsValid = false;
      alert("Enter Contact no!");
    };

    if (!fields["food_type"]) {
      formIsValid = false;
      alert("Enter Food type!");
    };

    if (!fields["cdt"]) {
      formIsValid = false;
      alert("Enter Cooking Date and Time!");
    };

    if (!fields["pdt"]) {
      formIsValid = false;
      alert("Enter Pickup Date and Time!");
    };

    if (!fields["ploc"]) {
      formIsValid = false;
      alert("Enter Pickup Location!");
    };
 
    return formIsValid;
  }

  submitForm(e){
    e.preventDefault();

    if (this.handleValidation()) {
      let fields = {};
      fields["full_name"] = "";
      fields["cont_no"] = "";
      fields["food_type"] = "";
      fields["cdt"] = "";
      fields["pdt"] = "";
      fields["ploc"] = "";
      this.setState({fields:fields});
      alert("Food details sent successfully!");
    } 
  }
  
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return(

          <div className="main" >
          <form name="dForm" >
                  <p align="center">Enter the details of the Food Item you wish to donate.</p>
                  <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="full_name" className="form-control" placeholder="Enter Full Name" 
                      onChange={this.handleChange.bind(this, "full_name")} value={this.state.fields["full_name"]} required/><br />
                      
                      <label>Contact No</label>
                      <input type="text" name="cont_no" className="form-control" placeholder="Enter Contact No" 
                      onChange={this.handleChange.bind(this, "cont_no")} value={this.state.fields["cont_no"]} required/><br />
                      
                      <label>Food Type</label>
                      <input type="text" name="food_type" className="form-control" placeholder="Enter Food Type" 
                      onChange={this.handleChange.bind(this, "food_type")} value={this.state.fields["food_type"]} required/><br />
                      
                      <label>Cooking Date and Time</label>
                      <input type="text" name="cdt" className="form-control" placeholder="Eg: 12/07/2021 10:00 am"
                      onChange={this.handleChange.bind(this, "pdt")} value={this.state.fields["pdt"]} required/><br />
                      
                      <label>Pickup Date and Time</label>
                      <input type="text" name="pdt" className="form-control" placeholder="Eg: 12/07/2021 10:00 am"
                      onChange={this.handleChange.bind(this, "cdt")} value={this.state.fields["cdt"]} required/><br />
                      
                      <label>Pickup Location</label>
                      <input type="text" name="ploc" className="form-control" placeholder="Enter Pickup Location"
                      onChange={this.handleChange.bind(this, "ploc")} value={this.state.fields["ploc"]} required/><br />

                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-dark btn-md btn-block" align="center" onClick={this.submitForm}>Send Food Details</button><br />
                  </div>
          </form>
          </div>

        
    )
  }
}

export default Donate;







/*
import React, { Component } from "react";

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      food_type:'',
      cdt:'',
      pdt:'',
      ploc:'',
    };
    this.submitForm=this.submitForm.bind(this);
  }

  validateForm() {
    var x = document.forms["dForm"]["food_type"].value;
    if (x == "" || x == null) {
      alert("Enter the detials!");
      return false;
    }
  }

  submitForm(){
    

    this.setState({
      food_type:'',
      cdt:'',
      pdt:'',
      ploc:'',
      
  });
  }

  render() {
    return(
        <div className="main">
        <form name="dForm">
                <p align="center">Enter the details of the Food Item you wish to donate.</p>
                <div className="form-group">
                    <label>Food Type</label>
                    <input type="text" name="food_type" className="form-control" placeholder="Enter food type" required/><br />
                    <label>Cooking Date and Time</label>
                    <input type="text" name="cdt" className="form-control" placeholder="Eg: 12/07/2021 10:00 am" required/><br />
                    <label>Pickup Date and Time</label>
                    <input type="text" name="pdt" className="form-control" placeholder="Eg: 12/07/2021 10:00 am" required/><br />
                    <label>Pickup Location</label>
                    <input type="text" name="ploc" className="form-control" placeholder="Enter Pickup Location" required/><br />

                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-dark btn-lg btn-block" align="center" onClick={this.submitForm}>Send Food Details</button><br />
                </div>
        </form>
        </div>
        
    )
  }
}

export default Donate;

*/
