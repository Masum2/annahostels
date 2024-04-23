import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react";

import galler21 from '../../images/12.png'
import galler22 from '../../images/13.png'
import galler23 from '../../images/14.png'
import galler24 from '../../images/15.png'
import galler25 from '../../images/16.png'
import galler26 from '../../images/17.png'
import galler27 from '../../images/18.png'
import galler28 from '../../images/19.png'
const Gallery2 = () => {
    const [activeTab, setActiveTab] = useState('all');

    const openTab = (tabName) => {
      setActiveTab(tabName);
    };
  return (
    <div>
           <Box sx={{}}>
         <Box>
            <Typography sx={{fontSize:'20px',fontWeight:500,padding:'20px',textAlign:'center'}}>Gallery</Typography>
            <Typography sx={{fontSize:'14px',fontWeight:400,textAlign:'center'}}>Annapurna Hostels: A well known Brand for students and educator seeking an ideal Home in close proximity to the college campus</Typography>

         </Box>
         <Box sx={{display:'flex',justifyContent:'center'}}>
            
         <div>
    <Box sx={{display:'flex',justifyContent:'center',marginTop:'10px',marginBottom:'10px'}}>
    <button onClick={() => openTab('all')}>All</button>
      <button onClick={() => openTab('bedroom')}>Bedroom</button>
      <button onClick={() => openTab('outside')}>Outside</button>
    </Box>

      <div style={{ display: activeTab === 'all' ? 'block' : 'none' }}>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
<img src={galler21}/>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src={galler22}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler23}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler24}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler25}/>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src={galler26}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler27}/>
</Grid>
<Grid item xs={12} sm={3}>
    
<img src={galler28}/>
</Grid>
        </Grid>
      </div>

      <div style={{ display: activeTab === 'bedroom' ? 'block' : 'none' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
<img src={galler25}/>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src={galler26}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler27}/>
</Grid>
<Grid item xs={12} sm={3}>
    
<img src={galler28}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler25}/>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src={galler26}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler27}/>
</Grid>
<Grid item xs={12} sm={3}>
    
<img src={galler28}/>
</Grid>
        </Grid>
      </div>

      <div style={{ display: activeTab === 'outside' ? 'block' : 'none' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
<img src={galler21}/>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src={galler22}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler23}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler24}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler25}/>
        </Grid>
        <Grid item xs={12} sm={3}>
        <img src={galler26}/>
</Grid>
<Grid item xs={12} sm={3}>
<img src={galler27}/>
</Grid>
<Grid item xs={12} sm={3}>
    
<img src={galler28}/>
</Grid>
        </Grid>
      </div>
    </div>
    </Box>
     </Box>
    </div>
  )
}

export default Gallery2
