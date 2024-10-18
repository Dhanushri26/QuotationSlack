import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, TextField, Button, ToggleButtonGroup, ToggleButton, Box, Typography,InputAdornment,MenuItem, LinearProgress} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import  { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export default function PrimaryComponent() {
  const [open, setOpen] = useState(true);
  const [revenueType, setRevenueType] = useState('Lease');
  const [componentBasedOn, setComponentBasedOn] = useState('Amount');

  const handleClose = () => setOpen(false);
  const handleRevenueChange = (event, newType) => setRevenueType(newType);
  const handleComponentBasedChange = (event, newValue) => setComponentBasedOn(newValue);

  const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color || '#1a90ff', 
      ...theme.applyStyles('dark', {
        backgroundColor: color || '#308fe8', 
      }),
    },
  }));
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        },
      }}
      msScrollbarWidth="none"
      scrollbarWidth="none"
    >
      <DialogTitle sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: '#333',
        paddingBottom:'-1.5rem',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '0.75rem',
        marginTop:'-1.5rem',
      }}>
        Pricing Table
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ paddingTop: '1rem' , msScrollbarWidth:"none",
      scrollbarWidth:"none"}}>
        <Box sx={{ paddingBottom: '1rem' }}>
         
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#FEEAEA80',
              color: '#B3776D',
              textTransform: 'none',
              fontWeight: '500',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              marginBottom: '2rem',
              ml:'-1rem',
              mr:'-5rem',
              paddingRight: '0.5rem',
              width:'36rem'
            }}
          >
            Primary Pricing Component
            <IconButton size="small" sx={{ color: '#B3776D' }}>
              <CloseIcon />
            </IconButton>
          </Button>

<Box display={'flex'}>
          <Box sx={{ marginBottom: '1.5rem',ml:'-1rem', flex:2 }}>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Revenue Type
            </Typography>
            <ToggleButtonGroup
              value={revenueType}
              exclusive
              onChange={handleRevenueChange}
              sx={{
                width: '50%',
                '& .MuiToggleButton-root': {
                  borderRadius: '5px',
                  padding: '7px 15px',
                  textTransform: 'none',
                  fontWeight: '500',
                  borderColor: '#e0e0e0',
                  flex: 1,
                  marginInline:'2px',
                  color: 'grey',
                  
                },
                '& .Mui-selected': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                },
              }}
            >
              <ToggleButton value="Lease" sx={{color:'#1976d2'}}>Lease</ToggleButton>
              <ToggleButton value="Sales">Sales</ToggleButton>
              <ToggleButton value="Manage">Manage</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box sx={{ marginBottom: '1.5rem',ml:'1.5rem' ,flex:2}}>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500, color:'black' }}>
              Pricing Component
            </Typography>
            <TextField
  variant="outlined"
  size="small"
  fullWidth
  placeholder="Pricing Component"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <KeyboardArrowDownIcon />
      </InputAdornment>
    ),
    sx: {
      '& ::placeholder': {
        fontWeight: 'bold',  
        color:'black',
        letterSpacing:'-0.4px',
      },
    },
  }}
  sx={{ backgroundColor: '#f9f9f9', borderRadius: '8px',color:'black' }}
/>
          </Box>
          </Box>
          <Box sx={{display:'flex',flex:2}}>
          <Box sx={{ marginBottom: '1.5rem',ml:'-1rem',width:'50%' }}>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Tax Group For Pricing Component
            </Typography>

<TextField
  variant="outlined"
  size="small"
  fullWidth
  width='15rem'
  select
  value="GST"
  placeholder="Select Tax Group"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <KeyboardArrowDownIcon />
      </InputAdornment>
    ),
    disableUnderline: true, 
  }}
  sx={{ 
    backgroundColor: '#f9f9f9', 
    borderRadius: '8px',
    '& .MuiSelect-icon': {
      display: 'none', 
    },
    '& ::placeholder': {
      fontWeight: 'bold',  
      color: 'black',      
    },
  }}
>
  <MenuItem value="GST">GST</MenuItem>
  <MenuItem value="VAT">VAT</MenuItem>
  <MenuItem value="Sales Tax">Sales Tax</MenuItem>
</TextField>
          </Box>

          <Box sx={{ marginBottom: '1.5rem',ml:"1rem" }}>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Component Based On
            </Typography>
            <ToggleButtonGroup
              value={componentBasedOn}
              exclusive
              onChange={handleComponentBasedChange}
              sx={{
                width: '100%',
                '& .MuiToggleButton-root': {
                  borderRadius: '8px',
                  padding: '7px 6px',
                  textTransform: 'none',
                  fontWeight: '500',
                  borderColor: '#e0e0e0',
                  flex: 1,
                  marginInline:'0px',
                  marginRight:'8px',
                },
                '& .Mui-selected': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                },
              }}
            >
              <ToggleButton value="Amount">Amount</ToggleButton>
              <ToggleButton value="UOM">UOM</ToggleButton>
            </ToggleButtonGroup>
          </Box>
</Box>
          <Box sx={{ alignItems: 'center', marginBottom: '2rem' }}>
            <Typography variant="body2" sx={{ flexGrow: 1, fontWeight: 500,ml:'-1rem',mb:'4px' }}>
              UOM Value
            </Typography>
            
<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '2rem',width:'120rem',ml:'-1rem' ,flex:1 ,}}>
  <TextField
    variant="outlined"
    size="small" width="40rem" fullWidth    value="200"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <Typography variant="body2" sx={{ marginLeft: '0.5rem' }}>
            SAR / Total
          </Typography>
        </InputAdornment>
      ),
    }}
    sx={{ width: '30%', backgroundColor: '#f9f9f9', borderRadius: '8px' }}
  />
</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem',ml:'-1rem' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', borderRadius: '8px', padding: '0.5rem' }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>Maximum</Typography>
    <Box sx={{ width: '100%' }}>
    <BorderLinearProgress variant="determinate" value={100} color='red' />

    </Box>
    <TextField 
      value="$ 190" 
      size="small" 
      sx={{ marginTop: '0.5rem', backgroundColor: '#fff', borderRadius: '8px' }} 
    />
     <Typography variant="body2" sx={{ fontWeight: 500,fontSize:10 ,mt:'5px',color:'grey'}}>Sq.Yard/Monthly</Typography>

  </Box>
  
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', borderRadius: '8px', padding: '0.5rem' }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>Recommended</Typography>
    <BorderLinearProgress variant="determinate" value={70} color='lightgreen' />

    <TextField 
      value="$ 120" 
      size="small" 
      sx={{ marginTop: '0.5rem', backgroundColor: '#fff', borderRadius: '8px' }} 
    />
     <Typography variant="body2" sx={{ fontWeight: 500,fontSize:10 ,mt:'5px',color:'grey'}}>Sq.Yard/Monthly</Typography>

  </Box>

  <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', borderRadius: '8px', padding: '0.5rem' }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>Minimum</Typography>
    <BorderLinearProgress variant="determinate" value={40} color='orange' />

    <TextField 
      value="$ 100" 
      size="small" 
      sx={{ marginTop: '0.5rem', backgroundColor: '#fff', borderRadius: '8px' }} 
    />
        <Typography variant="body2" sx={{ fontWeight: 500,fontSize:10 ,mt:'5px',color:'grey'}}>Sq.Yard/Monthly</Typography>

  </Box>
</Box>


          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" sx={{ width: '48%', borderRadius: '8px' }}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '48%', borderRadius: '8px', textTransform: 'none' }}
            >
              Create Pricing Component
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
