import { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Switch, Button, Radio, FormControlLabel,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MdHouseboat } from "react-icons/md";

const amenitiesData = [
  {
    id: 1,
    name: 'Amenities name 1',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '', 
  },
  {
    id: 2,
    name: 'Amenities name 2',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
  {
    id: 3,
    name: 'Amenities name 3',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
  {
    id: 4,
    name: 'Amenities name 4',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
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
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ borderBottom: '1px solid lightgrey', mb: 2 }}>
        Add Amenities
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{msScrollbarWidth:'none',scrollbarWidth:'none'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <MdHouseboat style={{ color: "red", fontSize: "1.5rem" }} />
          <Typography variant="h6" color="red" sx={{ml:-14}} >
            {totalAmenities.toString().padStart(2, '0')} Total Amenities
          </Typography>
          <Typography variant="h6" color="red">
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary">
          Available Amenities
        </Typography>
        <List>
          {amenities.map((amenity) => (
            <div key={amenity.id}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', padding: '8px 0', border: '1px solid lightgrey', mb: 1,flexDirection:'row' }}>
                <ListItemAvatar>
                  <Avatar src={amenity.image} alt={amenity.name} sx={{ borderRadius: '5px', ml: 1 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="bold">
                      {amenity.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="textSecondary">
                      ${amenity.price.toFixed(2)} - {amenity.date}
                    </Typography>
                  }
                />
                <Switch
                  edge="end"
                  checked={amenity.selected || false}
                  onChange={() => toggleAmenity(amenity.id)}
                />
              
              
              </ListItem>
              <Box>
              {amenity.selected && (
                <>
                  <FormControlLabel 
                    control={<Radio />}
                    label="Free applicability"
                    sx={{ ml:0,mt:-1,border: '1px solid lightgrey', borderRadius: '5px' ,borderTop:'none',width:'99.8%',borderTopLeftRadius:'0px',borderTopRightRadius:'0px',mb:1}} 
                  />
                </>
              )}
              </Box>
            </div>
          ))}
        </List>
      </DialogContent>
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClose} sx={{ width: '90%' }}>
          Update & Save
        </Button>
      </Box>
    </Dialog>
  );
}
