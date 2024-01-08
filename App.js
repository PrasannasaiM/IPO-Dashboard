import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import Loginform from './Components/Loginform';
import Homepage from './Components/Homepage';
import IPOComponent from './Components/IPOComponent';
import Currencyrate from './Components/Currencyrate';

const App = () => {
  return (
    <div className= "App">
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Homepage/>} /> 
           <Route path="/RegistrationForm" element={<RegistrationForm/>} />
           <Route path="/Loginform" element={<Loginform/>} />
           <Route path="/IPO" element={<IPOComponent/>} />
           <Route path="/Currencyrate" element={<Currencyrate/>} />
        </Routes>
    </BrowserRouter> 
    </div> 
  );
}

export default App;
