import React from "react";
import Input from "./input";

function Form(props) {
  return (
    <form className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        {(props.isregistred === false) && <Input type="password" placeholder="Confirm Password"/>}
        <button type="submit">{props.isregistred ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
