import { Button } from 'react-bootstrap';
import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Startingpage() {

    return (
      
        <div className="image" >
  
            <Navbar className="bg-body-tertiary">
                <Container >
                    <div >
                        
                        <img src="images/p2.png" className="card-img" alt="..." />
                    </div>

                    <Navbar.Brand href="#home" className='raa'><i><h4>FurEver home</h4></i></Navbar.Brand>
                    <Navbar.Toggle />
                    
                    <Navbar.Collapse className="justify-content-end">
                    
                        <Button type="submit" style={{ marginLeft: "20px", backgroundColor: "gray" }}><Link to="/register" className='text-white'>Register</Link></Button>
                        <Button type="submit" style={{ marginLeft: "20px", backgroundColor: "gray", }}><a href="Login" className=' textt text-white '>Login</a></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <h4 style={{fontSize:"30px",textAlign:"center",marginTop:"60px",color:"green"}}><i>They need home as much as we do</i></h4>

        </div>
    )
}
export default Startingpage;