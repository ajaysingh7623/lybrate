import React from 'react';
import { Link } from 'react-router-dom';


const isActive = (history, path) => {
  if (history.location.pathname === path) {
      return { width:"100%" };
  } else {
      return { color: "#ffffff" };
  }
};
const About=({history })=>(

 
    <div>
    <h1>About Us</h1>
    <div>
      <form >
    <label for="fname">First Name</label>
    
    <input type="text"  name="firstname" style={isActive(history, "/about")}  to="/about" placeholder="Your name.."/>
    

    <label for="lname">Last Name</label>
    <input type="text" name="lastname" placeholder="Your last name.."/>
    </form>
    </div>
    </div>
  
);
export default About;
