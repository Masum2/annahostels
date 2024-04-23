import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import test1 from '../images/test1.png';
import test2 from '../images/test2.png';
const TestiMonialMain = () => {
  return (
    <div>
      <Box sx={{
        background:'#EDF7F7',
        height:'450px',
        
      }}>
     <Box sx={{display:'flex',justifyContent:'center'}}>
         <Box>
            <Typography sx={{fontSize:'20px',fontWeight:500,padding:'20px',textAlign:'center'}}>Genuine Testimonal</Typography>
            <Typography sx={{fontSize:'14px',fontWeight:400,}}>Voice of Delight, Real Stories,real smailes, actual feedback from our happy guest</Typography>
            <Box sx={{
                padding:'10px',
                background:'#FFF8E7',
                marginTop:'10px'
            }}>
                <Typography sx={{fontSize:'24px',fontWeight:700, textAlign:'center'}}>Every Stay Has a Story</Typography>
            </Box>
         </Box>
         
     </Box>
     <Box sx={{padding:'20px'}}>
<Grid container spacing={2}>
 <Grid item xs={12} sm={6}>
   <Grid container spacing={2}>
      <Grid item sm={4}>
<img src={test1}/>
      </Grid>
      <Grid item sm={8}>
<Typography sx={{fontWeight:'bold'}}>Jai Kriplani</Typography>
<Typography sx={{color:'orange'}}>Noida Delhi</Typography>
<Typography>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Typography>
</Grid>
   </Grid>
 </Grid>
 <Grid item xs={12} sm={6}>
   <Grid container spacing={2}>
      <Grid item sm={4}>
<img src={test2}/>
      </Grid>
      <Grid item sm={8}>
<Typography sx={{fontWeight:'bold'}}>Zara Lokhandwala</Typography>
<Typography sx={{color:'orange'}}>Mumbai Moharashtra</Typography>
<Typography>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Typography>
</Grid>
   </Grid>
 </Grid>
</Grid>
</Box>
      </Box>
    </div>
  )
}

export default TestiMonialMain
