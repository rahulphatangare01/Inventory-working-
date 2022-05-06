import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './component/navigation/Sidebar';
import Headbar from './component/navigation/Headbar';
import LoginCompo from './component/home/LoginCompo';
import Maindashboard from './component/dashboard/Maindashboard';
import SignCompo from './component/home/SignCompo';
import ProductTable from './component/home/ProductTable';
import ProductInfo from './component/home/Product';
import BuyerInfo from './component/home/BuyerInfo';
import BuyerTable from './component/home/BuyerTable';
import SupplierInfo from './component/home/SupplierInfo';
import SupplierTable from './component/home/SupplierTable';



 
 



const App = () => {
 
  return (<>
    <BrowserRouter>
      
      <Box  >
        <Grid container spacing={1}>
          <Grid item xs={12} >
            {/* heder bar here  */}
            <Headbar />
          </Grid>
          <Grid item xs={2} position="static">
            {/* sidebar   */}
         
            <Sidebar />
          </Grid>
          <Grid item xs={10} position="static" sx={{
            overflow: 'auto', margin: "64px 0 0 0", height: "88vh",
        backgroundImage: 'linear-gradient(to right, #9BC5C3, #09203F)' }}>



            <Routes>
              <Route path="/login" element={<LoginCompo />} />
              <Route path="/signup" element={< SignCompo />} />
              <Route path="/dashboard" element={< Maindashboard />} />
              <Route path="/productinfo" element={< ProductTable />} />
              <Route path="/product" element={ < ProductInfo/>}/>
              <Route path="/buyer" element={ < BuyerInfo/>}/>
              <Route path="/buyertable" element={ < BuyerTable/>}/>
              <Route path="/supplier" element={ < SupplierInfo/>}/>
              <Route path="/suppliertable" element={ < SupplierTable/>}/>




               
              

            </Routes>
          </Grid>
          
        </Grid>
      </Box>
    </BrowserRouter >
    </>
  );
}
export default App