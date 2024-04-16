import "./Assets/Css/Captial.css";
import "./Assets/Css/Clarification.css";
import "./Assets/Css/Nav.css";
import "./Assets/Css/Ournature.css";
import "./Assets/Css/Whychoose.css";
import "./Assets/Css/footer.css";
import "./Assets/Css/Accordion.css";
import "./Assets/Css/Financial.css";
import "./Assets/Css/maincard.css";
import "./Assets/Css/Businessloan.css"
import "./Assets/Css/Testimonal.css";
// import Contact from "./Components/Contact";
// import Nav from "./Components/Nav";
import Home from "./Components/Home"
import Business from "./Components/Businessloan";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/business" element={<Business />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
{/* <Route path="/contact" element={<Contact />} /> */ }