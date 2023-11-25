'use client'
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../App.css';
import scan from '../assests/scan.png';
import scan1 from '../assests/scan1.png';
import html2pdf from 'html2pdf.js';




const SecondForm = ({formData}) => {
    console.log(formData)
    const [state , setState]=useState(true)



    const handlePrint = async() => {

          setState(false)
         await printPdf();
      
    };

   const printPdf =()=>{
    setTimeout(()=>{
         window.print();
    },200)
   }

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Grid item xs={12} >
                    <Paper sx={{ width: '100%', height: '100%', }} elevation={0}>
                        <Grid container sx={{ border: '1px solid lightgrey', borderRadius: '3px' }} id="pdf-container">
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '8px',p:'3px' }}>
                                <Grid item xs={2} sx={{ height: '100px', display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '19px', fontWeight: 'bold', ml: '3px' }}>e-Way Bill</Typography>
                                </Grid>
                                <Grid item xs={2} sx={{  display: 'flex', justifyContent: 'right' }} >
                                    <Box sx={{ width: '100px', height: '100px', position: 'relative', }}>

                                        <img src={scan} alt='scan'  style={{ width: '100px', height: '100px', }} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ borderRadius: '3px',m:'4px',  border: '1px solid lightgrey' }}>
                                <Grid item xs={12} sx={{ p: '4px 3px', borderBottom: '1px solid lightgrey' }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>1. E-WAY BILL Details</Typography>
                                </Grid>
                                <Grid container sx={{ p: '4px 3px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Grid item xs={4} >

                                        <Typography sx={{ fontSize: '10px' }}>eWay Bill No:<b> {formData.input1}</b>  </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <Typography sx={{ fontSize: '10px' }}>Generated Date:<b> {formData.input2}</b>  </Typography>



                                    </Grid>
                                    <Grid item xs={4} >

                                        <Typography sx={{ fontSize: '10px' }}>Generated By:<b> {formData.input3}</b>  </Typography>
                                        <Typography sx={{ fontSize: '10px' }}>Valid Upto:<b> {formData.input4}</b>  </Typography>

                                    </Grid>

                                    <Divider sx={{ width: '99.5%', bgcolor: '1px sild lightgrey', hiehgt: '1px', m: '2px' }} />
                                </Grid>

                                <Grid container sx={{ p: '4px 3px', display: 'flex', alignItems: 'flex-start' }}>
                                    <Grid item xs={4} >

                                        <Typography sx={{ fontSize: '10px' }}>Mode:<b> {formData.input5}</b>  </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <Typography sx={{ fontSize: '10px' }}>Approx Distance:<b> {formData.input6}</b>  </Typography>



                                    </Grid>


                                    <Divider sx={{ width: '99.5%', bgcolor: '1px sild lightgrey', hiehgt: '1px', m: '2px' }} />
                                </Grid>

                                <Grid container sx={{ p: '4px 3px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Grid item xs={4} >

                                        <Typography sx={{ fontSize: '10px' }}>Type:<b> {formData.input7}</b>  </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <Typography sx={{ fontSize: '10px' }}>Document Details:<b> {formData.input8}</b>  </Typography>



                                    </Grid>
                                    <Grid item xs={4} >

                                        <Typography sx={{ fontSize: '10px' }}>Transaction type:<b> {formData.input9}</b>  </Typography>


                                    </Grid>

                                    <Divider sx={{ width: '99.5%', bgcolor: '1px sild lightgrey', hiehgt: '1px', m: ' 2px' }} />
                                </Grid>
                                <Grid item xs={12} sx={{ p: '4px 3px', border: '1px solid lightgrey', mt: '4px' }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>2.Address Details</Typography>
                                </Grid>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '4px 4px', mt: '3px' }}>
                                    <Grid item xs={5.9} sx={{ bgcolor: '1px solid lightgrey', height: '5px' }}>
                                        <Divider sx={{ width: '100%', bgcolor: '2px sild lightgrey', hiehgt: '2px', }} />
                                    </Grid>
                                    <Grid item xs={5.9} sx={{ bgcolor: '1px solid lightgrey', height: '5px' }}>
                                        <Divider sx={{ width: '100%', bgcolor: '2px sild lightgrey', hiehgt: '2px', }} />
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize: '10px', ml: '4px' }}><b>Form</b></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize: '10px', ml: '4px' }}><b>To</b></Typography>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Grid item xs={5.9} sx={{ border: '2px solid lightgrey', height: '140px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', p: '4px 5px' }}>
                                        <Typography sx={{ fontSize: '10px', }}>GSTIN : {formData.input10} <br />{formData.input10a}<br />{formData.input10b}</Typography>
                                        <Typography sx={{ fontSize: '10px', }}>:: Dispatch From :: <br />{formData.input10c}<br />{formData.input10d}<br />{formData.input10e}</Typography>

                                    </Grid>
                                    <Grid item xs={5.9} sx={{ border: '2px solid lightgrey', height: '140px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', p: '4px 5px' }}>
                                        <Typography sx={{ fontSize: '10px', }}>GSTIN : {formData.input11}<br />{formData.input11a}<br />{formData.input11b}</Typography>
                                        <Typography sx={{ fontSize: '10px', }}>::Ship To::<br />{formData.input11c}<br />{formData.input11d}<br />{formData.input11e}</Typography>

                                    </Grid>

                                </Grid>

                                <Grid item xs={12} sx={{ p: '4px 3px', border: '1px solid lightgrey', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>3. Goods Details</Typography>
                                </Grid>
                                {/* <Grid container sx={{}}> */}
                                <table style={{ width: '100%' }}>
                                    <tr >
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>HSN<br></br> Code</th>
                                        <th style={{ fontSize: '13px', width: '30%', textAlign: 'left', padding: '9px' }}>Product Name & Desc. </th>
                                        <th style={{ fontSize: '13px', width: '8%', textAlign: 'left', padding: '9px' }}>Quantity</th>
                                        <th style={{ fontSize: '13px', width: '19%', textAlign: 'left', padding: '9px' }}>Taxable Amount Rs.</th>
                                        <th style={{ fontSize: '13px', textAlign: 'left', padding: '9px' }}>Tax Rate (C+S+I+Cess+Cess <br></br>Non.Advol)</th>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>{formData.input12} </td>
                                        <td style={{ fontSize: '13px', width: '30%', textAlign: 'left', padding: '9px' }}>{formData.input13}</td>
                                        <td style={{ fontSize: '13px', width: '8%', textAlign: 'left', padding: '9px' }}>{formData.input14}</td>
                                        <td style={{ fontSize: '13px', width: '19%', textAlign: 'rigt', padding: '9px' }}>{formData.input15}</td>
                                        <td style={{ fontSize: '13px', textAlign: 'right', padding: '9px' }}>{formData.input16}</td>
                                    </tr>
                                </table>
                                <Grid item xs={12} sx={{ mt: '10px' }}>

                                </Grid>

                                <table style={{ width: '100%', }}>
                                    <tr >
                                        <th style={{ fontSize: '13px', width: '17%', textAlign: 'left', padding: '9px' }}>Tot. Tax'ble Amt </th>
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>CGST Amt </th>
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>SGST Amt</th>
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>IGST Amt</th>
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>CESS Amt</th>
                                        <th style={{ fontSize: '13px', width: '18%', textAlign: 'left', padding: '9px' }}>CESS Non.Advol Amt</th>
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>Other Amt</th>
                                        <th style={{ fontSize: '13px', width: '15%', textAlign: 'left', padding: '9px' }}>Total Inv.Amt</th>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: '13px', width: '17%', textAlign: 'center', padding: '9px' }}><div style={{ width: '75%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input17}</div>  </td>
                                        <td style={{ fontSize: '13px', width: '10%', textAlign: 'center', padding: '9px' }}><div style={{ width: '60%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input18}</div></td>
                                        <td style={{ fontSize: '13px', width: '10%', textAlign: 'center', padding: '9px' }}><div style={{ width: '60%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input19}</div> </td>
                                        <td style={{ fontSize: '13px', width: '10%', textAlign: 'center', padding: '9px' }}><div style={{ width: '60%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input20}</div> </td>
                                        <td style={{ fontSize: '13px', width: '10%', textAlign: 'center', padding: '9px' }}><div style={{ width: '60%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input21}</div></td>
                                        <td style={{ fontSize: '13px', width: '18%', textAlign: 'center', padding: '9px' }}><div style={{ width: '75%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input22}</div></td>
                                        <td style={{ fontSize: '13px', width: '10%', textAlign: 'center', padding: '9px' }}><div style={{ width: '65%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input23}</div></td>
                                        <td style={{ fontSize: '13px', width: '15%', textAlign: 'center', padding: '9px' }}><div style={{ width: '70%', height: '20px', border: '2px solid lightgrey', borderRadius: '2px', padding: '7px 10px' }}>{formData.input24}</div>
                                        </td>
                                    </tr>
                                </table>

                                <Grid item xs={12} sx={{ p: '4px 3px', border: '1px solid lightgrey', }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>4. Transportation Details</Typography>
                                </Grid>

                                <Grid container sx={{ p: '4px 3px', display: 'flex', alignItems: 'flex-start' }}>
                                    <Grid item xs={6} >

                                        <Typography sx={{ fontSize: '10px' }}>Transporter ID & Name : <b>{formData.input25}</b>  </Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography sx={{ fontSize: '10px' }}>Transporter Doc. No & Date : <b>{formData.input26}</b>  </Typography>



                                    </Grid>

                                </Grid>
                                <Grid item xs={12} sx={{ p: '4px 3px', border: '1px solid lightgrey', }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>5. Vehicle Details</Typography>
                                </Grid>
                                <table style={{ width: '100%', margin: '10px' }}>
                                    <tr >
                                        <th style={{ fontSize: '13px', width: '7%', textAlign: 'left', padding: '9px' }}>Mode</th>
                                        <th style={{ fontSize: '13px', width: '32%', textAlign: 'left', padding: '9px' }}>Vehicle / Trans <br></br>Doc No & Dt. </th>
                                        <th style={{ fontSize: '13px', width: '8%', textAlign: 'left', padding: '9px' }}>From </th>
                                        <th style={{ fontSize: '13px', width: '25%', textAlign: 'left', padding: '9px' }}>Entered Date </th>
                                        <th style={{ fontSize: '13px', textAlign: 'left', padding: '9px' }}>Entered By</th>
                                        <th style={{ fontSize: '13px', width: '10%', textAlign: 'left', padding: '9px' }}>CEWB No.<br></br>(If any)</th>
                                        <th style={{ fontSize: '13px', width: '20%', textAlign: 'left', padding: '9px' }}>Multi Veh.Info <br></br>(If any)</th>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: '12px', width: '7%', textAlign: 'left', padding: '9px' }}>{formData.input27} </td>
                                        <td style={{ fontSize: '12px', width: '32%', textAlign: 'left', padding: '9px' }}>{formData.input28}</td>
                                        <td style={{ fontSize: '12px', width: '8%', textAlign: 'left', padding: '9px' }}>{formData.input29}</td>
                                        <td style={{ fontSize: '12px', width: '25%', textAlign: 'rigt', padding: '9px' }}>{formData.input30}</td>
                                        <td style={{ fontSize: '12px', textAlign: 'right', padding: '9px' }}>{formData.input31}</td>
                                        <td style={{ fontSize: '12px', width: '10%', textAlign: 'left', padding: '9px' }}>{formData.input27}</td>
                                        <td style={{ fontSize: '12px', width: '20%', textAlign: 'left', padding: '9px' }}>{formData.input27}</td>
                                    </tr>
                                </table>
                                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'  }}>
                                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '100px', height: '45px', position: 'relative', }}>

                                            <img src={scan1} alt='scan'  style={{ width: '100px', height: '45px', }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{fontSize:'10px'}}>821283374231</Typography>
                                    </Grid>

                                </Grid>


                                {/* </Grid> */}


                            </Grid>

                        </Grid>

                    </Paper>

                    <div style={{ display:state ? "flex":'none', justifyContent: 'center',marginTop:"20px" }}>
                      <Button variant='contained' onClick={handlePrint}>Generate PDF</Button>
                   </div>

                </Grid>
            </Grid>
        </>
    )
}

export default SecondForm