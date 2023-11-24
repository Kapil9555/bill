import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Forms = () => {
    const navigate = useNavigate()
  return (
    <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100dvh"}}>
        <Grid item xs={4} sx={{height:"200px"}}>
        <Paper elevation={3} sx={{height:"100%",}}>
         <Typography align='center' sx={{fontSize:"30px",fontWeight:"900",p:"10px",bgcolor:"black",color:"white"}}>Select Form</Typography>
          <Box sx={{height:"150px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
              
              <Button variant='contained' onClick={()=>{navigate('/form1')}}>
                 Form one
              </Button>
              <Button variant='contained' onClick={()=>{navigate('/secondformcontrol')}}>
                 Form Two
              </Button>

           </Box>
        </Paper>
          
        </Grid>
    </Grid>
  )
}

export default Forms