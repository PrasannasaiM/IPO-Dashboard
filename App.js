import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import Loginform from './Components/Loginform';
import Homepage from './Components/Homepage';

const App = () => {
  return (
    <div className= "App">
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Homepage/>} /> 
           <Route path="/RegistrationForm" element={<RegistrationForm/>} />
           <Route path="/Loginform" element={<Loginform/>} />
        </Routes>
    </BrowserRouter> 
    </div> 
  );
}

export default App;
