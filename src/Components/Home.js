import Header from "./Navbar";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="homepage" >
                <h3 className="mx-5" style={{ marginTop: "150px" }} ><i>Adopt A   Furry Friend

                </i> </h3>
                <p className="text-black mx-5"><b>Life is easier with a furry  best friend by your side.Find your new pet from our FurEver Home </b></p>


                <Card.Body style={{ marginLeft: "80px", marginTop: "30px" }}>

                    <b><h2>Adopt,Dont shop</h2> </b>


                </Card.Body>

                <img src="" style={{ marginLeft: "800px", marginBottom: "500px" }}></img>
            </div>
        </div>
    )
}
export default Home;