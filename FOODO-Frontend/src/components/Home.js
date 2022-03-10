import React from "react";
import './Home.css';
import { useHistory } from 'react-router-dom';



const Home = () =>{
    let history = useHistory();

    const handleSubmit = () => {

        history.push('/sign-up')
    }

    return (
      <div className="outer">
        <div className="inner">
          <h3>Hello, User!</h3><br />
          <h3>Welcome to FOODO!</h3><br />
          
          <p >As there are problems of food wastage which is spreading in our country at an alarming rate. <br />
          We have decided to make this app which provides a platform for donating left over food from different functions, hotels, events, or homes etc. to the NGO where there is the need of the food.</p>
          <p >Come join hands with us so that we can help in reducing food wastage in our country by donating them to the needful people.</p>
          <p align="center" >Haven't yet registered? <br /></p>
          <div className="text-center">
          <button  onClick={() => handleSubmit()} className="btn btn-dark btn-md btn-block">Register Here!</button>
          </div>
        </div>
      </div>
    );
  }


export default Home













