import { 
  Box, 
  Divider, 
  Grid, 
  IconButton, 
  List, 
  ListItem, 
  ListItemSecondaryAction, 
  ListItemText, 
  Typography, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle 
} from '@mui/material';
import PropertyDetails from './PropertyDetails';
import { CloseOutlined, DeleteOutline } from '@mui/icons-material';
import { useState } from 'react';

const RemoveComponent = () => {
  const [open, setOpen] = useState(true); // Dialog open state

  const handleClose = () => {
    setOpen(false); // Close dialog
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth sx={{scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans',height:'105vh',mt:-4}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 8px' }}>
      <DialogTitle>Remove Property</DialogTitle>
      <CloseOutlined onClick={handleClose}  sx={{cursor:'pointer',mr:'1rem'}}/>
      </Box>
      <Divider sx={{mt:-2,mb:-1}} />
      <DialogContent sx={{overflowY:'auto',scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans'}}>
        <Box display={'flex'}>
          <PropertyDetails />
          <Box sx={{ paddingLeft: 2 ,flexGrow: 1,backgroundColor:'#F8F9FB',pt:'1rem'}}>
            <Typography sx={{fontSize:'1.2rem'}}>
              Unit Price Detail
            </Typography>
            <List sx={{fontSize:'0.3rem'}}>
              {["Bill Name Here", "Bill Name Here", "Bill Name Here", "Bill Name Here", "Amenity Name Here", "Amenity Name Here"].map(
                (item, index) => (
                  <ListItem key={index} divider>
                    <ListItemText primary={item}  sx={{ fontSize: '0.3rem' }}/>
                    <ListItemText primary="$1,000" style={{ textAlign: "right" }} sx={{ fontSize: '0.3rem' }} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteOutline  style={{ color: "red" }} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              )}
            </List>
              <Box sx={{height:'3.2rem'}}>

              </Box>
            <Grid container justifyContent="space-between" style={{ padding: "10px 0",marginLeft:'0rem' ,backgroundColor:'#E4E8EE',paddingLeft:'2rem',borderRadius:'5px',alignItems:'center'}}>
              <Typography variant="body1">Final Total</Typography>
              <Typography variant="h6"sx={{mr:'3rem'}}>$1,200</Typography>
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

export default RemoveComponent;
