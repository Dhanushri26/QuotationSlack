/* eslint-disable no-unused-vars */
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import RealEstateCard from "./UnitData"; // Import the updated RealEstateCard component
import { Dialog, Typography } from "@mui/material";
import { RiDeleteBinLine } from "react-icons/ri";
import Unit from "../Pages/Unit";

export default function UnitDetails() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "37%",
        height: 400,
        overflowY: "auto",
        overflowX: "hidden",
        m: 0,
        msScrollWidth: "none",
        scrollbarWidth: "none",
        fontFamily: "Nunito Sans",
      }}
    >
      <Typography sx={styles.title}>Unit Details</Typography>
      <Box sx={styles.container}>
        <ImageList sx={styles.imageListContainer} cols={2} gap={10}>
          {itemData.map((item, index) => (
            <ImageListItem key={item.img} sx={styles.imageListItem}>
              <img
                onClick={() => handleClickOpen(item)}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={styles.image}
              />
              <RiDeleteBinLine style={styles.deleteIcon} />
              <Box sx={{ marginTop: "1rem" }}>
                {/* Passing name and amount from the list */}
                <RealEstateCard name={item.name} amount={item.amount} />
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Unit item={selectedItem} />
      </Dialog>
    </Box>
  );
}

const itemData = [
  {
    img: "https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg",
    title: "Property 1",
    name: "Jumeirah Estate",
    amount: 1200,
  },
  {
    img: "https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg",
    title: "Property 2",
    name: "Palm Jumeirah",
    amount: 1500,
  },
  {
    img: "https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg",
    title: "Property 3",
    name: "Downtown Dubai",
    amount: 2000,
  },
  {
    img: "https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg",
    title: "Property 4",
    name: "Marina Bay",
    amount: 1800,
  },
];

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito Sans",
    mt: "0.5rem",
  },
  imageListContainer: {
    width: "100%",
    maxWidth: 450,
    scrollbarWidth: "none",
    mscrollbarWidth: "none",
  },
  imageListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "none",
    },
    cursor: "pointer",
  },
  image: {
    width: "12rem",
    height: "6rem",
    borderRadius: "4px",
    objectFit: "cover",
    position: "relative",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "1rem",
    ml: "1rem",
    color: "grey",
    fontFamily: "Nunito Sans",
  },
  deleteIcon: {
    position: "absolute",
    top: "1rem",
    right: "1.2rem",
    color: "red",
    cursor: "pointer",
    backgroundColor: "#F5F7FA",
    height: "1rem",
    width: "1rem",
    padding: "0.4rem",
    borderRadius: "50%",
    fontSize: "1.5rem",
  },
};
