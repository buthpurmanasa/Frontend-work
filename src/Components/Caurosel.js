
import React from 'react';
import { Button } from 'react-bootstrap';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import Header from './Navbar';
import { Link } from 'react-router-dom';

function Example() {
    return (
        <div className='carousel'>


            <Header></Header>

            <Carousel data-bs-theme="dark" style={{ height: "100vh" }}>
                <Carousel.Item style={{ height: "100vh" }} interval={1000} >
                    {/* Your Header navbar component */}


                    <h3 className='mt-1 text-center text-secondary'><i>Animal Available For Adoption Near You</i></h3>
                    <Row className=' mt-3 ' style={{ marginRight: "200px" }}>
                        <Col xs={6}  >

                            <Carousel.Caption style={{ textAlign: "left", marginLeft: "-130px" }}>

                                <img src='/images/dog.webp' height={500} width={500} style={{ marginBottom: "50px" }}></img>
                                {/* <p>Life is easy with pets</p>
                <p>Find your best friend</p> */}
                            </Carousel.Caption>
                        </Col>
                        <Col xs={6} className='g-5 mb-3'>
                            <Row className='g-5 '>
                                <Col>
                                    <Card className='shadow ' style={{boxShadow:"10"}}>
                                        <Card.Img variant="top" src="/images/pup1.png" height={150} width={100} style={{ backgroundColor: 'lightblue' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Asiya</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit'  ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <div className='d-flex' >
                                                <div>
                                                    <Card.Text>3 years</Card.Text>
                                                </div>
                                                <div style={{ marginLeft: "110px" }}>
                                                    <Card.Text>Female</Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/pup2.png" height={150} width={100} style={{ backgroundColor: 'lightgray' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Charlie</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <div className='d-flex' >
                                                <div>
                                                    <Card.Text>3 years</Card.Text>
                                                </div>
                                                <div style={{ marginLeft: "130px" }}>
                                                    <Card.Text>male</Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='g-5'>
                                <Col className='g-5 mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/pup3.png" height={150} width={100} style={{ backgroundColor: 'lightpink' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Mahi</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <div className='d-flex' >
                                                <div>
                                                    <Card.Text>4 years</Card.Text>
                                                </div>
                                                <div style={{ marginLeft: "120px" }}>
                                                    <Card.Text>male</Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/dog4.avif" height={150} width={150} style={{ backgroundColor: 'green' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Ravali</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <div className='d-flex' >
                                                <div>
                                                    <Card.Text>5 years</Card.Text>
                                                </div>
                                                <div style={{ marginLeft: "110px" }}>
                                                    <Card.Text>Female</Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Carousel.Item>

                {/* second cat caurosel............... */}
                <Carousel.Item  interval={1000} style={{ height: "100vh" ,backgroundColor:"lavender"}}>
                    {/* Your Header navbar component */}
                    {/* <Header></Header> */}

                    <h3 className='mt-1 text-center text-dark'><i>Animal Available For Adoption Near You</i></h3>
                    <Row className=' mt-3 ' style={{ marginRight: "200px" }}>
                        <Col xs={6}  >

                            <Carousel.Caption style={{ color: "green", fontSize: "30px", textAlign: "left", marginLeft: "-130px" }}>

                                <img src='/images/pet.png' height={400} width={400} style={{ marginBottom: "140px" }}></img>
                                {/* <p>Life is easy with pets</p>
                <p>Find your best friend</p> */}
                            </Carousel.Caption>
                        </Col>
                        <Col xs={6} className='g-5 mb-3'>
                            <Row className='g-5'>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="/images/catt1.jpeg" height={150} width={100} style={{ backgroundColor: 'lightcoral' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Kitten</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <div className='d-flex gap-5 me-5'>
                                                <Card.Text>3 years---------Female</Card.Text>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/t1.jpg" height={150} width={100} style={{ backgroundColor: 'lightsteelblue' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Sweetu</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <Card.Text>3 years-----------Male</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='g-5'>
                                <Col className='g-5 mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/cat3.jpg" height={150} width={100} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Pluto</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <Card.Text>4 years--------Male</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/rabbit2.png" height={150} width={150} style={{ backgroundColor: 'green' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Kutty</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <Card.Text>4 years------Female</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Carousel.Item>

                {/* third caurosel............... */}
                <Carousel.Item  interval={1000} style={{ height: "100vh" ,backgroundColor:"ThreeDDarkShadow"}}>
                    {/* Your Header navbar component */}
                    

                    <h3 className='mt-1 text-center text-light'><i>Animal Available For Adoption Near You</i></h3>
                    <Row className=' mt-3 ' style={{ marginRight: "200px" }}>
                        <Col xs={6}  >

                            <Carousel.Caption style={{ color: "green", fontSize: "30px", textAlign: "left", marginLeft: "-100px" }}>

                                <img src='/images/pet2.png' height={500} width={500} style={{ marginBottom: "130px" }}></img>
                                {/* <p>Life is easy with pets</p>
                <p>Find your best friend</p> */}
                            </Carousel.Caption>
                        </Col>
                        <Col xs={6} className='g-5 mb-3'>
                            <Row className='g-5'>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="/images/bird.avif" height={150} width={100} style={{ backgroundColor: 'lightblue' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Tuffy</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/bird1.jpg" height={150} width={100} style={{ backgroundColor: 'lightgray' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Tweak</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='g-5'>
                                <Col className='g-5 mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/rabbit1.png" height={150} width={100} style={{ backgroundColor: 'lightpink' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Sheba</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <Card.Text>4 years--------Male</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='mb-3'>
                                    <Card>
                                        <Card.Img variant="top" src="/images/rabbit2.png" height={150} width={150} style={{ backgroundColor: 'green' }} />
                                        <Card.Body>
                                            <div className='d-flex'>
                                                <div>
                                                    <Card.Title>Honey</Card.Title>
                                                </div>

                                                <div style={{ marginLeft: "110px" }}>
                                                    <Button variant="outline-light" type='submit' className='' ><Link to="/bookingform" className='text-white'>Adopt</Link></Button>
                                                </div>
                                            </div>
                                            <Card.Text>4 years------Female</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Carousel.Item>

                {/* Repeat the structure for other Carousel.Items with different images */}
            </Carousel>

        </div>
    );
}

export default Example;

