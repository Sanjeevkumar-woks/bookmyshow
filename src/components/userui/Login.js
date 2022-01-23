import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useContext } from "react";
import { useHistory} from "react-router-dom";
import "./login.css";
import {context}  from '../../App'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();

  const {setUname} = useContext(context);
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
     event.preventDefault();
      const newUser = {
          username,
          password
      }
      //setting user name to the Booking variable using useContext
      setUname(username);
      fetch("https://hacckathon-2-backend-sanjeev.herokuapp.com/users/login",{
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{"Content-Type": "application/json"},
      })
      .then((data)=>data.json())
      .then(()=>history.push("/movies"));
    }
    

  return (
    <div className="Login">
        <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="txt"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Button className="m-4" block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}