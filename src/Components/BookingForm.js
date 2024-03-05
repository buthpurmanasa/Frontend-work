import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Header from './Navbar';
import PetService from '../Services/PetService';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const redirectTo=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [petName, setPetName] = useState('');

  const baseURL = "http://localhost:3000/Students";



  const NameChangeHandler = (event) => {

    setName(event.target.value);
    // console.log(event.target.value);
  };

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const NumberChangeHandler = (event) => {
    setNumber(event.target.value);
    // console.log(event.target.value);
  };
  const AddressChangeHandler = (event) => {
    setAddress(event.target.value);
    // console.log(event.target.value);
  };
  const petChangeHandler = (event) => {
    setPetName(event.target.value);
    // console.log(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();

    // console.log("clicked")

    // create----post using rest api method
    // axios.post(baseURL, {
    //   name: Name,
    //   email: Email,
    //   adress: Adress,
    //   number: Number,
    //   pet: pet
    // })
      // .then((response) => {
      //   alert("data " + Name + " added!");
      //   navigate("/ ");
      // }).catch(error => {
      //   alert("error===" + error);
      // });


      PetService.createAdopter({ name: name, email: email,address:address,number:number,petName:petName })
      .then((response) => {
          alert( petName + ":"  + " adopted!"  + "successfully" );
          redirectTo("/list");
          // console.log(response)
       
      }).catch(error => {
          alert("error===" + error);
      });


  };
  return (
    <div >
      <div className='form'>
    <Header/>
    <Form onSubmit={submitActionHandler} className='body p-5' >
     
        {/* overall div */}
        <div className='d-flex'>

          {/* image div */}
        
          <div style={{ marginTop: "100px", marginLeft: "20px" }} >
            <img src='/images/form1.png' style={{ height: "400px" }}></img><br></br>
           <b><i style={{color:"blue",fontSize:'25px'}}>Adopt Juliee</i></b> 
          </div>

          {/* card div form */}
          <div >
            <Card border="light"  className='shadow rounded-4' style={{ width: '30rem', margin: "20px",backgroundColor:"transparent" }}>

              <Card.Header className="text-center text-light"><h3 >Adoption Form</h3></Card.Header>

              <Card.Body>

                <Card.Text>
                  {/* <Form onSubmit={handleSubmit} > */}
                  <Form.Group controlId="formBasicName" >
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder=" Name" value={name} onChange={NameChangeHandler} required />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail" >
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" style={{ border: "none", borderBottom: "2px solid " }} placeholder="email" value={email} onChange={EmailChangeHandler} required />
                  </Form.Group>
                  <Form.Group controlId="formBasicAdress" >
                    <Form.Label >Adress</Form.Label>
                    <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder=" Adress" value={address} onChange={AddressChangeHandler} required />
                  </Form.Group>
                  <Form.Group controlId="formBasicPetname" >
                    <Form.Label >Name of the pet</Form.Label>
                    <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder=" pet Name" value={petName} onChange={petChangeHandler} required />
                  </Form.Group>

                  <Form.Group controlId="formBasicNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Number" value={number} onChange={NumberChangeHandler} required />
                  </Form.Group>
                  <div className='d-flex gap-3 align-items-center' style={{ marginTop: "20px", paddingLeft: "10px" }} >
                    <Form.Check aria-label="option 1" />Male
                    <Form.Check aria-label="option 5" className='ms-4' />Female

                  </div>

                  <Button type="submit" variant='success' style={{ marginLeft: "290px" }}>Adopt Now</Button>



                  {/* </Form> */}
                </Card.Text>
              </Card.Body>

            </Card>

          </div>

        </div>
    
     
    </Form >
    </div>
    </div>
  );
}

export default BookingForm;