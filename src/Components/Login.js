
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UserService from '../Services/UserService';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const baseURL = "http://localhost:3000/Form";

  // const handleSubmit =async (e) => {
  //     e.preventDefault();
  //     // Handle login logic here


  //     try{
  //       // fetch data from the json file
  //       const response= await axios.get(baseURL);

  //       const user=response.data.find(user=>user.email===email&& user.password===password);

  //       if(user){ 
  //         navigate('/home');
  //       }else{
  //         alert("invalid email or password");
  //       }
  //     }catch(error){
  //       console.error("login failed",error)
  //       alert("login failed.please try again later");

  //     }


  //  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Fetch user data based on email
  UserService.getUser(email)
    .then(response => {
      // console.log(response.data);
      const user=response.data.find((user)=>user.email===email&&user.password===password);
      if(user){
        navigate("/home")
      }else{
        alert("login failed");
        console.log("error");
      }
      // Check if the user with provided email exists
     } )
     .catch(error=>{
      console.log("error",error)
     })
};



  return (

    <div className=" login d-flex justify-content-center align-items-center vh-100">
     
        <Card style={{ width: '25rem'  , background:"black" ,boxShadow:"10px 30px 20px"}}>
          <Card.Header className="text-center" style={{ color: "white" }}><h3 >LoginForm</h3></Card.Header>
          <Card.Body>

            <Card.Text>
              <Form onSubmit={handleSubmit} >


                <Form.Group controlId="formBasicEmail" >
                  <Form.Label  className='text-white'>Email address</Form.Label>
                  <Form.Control type="email" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className='text-white'>Password</Form.Label>
                  <Form.Control type="password" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>


                {/* <Button type="submit"  style={{  marginLeft: "130px", margin:"20px", backgroundColor: "green" }}>Login</Button> */}
                <Button variant="outline-light" type='submit' className='mx-2' style={{ margin: "20px" }}>Login</Button>{' '}
                <Button variant="outline-light" type='submit' className='mx-2 ' style={{ margin: "20px" }}><Link to="/register" className='text-white'>Back</Link></Button>{' '}

              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
     
    </div>

  );
};
export default LoginForm;  