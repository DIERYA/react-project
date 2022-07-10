import React from "react";

function Form(){

    
    return(
        <div className="form-container">
            

            <h1 className="form-header">Sign In</h1>
            <p className="reminder">Don't have a account? Sign up. Scroll Down</p>
            <p className="form-email">Email Address</p>
            <input className = "form-email-input" placeholder="Enter Email"></input>
            <p className="form-password" >Password</p>
            <input  className="form-password-input" placeholder="Password"></input>
            <button onClick={function handleClick() {
                alert("Test")
                
            }} class="btn btn-secondary my-2 my-sm-0" className="form-buttton">Sign In</button>
         
        </div>
    )
}
export default Form;

