
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import ControlData from './components/ControlData';
import FormScreen from './components/FormScreen';


function App() {
  const [data , setData] = useState({
    input1:"",
    input2:"",
    input3:"",
    input4:"",
    input5:"",
    input6:"",
    input7:"",
    input8:"",
    input9:"",
    input10:"",
    input11:"",
    input12:"",
    input13:"",
    input14:"",
    input15:"",
    input16:"",
    input17:"",
    input18:"",
    input19:"",
    input20:"",
    input21:"",
    input22:"",
  

})



  return (
    <> 
     <Router>
        <Routes>
          <Route path='/' element={<ControlData data={data}  setData={setData}/>}/>
          <Route path='/form' element={<FormScreen data={data}  setData={setData}/>}/>
        </Routes>
     </Router>
    </>
  );
}

export default App;