import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import apartment1 from '../../images/apart1.png';

const Apartment = () => {
  return (
    <div>
      <Box sx={{background:'#EDF7F7',margin:'40px',paddingBottom:'20px'}}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "55px" }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "700", fontSize: {xs:'16px',sm:"24px"}, textAlign: "center",marginTop:'15px' }}
          >
           We have got options for you
          </Typography>
          <Typography
            sx={{ fontWeight: "7400", fontSize: "13px", textAlign: "center",paddingTop:'7px',marginLeft:'5px' }}
          >
student hosting made easy,we understand the student journey,because we lived it!          </Typography>
        </Box>

     
      </Box>
      <Grid container spacing={2}>
           <Grid item xs={12} sm={6}>
         <Box sx={{display:'flex',width:'100%',paddingLeft:{xs:'0px',sm:'50px'},marginTop:'20px'}}>
          <img src={apartment1}/>
          <Box sx={{width:'100%',background:'#98A9FC',paddingLeft:'20px',paddingTop:'10px'}}>
            <Typography sx={{color:'#FFF',fontSize:'24px'}}>Studio Apartment </Typography>
            <Typography sx={{color:'#FFF',justifyContent:'flex-start'}}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</Typography>
          </Box>
         </Box>
           </Grid>
       <Grid item xs={12} sm={6}>
         <Box sx={{display:'flex',width:'100%',marginTop:'20px',paddingRight:{xs:'0px',sm:'50px'}}}>
          <img src={apartment1}/>
          <Box sx={{width:'100%',background:'#98A9FC',paddingLeft:'20px',paddingTop:'10px'}}>
            <Typography sx={{color:'#FFF',fontSize:'24px'}}>Studio Apartment </Typography>
            <Typography sx={{color:'#FFF',justifyContent:'flex-start'}}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</Typography>
          </Box>
         </Box>
           </Grid>
                  <Grid item xs={12} sm={6}>
         <Box sx={{display:'flex',width:'100%',paddingLeft:{xs:'0px',sm:'50px'}}}>
          <img src={apartment1}/>
          <Box sx={{width:'100%',background:'#98A9FC',paddingLeft:{xs:'0px',sm:'20px'},paddingTop:'10px'}}>
            <Typography sx={{color:'#FFF',fontSize:'24px'}}>Studio Apartment </Typography>
            <Typography sx={{color:'#FFF',justifyContent:'flex-start'}}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</Typography>
          </Box>
         </Box>
           </Grid>
                  <Grid item xs={12} sm={6}>
         <Box sx={{display:'flex',width:'100%',paddingRight:{xs:'0px',sm:'50px'}}} >
          <img src={apartment1}/>
          <Box sx={{width:'100%',background:'#98A9FC',paddingLeft:{xs:'0px',sm:'20px'},paddingTop:'10px'}}>
            <Typography sx={{color:'#FFF',fontSize:'24px'}}>Studio Apartment </Typography>
            <Typography sx={{color:'#FFF',justifyContent:'flex-start'}}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</Typography>
          </Box>
         </Box>
           </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Apartment
