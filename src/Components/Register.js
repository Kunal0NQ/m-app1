import React from "react";

export default function  Register (props)  {
    return (
      <div className="container card p-3 my-2 register-container">
          <h1 className="text-center">Registration Form</h1>
        <form onSubmit={props.submit}>
          <div className="form-group">
            <lable htmlFor="name" >Name:</lable>
            <input type="text" name="name" className="form-control"></input>
          </div>
          <div className="form-group">
            <lable htmlFor="email" >Email:</lable>
            <input type="email" name="email" className="form-control"></input>
          </div>
          <div className="form-group">
            <lable htmlFor="password" className="form-label" >Password:</lable>
            <input type="password" name="password" className="form-control"></input>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }