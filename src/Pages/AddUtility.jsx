import { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Switch, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BsStars } from "react-icons/bs";

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
  const [utility, setUtility] = useState(UtilityData);

  const toggleUtility = (id) => {
    setUtility((prev) =>
      prev.map((util) =>
        util.id === id ? { ...util, selected: !util.selected } : util
      )
    );
  };

  const totalUtility = utility.filter((util) => util.selected).length;
  const totalPrice = utility.reduce((total, util) => {
    return util.selected ? total + util.price : total;
  }, 0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth sx={{ scrollbarWidth: 'none', msScrollbarWidth: 'none', fontFamily: 'Nunito Sans' }}>
      <DialogTitle sx={{ borderBottom: '1px solid lightgrey', mb: 2, msScrollbarWidth: 'none', scrollbarWidth: 'none', overflowY: 'scroll' }}>
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
      <DialogContent sx={{ overflowY: 'scroll', msScrollbarWidth: 'none', scrollbarWidth: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, backgroundColor: '#DBF0F180', padding: '1rem' }}>
          <BsStars sx={{ mr: '-3rem', pr: '-4rem' }} style={{ color: 'lightblue', fontSize: '1.5rem',padding : '0.5rem',border:'2px solid lightblue',borderRadius:'0.4rem' }} />
          <Typography variant="h6" color="#6DAFB3" sx={{ ml: -14 }}>
            {totalUtility.toString().padStart(2, '0')} Total Utility
          </Typography>
          <Typography variant="h6" color="#6DAFB3">
            ${totalPrice.toFixed(2)}
          </Typography>
        </Box>

        <Typography variant="body1" color="textSecondary">
          Available Utility
        </Typography>
        <List sx={{ overflowY: 'scroll', msScrollbarWidth: 'none', scrollbarWidth: 'none' }}>
          {utility.map((util) => (
            <ListItem key={util.id} sx={{ display: 'flex', alignItems: 'center', padding: '8px 0', border: '1px solid lightgrey', mb: 1 }}>
              <ListItemAvatar>
                <Avatar src={util.image} alt={util.name} sx={{ borderRadius: '5px', ml: 1 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight="bold">
                    {util.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    ${util.price.toFixed(2)} - {util.date}
                  </Typography>
                }
              />
              <Switch
                edge="end"
                checked={util.selected || false}
                onChange={() => toggleUtility(util.id)}
              />
            </ListItem>
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
