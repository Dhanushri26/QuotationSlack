import { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Switch, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const UtilityData = [
  {
    id: 1,
    name: 'Utility name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '', 
  },
  {
    id: 2,
    name: 'Utility name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
  {
    id: 3,
    name: 'Utility name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
  {
    id: 4,
    name: 'Utility name',
    price: 20.00,
    date: 'Valid Feb 22 - 12 Feb 23',
    image: '',
  },
];

export default function AddUtility() {
  const [open, setOpen] = useState(true);
  const [Utility, setUtility] = useState(UtilityData);

  const toggleAmenity = (id) => {
    setUtility((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, selected: !amenity.selected } : amenity
      )
    );
  };

  const totalUtility = Utility.filter((amenity) => amenity.selected).length;
  const totalPrice = Utility.reduce((total, amenity) => {
    return amenity.selected ? total + amenity.price : total;
  }, 0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Add Utility
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" color="textSecondary">
            {totalUtility.toString().padStart(2, '0')} Total Utility
          </Typography>
          <Typography variant="h6" color="secondary">
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>

        <List>
          {Utility.map((amenity) => (
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

      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Update & Save
        </Button>
      </Box>
    </Dialog>
  );
}
