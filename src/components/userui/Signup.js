import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory} from "react-router-dom";
import "./login.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();

  function handleSubmit(event) {
      event.preventDefault();

    const newUser = {
       username,
        email,
        password
    }
    fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/users/signup",{
      method:"POST",
      body: JSON.stringify(newUser),
      headers:{"Content-Type": "application/json"},
    })
    .then((data)=>data.json())
    .then(()=>history.push("/login"));
  }

  return (
    <div className="Login">
        <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
         <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> 
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="m-4" block size="lg" type="submit" >
          Signup
        </Button>
      </Form>
    </div>
  );
}