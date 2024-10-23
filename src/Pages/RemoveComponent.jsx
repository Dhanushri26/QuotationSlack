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
  DialogTitle,
} from "@mui/material";
import PropertyDetails from "./PropertyDetails";
import { CloseOutlined, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";

const RemoveComponent = () => {
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        scrollbarWidth: "none",
        msScrollbarWidth: "none",
        fontFamily: "Nunito Sans",
        height: "105vh",
        mt: -4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "7px 10px",
          mt: -1,
        }}
      >
        <DialogTitle>Remove Property</DialogTitle>
        <CloseOutlined
          onClick={handleClose}
          sx={{ cursor: "pointer", mr: "1rem" }}
        />
      </Box>
      <Divider sx={{ mt: -2, mb: -1 }} />
      <DialogContent
        sx={{
          overflowY: "hidden",
          scrollbarWidth: "none",
          msScrollbarWidth: "none",
          fontFamily: "Nunito Sans",
        }}
      >
        <Box display={"flex"}>
          <PropertyDetails />
          <Box
            sx={{
              paddingLeft: 2,
              flexGrow: 1,
              backgroundColor: "#F8F9FB",
              pt: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem" }}>
              Unit Price Detail
            </Typography>
            <List sx={{ fontSize: "0.3rem" }}>
              {[
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
                "Amenity Name Here",
                "Amenity Name Here",
              ].map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    secondary={item}
                    sx={{ fontSize: "0.3rem", fontFamily: "Nunito Sans" }}
                  />
                  <ListItemText
                    secondary="$1,000"
                    style={{ textAlign: "right", fontFamily: "Nunito Sans" }}
                    sx={{ fontSize: "0.8rem", fontFamily: "Nunito Sans" }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteOutline style={{ color: "red" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Box sx={{ height: "5.5rem" }}></Box>
            <Grid
              container
              justifyContent="space-between"
              style={{
                padding: "10px 0",
                marginLeft: "0rem",
                backgroundColor: "#E4E8EE",
                paddingLeft: "1.3rem",
                borderRadius: "5px",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontFamily: "Nunito Sans", fontSize: "1.2rem" }}
              >
                Final Total
              </Typography>
              <Typography
                variant="h6"
                sx={{ mr: "1.2rem", fontFamily: "Nunito Sans" }}
              >
                $1,200
              </Typography>
            </Grid>

            <Divider style={{ margin: "10px 0" }} />

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                textTransform: "none",
                fontFamily: "Nunito Sans",
              }}
            >
              Update & Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveComponent;
