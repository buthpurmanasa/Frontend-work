
import './App.css';

import { BrowserRouter as Router, Routes, Route,Navigate, Link }from "react-router-dom";


 import LoginForm from './Components/Login';
 
import RegistrationForm from './Components/Registration ';
import Header from './Components/Navbar';
import BasicExample from './Components/List';
import Startingpage from './Components/indexx';
import Contactpage from './Components/Contact';
import Home from './Components/Home';
import Example from './Components/Caurosel';
import BookingForm from './Components/BookingForm';
import EditBooking from './Components/EditingBooking';



function App() {
 return(

     <Router>
      <div>






        <Routes>
          <Route path='/' element={<Startingpage/>}/>
         <Route path='/register' element={<RegistrationForm/>} /> 
        <Route path="/login" element={<LoginForm />} />
        <Route path="/navbar" element={<Header />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/bookingform" element={< BookingForm />} />
        <Route path="/list" element={<BasicExample />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carousel" element={<Example />} />
        <Route path="/edit/:id" element={<EditBooking />} />

       
        </Routes> 
      </div>
     </Router>
  );
}
 export default App;



