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
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth sx={{scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans',height:'100vh'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
      <DialogTitle>Remove Property</DialogTitle>
      <CloseOutlined onClick={handleClose} />
      </Box>
      <Divider sx={{mt:-2,mb:-1}} />
      <DialogContent sx={{overflowY:'auto',scrollbarWidth:'none',msScrollbarWidth:'none',fontFamily:'Nunito Sans'}}>
        <Box display={'flex'}>
          <PropertyDetails />
          <Box sx={{ paddingLeft: 2 ,flexGrow: 1,backgroundColor:'#F8F9FB',pt:'1rem'}}>
            <Typography variant="h6" gutterBottom>
              Unit Price Detail
            </Typography>
            <List>
              {["Bill Name Here", "Bill Name Here", "Bill Name Here", "Bill Name Here", "Amenity Name Here", "Amenity Name Here"].map(
                (item, index) => (
                  <ListItem key={index} divider>
                    <ListItemText primary={item} />
                    <ListItemText primary="$1,000" style={{ textAlign: "right" }} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteOutline  style={{ color: "red" }}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              )}
            </List>

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
