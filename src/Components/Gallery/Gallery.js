import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import mobile from '../../images/m.png';
import gallery1 from '../../images/g1.png';
import gallery2 from '../../images/g2.png';
import gallery3 from '../../images/g3.png';
import gallery4 from '../../images/g4.png';
import gallery5 from '../../images/g5.png';
import gallery6 from '../../images/g6.png';
import gallery7 from '../../images/g7.png';
import gallery8 from '../../images/g8.png';
import gallery9 from '../../images/g9.png';
import gallery10 from '../../images/g10.png';
import gallery11 from '../../images/g11.png';
import gallery12 from '../../images/g12.png';
import gallery13 from '../../images/g13.png';
import gallery15 from '../../images/g15.png';
import gallery16 from '../../images/g16.png';
import gallery17 from '../../images/g17.png';
import gallery18 from '../../images/g18.png';
const Gallery = () => {

  const itemData = [
    {
      img: gallery10,
      title: 'Bed',
    },
    {
      img: gallery13,
      title: 'Kitchen',
    },
    {
      img: gallery17,
      title: 'Laptop',
    },
 
    {
      img: gallery11,
      title: 'Books',
    },

  
    
  
    {
      img: gallery15,
      title: 'Blinds',
    },
    {
      img: gallery12,
      title: 'Sink',
    },
    {
      img: gallery16,
      title: 'Chairs',
    },
    {
      img: gallery18,
      title: 'Kitchen',
    },
    
 


  ];
  return (
    <Box sx={{margin:'20px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <img src={gallery1} className="d-block w-100" alt="slider2" style={{ height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <img src={gallery2} className="d-block w-100" alt="slider1" style={{ height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <img src={gallery3} className="d-block w-100" alt="slider3" style={{ height: '100%' }} />
        </Grid>
      </Grid>


      <Box sx={{marginTop:'20px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src={gallery4} className="d-block w-100" alt="slider2" style={{ height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={gallery5} className="d-block w-100" alt="slider1" style={{ height: '100%' }} />
        </Grid>
      
      </Grid>
      </Box>

      {/* dsf */}
      <Box sx={{marginTop:'20px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3.5}>
          <img src={gallery6} className="d-block w-100" alt="slider2" style={{ height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <img src={gallery7} className="d-block w-100" alt="slider1" style={{ height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={gallery8} className="d-block w-100" alt="slider1" style={{ height: '100%' }} />
        </Grid>
      </Grid>
      </Box>

      {/* Mobile section */}
      <Box sx={{display:'flex', marginTop:'50px'}}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box sx={{display:'flex',justifyContent:'right'}}>
        <img src={mobile} className="d-block w-50" alt="slider1" style={{  }} />
        </Box>
        
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box sx={{}}>
            <Typography sx={{
                fontSize:'25px',
                fontWeight:'bold',
                marginTop:'50px'
            }}>App Enabled Living</Typography>
          
                <img src={gallery9} className="d-block w-100" alt="slider1" style={{ height: '100%' }} />

          
        </Box>
        </Grid>
      </Grid>
      </Box>
      {/* image gallery */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "55px" }}
      >
        <Box sx={{display:'flex'}}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "30px", textAlign: "center",color:'#C21800' }}
          >
           EVENTS
          </Typography>
          <Typography
            sx={{color:'#C21800', fontWeight: "400", fontSize: "18px", textAlign: "center",paddingTop:'15px',marginLeft:'5px' }}
          >
           & Celebration
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Box>
  )
}

export default Gallery;
