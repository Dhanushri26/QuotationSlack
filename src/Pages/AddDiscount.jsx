import { 
  Box, 
  Divider, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle 
} from '@mui/material';
import PropertyDetails from './PropertyDetails';
import { CloseOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { MenuItem, Select,InputBase} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
const AddDiscount = () => {
  const [open, setOpen] = useState(true); 
  const [selectedValue, setSelectedValue] = useState(""); // State for Select value


  const handleClose = () => {
    setOpen(false); 
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const CustomInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      paddingRight: '1.5rem', 
      fontSize: '0.6rem',
      fontWeight: '600',
      fontFamily: 'Nunito Sans',
      backgroundColor: 'white',
      color: 'black',
    },
  }));

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state with selected value
  };


 
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md"  fullWidth sx={{scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans',height:'100vh'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
      <DialogTitle>Add Discount to unit</DialogTitle>
      <CloseOutlined onClick={handleClose} />
      </Box>
      <Divider sx={{mt:-2,mb:-1}} />
      <DialogContent sx={{overflowY:'auto',scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans'}}>
        <Box display={'flex'}>
          <PropertyDetails />
          <Box sx={{ paddingLeft: 2 ,flexGrow: 1,backgroundColor:'#F8F9FB',pt:'1rem'}}>
            <Typography variant="h6" gutterBottom sx={{fontSize:'0.8rem'}}>
              UNIT PRICE DETAIL
            </Typography>
            <List style={{ mb: 19, fontSize: '10px' }}>
  {["Bill Name Here", "Bill Name Here", "Bill Name Here", "Bill Name Here","Bill Name Here"].map((item, index) => (
    <ListItem key={index} divider style={{ padding: '4px 16px', fontSize: '10px', display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
        <ListItemText primary={item} style={{ fontSize: '10px' }} />
        <ListItemText primary="$1,000" style={{ textAlign: "right", fontSize: '10px' }} /> 
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
        <Typography style={{ fontSize: '12px',fontFamily:'Nunito Sans',color:'grey' }}>Discount</Typography> 
        <div style={{ display: 'flex', gap: '8px' }}> 
          <button style={{ fontSize: '10px',fontFamily:'Nunito Sans',color:'grey',backgroundColor:'white',border:'1px solid lightgrey',borderRadius:'5px',padding:'2px 8px' }}>100,000</button> 
          <Select
      labelId="custom-select-label"
      value={selectedValue} 
      onChange={handleChange} 
      displayEmpty
      IconComponent={null} 
      input={<CustomInput />} 
      renderValue={(value) => (
        <span style={{ fontWeight: 'bold', color: 'black' }}>
          {value ? value : 'AED'} 
        </span>
      )}
      sx={{ height: '1rem', width: '3.4rem' }} 
      onOpen={handleOpen}
      onClose={handleClose}
      endAdornment={ // Custom adornment for icons
        open ? (
          <KeyboardArrowUpIcon sx={{ ml: -2, position: 'absolute', right: 0 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ ml: -2, position: 'absolute', right: 0 }} />
        )
      }
    >
      <MenuItem value="" disabled></MenuItem>
      <MenuItem value="AED" sx={{ fontWeight: 'bold',fontSize:"0.8rem" }}>AED</MenuItem> 
      <MenuItem value="$100,000" sx={{ fontWeight: 'bold',fontSize:"0.8rem" }}>$100,000</MenuItem>
    </Select>
        </div>
        
      
      </div>
    </ListItem>
  ))}
</List>

            <Grid container justifyContent="space-between" style={{ padding: "5px 10px",marginLeft:'0rem' ,backgroundColor:'#E4E8EE',paddingLeft:'2rem',borderRadius:'5px',alignItems:'center' ,mt:"5rem"}}>
              <Typography variant="body1">Final Total</Typography>
              <Typography variant="h6"sx={{mr:'0.3rem'}}>$1,200</Typography>
            </Grid>

            <Divider style={{ margin: "10px 0" }} />

            <Button variant="contained" color="primary" sx={{ width: '100%' }}>
               Update & Save
            </Button>

          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscount;
