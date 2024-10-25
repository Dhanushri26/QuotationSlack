import { useState,useEffect } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Switch,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BsStars } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import { useDispatch } from 'react-redux';
// import { setUtility } from '../redux/amenitiesSlicer';
import { setUtilite } from "../redux/utilitiesSlicer";
const UtilityData = [
  {
    id: 1,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1465301055284-72f355cfd745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlJTIwdXRpbGllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1445342358666-0142151ad26f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXRpbGllcyUyMGZvciUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHV0aWxpZXMlMjBmb3IlMjBob21lfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHV0aWxpZXMlMjBmb3IlMjBob21lfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHV0aWxpZXMlMjBmb3IlMjBob21lfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "Utility name",
    price: 20.0,
    date: "Valid Feb 22 - 12 Feb 23",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function AddUtility() {
  const [open, setOpen] = useState(true);
  const [utility, setUtility] = useState(UtilityData);
  const dispatch = useDispatch();
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
    const totalCost = totalPrice;
  useEffect(() => {
    dispatch(setUtilite({ totalUtility, totalCost }));
  }, [totalUtility, totalCost, dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 34,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 16,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#1890ff",
          ...theme.applyStyles("dark", {
            backgroundColor: "#177ddc",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 10,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      sx={{
        scrollbarWidth: "none",
        msScrollbarWidth: "none",
        fontFamily: "Nunito Sans",
        height: "100vh",
      }}
    >
      <DialogTitle
        sx={{
          borderBottom: "1px solid lightgrey",
          mb: 2,
          msScrollbarWidth: "none",
          scrollbarWidth: "none",
          overflowY: "scroll",
          fontFamily: "Nunito Sans",
        }}
      >
        Add Utility
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          overflowY: "scroll",
          msScrollbarWidth: "none",
          scrollbarWidth: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            backgroundColor: "#DBF0F180",
            padding: "0.7rem 1rem",
            borderRadius: "0.4rem",
          }}
        >
          <BsStars
            sx={{ mr: "-3rem", pr: "-4rem" }}
            style={{
              color: "lightblue",
              fontSize: "1.5rem",
              padding: "0.5rem",
              border: "2px solid lightblue",
              borderRadius: "0.4rem",
            }}
          />
          <Typography variant="h6" color="#6DAFB3" sx={{ ml: -14 }}>
            <b>{totalUtility.toString().padStart(2, "0")}</b> Total Utility
          </Typography>
          <Typography variant="h6" color="#6DAFB3">
            <b> ${totalPrice.toFixed(2)}</b>
          </Typography>
        </Box>

        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontFamily: "Nunito Sans" }}
        >
          Available Utility
        </Typography>
        <List
          sx={{
            overflowY: "scroll",
            msScrollbarWidth: "none",
            scrollbarWidth: "none",
          }}
        >
          {utility.map((util) => (
            <ListItem
              key={util.id}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px 0",
                border: "1px solid #E0E0E0",
                borderRadius: "5px",
                mb: 1,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={util.image}
                  alt={util.name}
                  sx={{ borderRadius: "5px", ml: 1 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ fontFamily: "Nunito Sans" }}
                  >
                    {util.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontFamily: "Nunito Sans" }}
                  >
                    ${util.price.toFixed(2)} - {util.date}
                  </Typography>
                }
              />
              <AntSwitch
                edge="end"
                checked={util.selected || false}
                onChange={() => toggleUtility(util.id)}
                inputProps={{ "aria-label": "ant design" }}
                sx={{ mr: 1.5 }}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{
            width: "90%",
            textTransform: "none",
            fontFamily: "Nunito Sans",
          }}
        >
          Update & Save
        </Button>
      </Box>
    </Dialog>
  );
}
