import React, { useState } from 'react';
import '../App.css';
import scan from '../assests/img.png'
import html2pdf from 'html2pdf.js';
import { Box, Button, Grid, Typography } from '@mui/material';
import scan2 from '../assests/Screenshot from 2023-11-23 17-49-48.png'
import scan1 from '../assests/scan1.png';

function FormScreen({data}) {
const [state ,setState]=useState(true)
   

    const handlePrint = async() => {

        setState(false)
       await printPdf();
       setTimeout(()=>{
        setState(true)
       },1000)
    
  };

 const printPdf =()=>{
  setTimeout(()=>{
       window.print();
  },200)
 }

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center'}} id="pdf-container">
                <div className="mainbox" style={{height:"1325px"}}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="imgBox" style={{ overflow: 'hidden' }}>
                            <img src={scan} alt="img" style={{ width: '98%', height: '200px' }} />
                        </div>
                    </div>

                    <table style={{ width: '100%', marginTop: '5px', overflow: 'hidden' }}>
                        <tbody >
                            {/* input1 */}
                            {/* <tr>
                            <th style={{width:"20%",height}}></th>
                            <th style={{width:"80%",outline:"none"}}></th>
                            </tr> */}
                            <tr>
                                <td className='first' style={{ width:"30%" }}>E-Way Bill No:</td>
                                <td className="bold" style={{ fontSize: "14px",width:"70%" }}>{data.input1}</td>
                            </tr>
                            {/* input2 */}
                            <tr>
                                <td className='first'>E-Way Bill Date:</td>
                                <td className="bold">{data.input2}</td>

                            </tr>
                            {/* input3 */}
                            <tr>
                                <td className='first'>Generated By:</td>
                                <td className="bold">{data.input3}</td>
                            </tr>
                            {/* input4 */}
                            <tr>
                                <td className='first'>Valid From:</td>
                                <td className="bold">{data.input4}</td>
                            </tr>
                            {/* input5 */}
                            <tr>
                                <td className='first'>Valid Until:</td>
                                <td className="bold">{data.input5}</td>
                            </tr>

                            <tr>
                                <td className="bold" style={{ border: 'none' }}>Part-A</td>

                            </tr>
                            {/* input6 */}
                            <tr>
                                <td className='first'>GSTIN of Supplier</td>
                                <td className="bold">{data.input6}</td>
                            </tr>
                            {/* input7 */}
                            <tr>
                                <td className='first'>Place of Dispatch</td>
                                <td className="bold">{data.input7}</td>

                            </tr>

                            {/* input8 */}
                            <tr>
                                <td className='first'>GSTIN of Recipient</td>
                                <td className="bold">{data.input8}</td>
                            </tr>
                            {/* input9 */}
                            <tr>
                                <td className='first'>Place of Delivery</td>
                                <td className="bold">{data.input9}</td>
                            </tr>
                            {/* input10 */}
                            <tr>
                                <td className='first'>Document No.</td>
                                <td className="bold">{data.input10}</td>
                            </tr>
                            {/* input11 */}
                            <tr>
                                <td className='first'>Document Date</td>
                                <td className="bold">{data.input11}</td>
                            </tr>
                            {/* input12 */}
                            <tr>
                                <td className='first'>Transaction Type:</td>
                                <td className="bold">{data.input12}</td>
                            </tr>
                            {/* input13 */}
                            <tr>
                                <td className='first'>Value of Goods</td>
                                <td className="bold">{data.input13}</td>
                            </tr>

                            {/* input14 */}
                            <tr>
                                <td className='first'>HSN Code</td>
                                <td className="bold">{data.input14}</td>
                            </tr>
                            {/* input15 */}
                            <tr>
                                <td className='first'>Reason for Transportation</td>
                                <td className="bold">{data.input15}</td>
                            </tr>
                            <tr>
                                {/* input16 */}
                                <td className='first'>Transporter</td>
                                <td className="bold">{data.input16}</td>
                            </tr>

                            <tr>
                                <td className="bold" style={{ border: 'none' }}>Part-B</td>
                            </tr>

                        </tbody>
                    </table>
                     <div style={{padding:"5px",border:"1.5px solid #9e9e9e",zIndex:99, marginTop: '170px',backgroundColor:"white"}}>
                    <table style={{ width: '100%', overflow: 'hidden',backgroundColor:"white" }}>
                        <tbody>
                            <tr style={{ width: '100%' }}>
                                <th className="firstt">Mode</th>
                                <th className="second">Vehicle / Trans Doc No & Dt.</th>
                                <th className="third">From</th>
                                <th className="fourth">Entered Date</th>
                                <th className="fifth">Entered By</th>
                                <th className="sixth">CEWB No.(If any)</th>
                                <th className="seventh">MultiVeh.Info(If any)</th>
                            </tr>
                            <tr>
                                <td style={{padding:"20px 4px 20px 4px"}}>{data.input17}</td>
                                <td>{data.input18}</td>
                                <td>{data.input19}</td>
                                <td>{data.input20}</td>
                                <td>{data.input21}</td>
                                <td>{data.input22}</td>
                                <td>{data.input23}</td>
                            </tr>
                        </tbody>
                    </table>
                     </div>
                     <Grid container sx={{ display: 'flex', justifyContent: 'center',mt:"8px", alignItems: 'center', flexDirection:'column'  }}>
                                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box sx={{ width: '100px', height: '40px', position: 'relative', }}>

                                            <img src={scan1} alt='scan'  style={{ width: '100px', height: '40px', }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{fontSize:'10px'}}>821283374231</Typography>
                                    </Grid>

                                </Grid>

                </div>
            </div>

            <div style={{ display: state ?"flex":'none', justifyContent: 'center',marginTop:"20px" }}>
                <Button variant='contained' onClick={handlePrint}>Generate PDF</Button>
            </div>
        </>
    );
}

export default FormScreen;