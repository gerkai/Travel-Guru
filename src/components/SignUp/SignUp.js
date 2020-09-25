import { Button, Input } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="App">
      <Form>
        <h2>Sign Up</h2>
        <Input type="email" placeholder="email" />
        <br />
        <Input type="password" placeholder="password" />
        <br />
        <Input type="password" placeholder="password again" />
        <br />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
}

export default Signup;
