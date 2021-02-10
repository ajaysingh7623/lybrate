import './content.css';


export default function Contact(){

  return (
    <div className="contact">
    <h1 >Contacts</h1>
    
    <form >
    
    
    <div className="form-group">
    <label for="fname">First Name
    <input type="text"  className="form-control" name="firstname" placeholder="Your name.."/></label>
    </div>


    <label for="lname">Last Name</label>
    <input type="text"  name="lastname" placeholder="Your last name.."/>
    
    </form>
    
    </div>
   
  );
} 