import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Dialog from '@mui/material/Dialog';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PricingTable from '../Pages/PricingTable'; // import PricingTable
import AddAmenities from '../Pages/AddAmenities'; // import AddAmenities component
import AddUtilities from '../Pages/AddUtility'; // import AddUtilities component
import RemoveComponent from '../Pages/RemoveComponent';
import Unit from '../Pages/Unit';
const CustomIconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
});

export default function RealEstateCard() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(null); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentComponent(null); 
  };

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    if (option === 'Add Pricing Component') {
      setCurrentComponent(<PricingTable />); 
    } else if (option === 'Add Amenities') {
      setCurrentComponent(<AddAmenities />);
    } else if (option === 'Add Utilities') {
      setCurrentComponent(<AddUtilities />); 
    } else if (option === 'Remove Component') {
      setCurrentComponent(<RemoveComponent />);
    } else if (option === 'Add Discount') {
       setCurrentComponent(<Unit/>)
    }
    
    handleClickOpen(); 
    handleDropdownClose(); 
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 1.5,
        maxWidth: 300,
        fontFamily: 'Nunito Sans',
      }}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ ml: -3, mr: -2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, fontFamily: 'Nunito Sans' }}>
          Jumeirah Estate
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, fontFamily: 'Nunito Sans' }}>
          $ 1,200
        </Typography>
      </Stack>

      <Typography
        variant="body2"
        color="grey"
        sx={{ fontSize: 12, ml: -3, mr: -1, fontFamily: 'Nunito Sans' }}
      >
        Jumeirah Golf Estate • 2000 Sq.Ft
      </Typography>
      
      <Stack
        direction="row"
        spacing={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 1, mb: 1, color: '#969595', ml: -2, width: '100%' }}
      >
        <CustomIconBox>
          <LocalHotelOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            2
          </Typography>
        </CustomIconBox>

        <Typography variant="body2" sx={{ mx: 1 }}>
          •
        </Typography>

        <CustomIconBox>
          <BathtubOutlinedIcon fontSize="small" />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            2
          </Typography>
        </CustomIconBox>

        <Typography variant="body2" sx={{ mx: 1 }}>
          •
        </Typography>

        <CustomIconBox>
          <HomeOutlinedIcon fontSize="small" />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            2BHK
          </Typography>
        </CustomIconBox>
      </Stack>

      <Typography
        variant="body2"
        sx={{
          color: '#2979ff',
          textAlign: 'center',
          cursor: 'pointer',
          mb: -1.5,
          fontFamily: 'Nunito Sans',
          pt: '0.5rem',
        }}
        onClick={handleDropdownOpen}
      >
        <Link href="#" underline="none">
          + Customise
        </Link>
      </Typography>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        sx={{ mt: 1, ml: 2, fontFamily: 'Nunito Sans' }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick('Add Pricing Component')}
          sx={{ fontFamily: 'Nunito Sans', borderBottom: '1px solid lightgray', pt: 0 }}
        >
          Add Pricing Component
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick('Add Amenities')}
          sx={{ fontFamily: 'Nunito Sans', borderBottom: '1px solid lightgray' }}
        >
          Add Amenities
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick('Add Utilities')}
          sx={{ fontFamily: 'Nunito Sans', borderBottom: '1px solid lightgray' }}
        >
          Add Utilities
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick('Add Discount')}
          sx={{ fontFamily: 'Nunito Sans', borderBottom: '1px solid lightgray'}}
        >
          Add Discount
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick('Remove Component')}
          sx={{ fontFamily: 'Nunito Sans', pb: 0 }}
        >
          Remove Component
        </MenuItem>
      </Menu>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {currentComponent} 
      </Dialog>
    </Box>
  );
}
