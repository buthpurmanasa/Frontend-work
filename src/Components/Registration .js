import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UserService from '../Services/UserService';



const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const baseURL = "http://localhost:3000/Form";

  const studentNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const studentEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const studentpasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    UserService.CreateUser({ name: name, email: email,password:password})
    // axios.post(baseURL, {
    //   name: name,
    //   email: email,
    //   password: password
    // })
      .then(() => {
        alert("Form " + name + " added!");
        navigate("/login");
      })
      .catch(error => {
        alert("Error: " + error);
      });
  };


  return (


    <div className=" page d-flex justify-content-center align-items-center vh-100">
      <div    style={{position:"relative"}}>
        <img src="images/rabbit.png"  style={{marginRight:"100px"}}  />
          <b    style={{position:"absolute",top:"380px",left:"160px",fontSize:"20px",color:"blue"}}><i>REGISTER HERE</i></b>
      </div>

      <div className='register'>

        <Card border="light " className=' rounded-4 p-2' style={{ width: '25rem', backgroundColor: 'transparent', boxShadow: "10px 0px 10px 0px" }}>

          <Card.Header className="text-center text-light"><h3 >RegistrationForm</h3></Card.Header>

          <Card.Body>

            <Card.Text>
              <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicName" >
                  <Form.Label className='text-light'>Name</Form.Label>
                  <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Enter Name" value={name} onChange={studentNameChangeHandler} required />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" >
                  <Form.Label className='text-light'>Email address</Form.Label>
                  <Form.Control type="email" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Enter email" value={email} onChange={studentEmailChangeHandler} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className='text-white'>Password</Form.Label>
                  <Form.Control type="password" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Password" value={password} onChange={studentpasswordChangeHandler} required />
                </Form.Group>
                <div className='d-flex gap-3 align-items-center' style={{ marginTop: "20px", paddingLeft: "10px" }} >
                  <Form.Check aria-label="option 1" />Male
                  <Form.Check aria-label="option 5" className='ms-4' />Female
                  <Form.Check aria-label="option 1" className='ms-4' />Others
                </div>
                <div className='d-flex gap-3' style={{ marginTop: "20px", paddingLeft: "10px" }}>
                  <Form.Check aria-label="option 1" className='ms-0' />I agree to the terms and conditions
                </div>
                <Button type="submit" className='mt-3' style={{ marginLeft: "130px", backgroundColor: "black" }}>Register</Button>

                <p className='m-3 '>If you already have an account,   <Button type="submit" variant='outline-dark'><Link to="/login" className='text-dark '>Login</Link></Button></p>

              </Form>
            </Card.Text>
          </Card.Body>

        </Card>
      </div>
    </div>


  );
};
export default RegistrationForm;

