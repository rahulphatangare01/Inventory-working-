import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PeiChartCompo from './PieChart'
 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Maindashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* boxes for grid */}
      <Grid container spacing={1}>
        <Grid item xs={2}>

          <Box
            sx={{
              width: 160,
              height: 140,
              borderRadius: 6,

              backgroundImage: 'linear-gradient(135deg, #43CBFF 10%, #9708CC 100%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #C33764 10%, #1D2671 100%)',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant='h5' align='center' sx={{ padding: "10px" }}>
              Seller Count
            </Typography>
            <Typography variant='h3' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              65
            </Typography>


          </Box>


        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              width: 160,
              height: 140,
              borderRadius: 6,
              backgroundImage: 'linear-gradient(135deg, #536976 10%, #292E49 50%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #C33764 10%, #1D2671 100%)',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant='h5' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              Buyer Count
            </Typography>
            <Typography variant='h3' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              33
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={2}>
          <Box
            sx={{
              width: 160,
              height: 140,
              borderRadius: 6,
              backgroundImage: 'linear-gradient(135deg, #F05F57 0%, #360940 100%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #C33764 10%, #1D2671 100%)',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant='h5' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              Product
            </Typography>
            <Typography variant='h3' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              568
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={2}>
          <Box
            sx={{
              width: 160,
              height: 140,
              borderRadius: 6,
              backgroundImage: 'linear-gradient(135deg, #A1C4FD 10%, #FA690A 100%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #C33764 10%, #1D2671 100%)',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant='h5' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              Total Sell
            </Typography>
            <Typography variant='h4' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
              $56802
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={2}>
          <Box
            sx={{
              width: 160,
              height: 140,
              borderRadius: 6,
              backgroundImage: 'linear-gradient(135deg, #CFD9DF 10%,   #3B2667 100%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #C33764 10%, #1D2671 100%)',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
             <Typography variant='h5' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
             Profit 
            </Typography>
            <Typography variant='h4' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
            26%
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Box
            sx={{
              width: 160,
              height: 140,
              borderRadius: 6,
              backgroundImage: 'linear-gradient(135deg, #EC9F05 20%, #FF4E00 50%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #C33764 10%, #1D2671 100%)',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant='h5' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
       Stock 
            </Typography>
            <Typography variant='h4' align='center' sx={{ padding: "10px", color: "#FFFF" }}>
        2547
            </Typography>
          </Box>
        </Grid>

        {/* for graph */}
        <Grid item xs={4}>
          <PeiChartCompo />

        </Grid>
        <Grid item xs={4}>
          {/* <LineGraphCompo/> */}
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>

      </Grid>

    </Box>
  );
}
export default Maindashboard