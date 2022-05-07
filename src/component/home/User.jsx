import React from 'react'
import {Paper} from '@mui/material'

import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Grid,  TextField } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';





const style = {
    position: "absolute",
    top: "55%",
    left: "50%",
    height: "50vh",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const inputStyle = { padding: "10px" };
  const avatarStyle = {
    backgroundColor: "#68f79a",
    color: "#ffff",
    fontSize: "40px",
    borderRadius: "50px",
    padding: "8px",
  };
function User() {


      const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    // const update_btn = (ele) => {
    //     handleOpen();
    //    SetUpdateData(ele);
    //  }; 
  return (
    <>
 <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={open}>
            <Box sx = {{amrgin:"auto"}}>
              <Grid>
                <Paper elevation={10} sx={style}>
                  <Grid align="center">
                    <PersonIcon style={avatarStyle} />
                    <Typography variant="h5">User Information</Typography>
                  </Grid>
                  <Grid align="center">
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="name"
                        name="name"
                        // onChange={handleChange}
                        // value={updateData.name}
                        style={inputStyle}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        style={inputStyle}
                        name="email"
                        // onChange={handleChange}
                        // value={updateData.quantity}
                      />
                    </div>
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Phone"
                        style={inputStyle}
                        name="phone"
                        // onChange={handleChange}
                        // value={updateData.price}
                      />
                    </div>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleClose}
                    >
          
                      Cancel
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>


    </>
  )
}

export default User