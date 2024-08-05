import React from 'react';
import {
  Box,
  
  Typography,
  Grid,
  
} from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Navbar from '../Navbar/Navbar';
import "./ragAbout.css"
import Footer from '../Footer/Footer';


export default function RagAbout() {
 
  return (
    <div>

        <Navbar/>
    <Box
      className="rag-pick"
      sx={{
          display: 'flex',
          width: '98.94vw',
          flexDirection: 'column',
          height: 'auto',
        }}
        >
      <Box className="rag-top">
        <Box className="rag-top-content">
          <p className="rag-top-p">
            More than just rag pickers,
            <br />
            We&apos;re Eco-Connectors.
          </p>
        </Box>
        
      </Box>
      <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '4rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          Why join us?
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ textAlign: 'center', paddingLeft: '15rem' }}
          >
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/earn-money.png"
                style={{ width: '8rem', height: '8rem' }}
                />
              <Typography variant="h5">Earn money</Typography>
              <Typography>
                Turn your rags into cash! Our app connects you with customers
                looking to recycle, letting you earn a steady income on your own
                schedule.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/eco-friendly.png"
                style={{ width: '8rem', height: '8rem' }}
                />
              <Typography variant="h5">Eco-friendly</Typography>
              <Typography>
                Our platform promotes a circular economy by giving valuable
                materials a second life. Join us and make a difference for the
                planet!
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/flexible-hrs.png"
                style={{ width: '8rem', height: '8rem' }}
                />
              <Typography variant="h5">Flexible hours</Typography>
              <Typography>
                No fixed schedule, no boss breathing down your neck. Our app
                gives you the freedom to work at your own pace and set your own
                hours.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/easy-to-use.png"
                style={{ width: '8rem', height: '8rem' }}
                />
              <Typography variant="h5">Easy to use</Typography>
              <Typography>
                Simple to use and easy to navigate, our work makes it a breeze
                to connect with customers and manage your jobs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '4rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          How it works?
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item lg={4}>
            <Looks1Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Sign up</Typography>
            <Typography>Fill the form above to join us.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks2Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Collect Rag</Typography>
            <Typography>Collect rag from your area.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks3Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Get paid</Typography>
            <Typography>Get paid for the waste you collect.</Typography>
          </Grid>
        </Grid>
        
      </Box> 
          
    </Box>
        </div>
    // <Footer/>
  );
}
