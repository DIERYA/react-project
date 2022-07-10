import React from "react"; 

function SignUp(){
    return(
        <div className="signup-container">
            <h1 className="signup-header">Sign Up</h1>
            <p className="reminder">Have a account? Sign In. Scroll Up</p>
            <p className="signup-email">Email Address</p>
            <input className = "signup-email-input" placeholder="Enter Email"></input>
            <p className="signup-username" >Username</p>
            <input  className="signup-username-input" placeholder="Enter Username"></input>            
            <p className="signup-password" >Password</p>
            <input  className="signup-password-input" placeholder="Password"></input>
            <p className="signup-number" >Phone Number</p>
            <input  className="signup-number-input" placeholder="000-000-0000"></input> 
            <button class="btn btn-secondary my-2 my-sm-0" className="signup-buttton">Sign Up</button>
        </div>
    )
}
export default SignUp;