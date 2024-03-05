import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
// import CloseButton from 'react-bootstrap/CloseButton';
import PetService from '../Services/PetService';
import { useNavigate } from 'react-router-dom';


function EditBooking() {


    const navigate = useNavigate();  
    const { id } = useParams();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [petName, setPetName] = useState('');


   
  
    // const ADOPTER_API_BASE_URL = "http://localhost:8080/api/v1/Adopters"

   

    const fetchDetails = () => {


        // Fetch the Guest data based on the ID when the component mounts
        PetService.getAdopterById(id)
            .then(response => {
                const adopterData = response.data;
                setName(adopterData.name);
                setEmail(adopterData.email);
                setAddress(adopterData.address);
                setNumber(adopterData.number);
                setPetName(adopterData.petName);
            })
            .catch(error => {
                console.error("Error fetching Adopter data:", error);
            });
    }



    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };


    const handlePetNameChange = (event) => {
        setPetName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const submitActionHandler = (event) => {
        event.preventDefault();

        PetService.editAdopter(id, {
            name: name,
            email: email,
            address: address,
            number: number,
            petName: petName
        })
            .then(() => {
                alert("Adopter: " + name + " updated!");
                navigate("/list");
            })
            .catch(error => {
                alert("Error updating Adopter: " + error);
            });
    }
    useEffect(() => {
        if (id)
            fetchDetails(id);
    }, [id]);


    return (
        <div>
            <div className='form'>
    {/* <Header/> */}
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
                    <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder=" Name" value={name} onChange={handleNameChange} required />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail" >
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" style={{ border: "none", borderBottom: "2px solid " }} placeholder="email" value={email} onChange={handleEmailChange} required />
                  </Form.Group>
                  <Form.Group controlId="formBasicAdress" >
                    <Form.Label >Adress</Form.Label>
                    <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder=" Adress" value={address} onChange={handleAddressChange} required />
                  </Form.Group>
                  <Form.Group controlId="formBasicPetname" >
                    <Form.Label >Name of the pet</Form.Label>
                    <Form.Control type="text" style={{ border: "none", borderBottom: "2px solid " }} placeholder=" pet Name" value={petName} onChange={handlePetNameChange} required />
                  </Form.Group>

                  <Form.Group controlId="formBasicNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" style={{ border: "none", borderBottom: "2px solid " }} placeholder="Number" value={number} onChange={handleNumberChange} required />
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

export default EditBooking;
