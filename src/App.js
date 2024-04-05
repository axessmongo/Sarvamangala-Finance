import logo from './logo.svg';
import './Assets/Css/Nav.css'
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
