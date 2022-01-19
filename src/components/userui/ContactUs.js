import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";


export  function ContactUs() {

  const [status, setStatus] = useState("Submit");
  const[message,setMessage]=useState("");
  const[name,setName]=useState("");;
  const[email,setEmail]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="Contact">
    <h2>Contact-Us</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="email">
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
        <Form.Label htmlFor="email">Message:</Form.Label>
        <Form.Control
            autoFocus
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
      <Button className="m-4" block size="lg" type="submit">{status}</Button>
    </Form>
    </div>
  );
};

