
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import ControlData from './components/ControlData';
import FormScreen from './components/FormScreen';
import SecondForm from './components/SecondForm';
import ControlSecondForm from './components/ControlSecondForm';
import { Box, Button, OutlinedInput } from '@mui/material';
import Forms from './components/Forms';


function App() {
  const [password,setPassword]=useState('AdelSocial@123')
  const [check , setCheck]=useState('')
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
    input23:""
});

const [formData, setFormData] = useState({
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
  input10a:"",
  input10b:"",
  input10c:"",
  input10d:"",
  input10e:"",
  input11:"",
  input11a:"",
  input11b:"",
  input11c:"",
  input11d:"",
  input11e:"",
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
  input23:"",
  input24:"",
  input25:"",
  input26:"",
  input27:"",
  input28:"",
  input29:"",
  input30:"",
  input31:"",
  input32:"",
  input33:"",
  input34:""
})
//  if(check == password){
//    <Box sx={{height:"100dvh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//      <Box sx={{width:"400px",height:"300px",border:"1px solid red"}}>
//          <OutlinedInput value={check} onChange={(e)=>{setCheck(e.target.value)}} fullWidth/>

//          <Button variant='contained'>
//            Submit
//          </Button>
//      </Box>
//    </Box>
//  }

//  if(check != password){
  return (
    <> 
     <Router>
        <Routes>
           <Route path='/' element={<Forms/>}/>
           <Route path='/form1' element={<ControlData data={data}  setData={setData}/>}/>
          <Route path='/form' element={<FormScreen data={data}  setData={setData}/>}/>
          <Route path='/secondform' element={<SecondForm formData={formData} setFormData={setFormData}/>}/>
          <Route path='/secondformcontrol' element={<ControlSecondForm formData={formData} setFormData={setFormData} />}/>
        </Routes>
     </Router>
    </>
  );
 }

 
// }

export default App;