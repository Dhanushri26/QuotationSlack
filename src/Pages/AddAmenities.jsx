import { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Switch, Button, Radio, FormControlLabel,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { MdOutlineHouseboat } from "react-icons/md";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 1,
    mr:-2,
    pr:-2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'lightgrey', 
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: '#5AC782', 
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#5AC782',
      border: '0px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
    margin:0,
    backgroundColor: '#9E9E9E', 
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA', 
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#9E9E9E',
    }),
  },
}));

const amenitiesData = [
  {
    id: 1,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGFtZW50aWVzfGVufDB8fDB8fHww', 
  },
  {
    id: 2,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://plus.unsplash.com/premium_photo-1684348962187-988fc3d7f024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://media.istockphoto.com/id/181146600/photo/just-like-heaven.webp?a=1&b=1&s=612x612&w=0&k=20&c=maP0DDJ6Ss7ijdOsh6Z9MKkmW4zD_QQ0OObQ5pMlkj0=',
  },
  {
    id: 4,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://images.unsplash.com/photo-1561133211-6067fc8e7348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtZXN1bWVudCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://images.unsplash.com/photo-1546102426-08d5135b1046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyZWV0fGVufDB8fDB8fHww',
  },
  {
    id: 6,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://images.unsplash.com/photo-1511772897617-5f9c9e7d83e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: 'https://images.unsplash.com/photo-1524079179893-98f7551098d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxheWdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

export default function AddAmenities() {
  const [open, setOpen] = useState(true);
  const [amenities, setAmenities] = useState(amenitiesData);

  const toggleAmenity = (id) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, selected: !amenity.selected } : amenity
      )
    );
  };

  const totalAmenities = amenities.filter((amenity) => amenity.selected).length;
  const totalPrice = amenities.reduce((total, amenity) => {
    return amenity.selected ? total + amenity.price : total;
  }, 0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth sx={{scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans', paddingInline:'1rem' ,height:'110vh',mt:-4}}>
      <DialogTitle sx={{ borderBottom: '1px solid lightgrey', mb: 2 ,fontFamily:'Nunito Sans',fontSize:'1.2rem',fontWeight:'bold' }}>
        Add Amenities
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[800],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{msScrollbarWidth:'none',scrollbarWidth:'none'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 , backgroundColor:'#FEEAEA80',padding :'1rem 0.3rem',borderRadius:'0.32rem'}}>
          <MdOutlineHouseboat style={{ color: "#B3776D", fontSize: "1.5rem" }} />
          <Typography variant="h6" color="#B3776D" sx={{ml:-14,fontFamily:'Nunito Sans',fontWeight:'600'}} >
            {totalAmenities.toString().padStart(2, '0')} Total Amenities
          </Typography>
          <Typography variant="h6" color="#B3776D" sx={{fontWeight:'bold',fontFamily:'Nunito Sans',mr:0.5}}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary" sx={{fontFamily:'Nunito Sans',color:'#98A0AC'}}>
          Available Amenities
        </Typography>
        <List>
          {amenities.map((amenity) => (
            <div key={amenity.id}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', padding: '8px 0', border: '1px solid #E4E8EE', mb: 1.5,flexDirection:'row',paddingInline:'0rem' ,borderRadius:'5px',fontFamily:'Nunito Sans'}}>
                <ListItemAvatar>
                  <Avatar src={amenity.image} alt={amenity.name} sx={{ borderRadius: '4px', ml: 1,height:'2.8rem',width:'2.6rem' }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="bold" sx={{ fontFamily:'Nunito Sans'}}>
                      {amenity.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="textSecondary" sx={{fontFamily:'Nunito Sans'}}>
                      ${amenity.price.toFixed(2)} - {amenity.date}
                    </Typography>
                  }
                />
                {/* <Switch
                  edge="end"
                  checked={amenity.selected || false}
                  onChange={() => toggleAmenity(amenity.id)}
                /> */}
              <IOSSwitch sx={{ m: 1 }} checked={amenity.selected || false} onChange={() => toggleAmenity(amenity.id)} />
              
              </ListItem>
              <Box>
              {amenity.selected && (
                <>
                  <FormControlLabel 
                    control={<Radio  size="small" sx={{
                      color:'grey',
                      '&.Mui-checked': {
                        color: '#5078E1',
                      },
                      
                    }}/>}
                    label="Free applicability"
                    sx={{ ml:0,mt:-1.5,border: '1px solid #E4E8EE', borderRadius: '5px' ,borderTop:'none',width:'99.8%',borderTopLeftRadius:'0px',borderTopRightRadius:'0px',mb:1,fontSize:'0.5rem' 
                      ,'& .MuiFormControlLabel-label': {
      color: 'lightgray', 
      fontSize: '0.9rem',
    },

                    }} 
                    
                  />
                </>
              )}
              </Box>
            </div>
          ))}
        </List>
      </DialogContent>
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClose} sx={{ width: '90%',textTransform:'none',fontFamily:'Nunito Sans'}}>
          Update & Save
        </Button>
      </Box>
    </Dialog>
  );
}
