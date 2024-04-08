
import "./Assets/Css/Captial.css"
import "./Assets/Css/Clarification.css"
import './Assets/Css/Nav.css'
import './Assets/Css/Ournature.css'
import './Assets/Css/Whychoose.css'
import './Assets/Css/footer.css'
import './Assets/Css/Faq.css'
import Contact from './Components/Contact';
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
