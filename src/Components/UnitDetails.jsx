/* eslint-disable no-unused-vars */
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import RealEstateCard from "./UnitData"; // Import the updated RealEstateCard component
import { Dialog, Typography } from "@mui/material";
import { RiDeleteBinLine } from "react-icons/ri";
import Unit from "../Pages/Unit";
import QuotationSummary from "./QuotationSummary"; // Import QuotationSummary component

export default function UnitDetails() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const[display,setDisplay] = useState(false);
  const [itemData, setItemData] = useState([
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
  ]);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
//  console.log("Price:", price);
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (index) => {
    const updatedData = itemData.filter((_, i) => i !== index);
    setItemData(updatedData);
  };

  // const totalAmount = itemData.reduce((total, item) => total + item.amount, 0);
  // const totalQty = itemData.length;
  const totalAmount = itemData?.reduce((total, item) => total + (item?.amount || 0), 0) || 0;
  const totalQty = itemData?.length || 0;
  console.log(totalAmount, totalQty);

  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        overflowY: "scroll",
        overflowX: "scroll",
        ml: -0.3,
        p:2,
        pr:5,
        pl:0,
       overflow:'scroll',
        fontFamily: "Nunito Sans",
        mt:-3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{mr:3.5,minWidth:'26.5rem',overflow:'scroll',mscrollbarWidth: "none",scrollbarWidth: "none",ml:1.5}}>
        <Box sx={{position:'sticky',top:'-4rem',zIndex:'1',p:1}}>
      <Typography sx={styles.title}>Unit Details</Typography>
      </Box>
      <Box>
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
              <RiDeleteBinLine
                style={styles.deleteIcon}
                onClick={() => handleDelete(index)} 
              />
              <Box sx={{ marginTop: "1rem" }}>
                <RealEstateCard name={item.name} amount={item.amount} />
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Unit item={selectedItem} />
      </Dialog>
      </Box>
      <Box>
{/* { display && 
      <QuotationSummary totalAmount={totalAmount} totalQty={totalQty} />
} */} {itemData.length > -1 && (
  <QuotationSummary totalAmount={totalAmount} totalQty={totalQty} />
)}</Box>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito Sans",
    mt: "0.5rem",
    overflow:'scroll',
    scrollbarWidth: "none",
    msScrollbarWidth: "none",
    mb:8,
  
  },
  imageListContainer: {
    width: "100%",
    maxWidth: 450,
    scrollbarWidth: "none",
    mscrollbarWidth: "none",
    pl:1
  },
  imageListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "0.5rem 0.5rem 0.5rem 0.7rem",
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
    position:'sticky',
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
