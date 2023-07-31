
import { Routes,Route } from "react-router-dom";
import './App.scss';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Services from './routes/Services';
import Signup from "./routes/SignUp";



function App() {
  return (
    <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
          </Routes>
    </div>
  );
}

export default App;
