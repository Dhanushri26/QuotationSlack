import { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Switch, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const amenitiesData = [
  {
    id: 1,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '', 
  },
  {
    id: 2,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
  {
    id: 3,
    name: 'Amenities name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
  {
    id: 4,
    name: 'Amenities name',
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
    <Dialog open={open} onClose={handleClose} sx={{width:'100rem',maxWidth:'100%'}}>
      <DialogTitle>
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
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 ,backgroundColor:'#9426262E',padding:'1rem'}}>
          <Typography variant="h6" color="red">
            {totalAmenities.toString().padStart(2, '0')} Total Amenities
          </Typography>
          <Typography variant="h6" color="secondary">
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
  <Typography variant="body1" color="textSecondary">
    Available Amenities
  </Typography>
        <List>
          {amenities.map((amenity) => (
            <ListItem key={amenity.id} sx={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
              <ListItemAvatar>
                <Avatar src={amenity.image} alt={amenity.name} />
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
          ))}
        </List>
      </DialogContent>

      {/* Footer with the update button */}
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Update & Save
        </Button>
      </Box>
    </Dialog>
  );
}
