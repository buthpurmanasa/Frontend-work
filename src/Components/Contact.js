import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Header from './Navbar';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contactpage() {
  return (
    <div>
      <div className='rav '>

        <Header />

        <div className='ra p-5 d-flex justify-content-center align-item-center vh-100' style={{ height: "100vh", width: "100vw" }}  >

          <Card className=" justify-content-center align-items-center bg-white text-black shadow p-3 mb-5 mt-5 rounded-4 " style={{ height: "500px", width: "900px", alignItems: "center", justifyContent: "center", }}>

            <Card.Img src="/images/las.jpg" alt="Card image" style={{ width: '30rem', height: "20rem", marginBottom: "40px" }} />
            <div className='d-flex gap-5' style={{ marginRight: "50px" }}>

              <Card style={{ backgroundColor: "gray" }}>
                <Card.Body>
                  <Button variant="success" className='mt-3 '>
                    <FaEnvelope className="mr-1 " /><br></br>
                    Email
                    <div>FurEverHome@gmail.com</div>
                    <FaFacebook size={20} className='mr-3' />
                    <FaTwitter size={20} className='mr-3' />
                    <FaInstagram size={20} className='mr-3' />
                  </Button>
                </Card.Body>
              </Card>

              <Card style={{ backgroundColor: "gray", width: "250px" }}>
                <Card.Body>

                  <Button variant="success" >
                    <FaMapMarkerAlt className="mr-2" />
                    <br></br> Address
                    <div>121 Rock Street,
                      21 Avenue
                      NY 92103-9000
                    </div>
                  </Button>

                </Card.Body>
              </Card>

              <Card style={{ backgroundColor: "gray", width: "250px" }}>
                <Card.Body>

                  <Button variant="success">
                    <FaPhone className="mr-2" /><br></br>
                    Contact
                    <div>9876423555............landline
                      <br></br>
                      98123456328

                    </div>
                  </Button>

                </Card.Body>

              </Card>
              {/* <div >
              <img src='images/giff.gif' height={100}></img>
              </div> */}
            </div>

            <Card.ImgOverlay>



          
              <Card.Text>
                <b><h3 style={{ marginTop: "200px", marginLeft: "320px", color: "blue" }}>Get In Touch</h3></b>
              </Card.Text>
            </Card.ImgOverlay>




          </Card >



        </div>



      </div>


    </div >
  )
}
export default Contactpage;