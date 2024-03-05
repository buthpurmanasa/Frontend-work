import { Table, Form, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PetService from "../Services/PetService";
import {  useNavigate } from 'react-router-dom';



function BasicExample() {
  const [students, setAdopter] = useState([]);
  const navigate=useNavigate();
 
  const baseURL = "http://localhost:3000";

  const setAdopterData = () => {
    //  axios.get(baseURL + "/Students")
    PetService.getAdopter()

      .then((response) => {
        setAdopter(response.data);
        //  console.log(response.data);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });


  }

  useEffect(() => {
    setAdopterData();
  }, []);


  const removeAdopter = (id) => {
    //  console.log(id);
    // axios.delete(baseURL + "/Students/" +id)
    PetService.deleteAdopter(id)
      .then((response) => {
        alert("Student deleted");
        setAdopterData();

      }).catch(error => {
        alert("error===" + error);
      });
  }


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>petName</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>

              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.petName}</td>
              <td>{student.number}</td>
              <td>



                <FaEdit onClick={() => navigate("/edit/" +student.id)} />
                

                <FaTrash onClick={() => removeAdopter(student.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </div>
  );
}

export default BasicExample;