import  { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import RealEstateCard from './UnitData'; 
import { Typography, Dialog, } from '@mui/material';
import { RiDeleteBinLine } from "react-icons/ri";
import Unit from '../Pages/Unit';
export default function TitlebarBelowImageList() {
  const [open, setOpen] = useState(false);  
  const [selectedItem, setSelectedItem] = useState(null);  

  // Open dialog and set the clicked item
  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '41%', height: 400, overflowY: 'auto', overflowX: 'hidden', mr: 0.5, msScrollWidth: 'none', scrollbarWidth: 'none', fontFamily: 'Nunito Sans' }}>
      <Typography sx={styles.title}>Unit Details</Typography>
      <Box sx={styles.container}>
        <ImageList sx={styles.imageListContainer} cols={2} gap={20}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={styles.imageListItem}>
              <img onClick={() => handleClickOpen(item)}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={styles.image}
              />
              <RiDeleteBinLine style={styles.deleteIcon} />
              <Box sx={{ marginTop: '1rem' }}>
                <RealEstateCard />
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
    img: 'https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg',
    title: 'Property 1',
  },
  {
    img: 'https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg',
    title: 'Property 2',
  },
  {
    img: 'https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg',
    title: 'Property 3',
  },
  {
    img: 'https://www.home-designing.com/wp-content/uploads/2017/01/cowskin-hide-rug-grey-furniture-paint.jpg',
    title: 'Property 4',
  },
];

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Nunito Sans',
    ml: -2,
    mt: '-1.5rem',
  },
  imageListContainer: {
    width: '100%',
    maxWidth: 600,
    scrollbarWidth: 'none',
    mscrollbarWidth: 'none',
  },
  imageListItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    cursor: 'pointer', // Makes it clear the image is clickable
  },
  image: {
    width: '12rem',
    height: '6rem',
    borderRadius: '8px',
    position: 'relative',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    ml: '1rem',
    color: 'grey',
  },
  deleteIcon: {
    position: 'absolute',
    top: '1.2rem',
    right: '1.5rem',
    color: 'red',
    cursor: 'pointer',
    backgroundColor: '#F5F7FA',
    height: '1rem',
    width: '1rem',
    padding: '0.4rem',
    borderRadius: '50%',
    fontSize: '1.5rem',
  },
};
