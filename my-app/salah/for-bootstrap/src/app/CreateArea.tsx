'use client'
import React from "react";

function CreateArea() {

  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  container Parent">
      <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 leftSide">

      <div>
        <img src="./images/ping_pong.png" alt="logo" />
      </div>

    </div>

      <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8 formInput">
        <div className="create">
          <h2 style={{color:"#C9C9C9"}}>Create Account</h2>
        </div>

          <div className="form-floating fName">  
              <input type="fName" className="form-control" id="floatingInput" placeholder="First Name" />
              <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating lName"> 
              <input type="lName" className="form-control" id="floatingInput" placeholder="Last name " />
              <label  htmlFor="floatingInput">Last name</label>
          </div>

        <div className="form-floating email">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email</label>
        </div>

        <div className="form-floating password">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-floating password">
          <input type="password" className="form-control" id="floatingPassword" placeholder="CPassword" />
          <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
        <div className="submit">
          <button className="btn btn-primary btn-submit" type="button">Create Account</button>
        </div>

        <div className="hlign"> <h2 className="or"><span>or</span></h2> </div>

        <div className="signUp">
        <button type="button" className="btn btn-primary btn-lg btn-sign">Sign up with Google</button>
        <button type="button" className="btn btn-primary btn-lg btn-sign">Sign up with Intra</button>
        </div>
      </div>
      </div>
  );
}

export default CreateArea;
