import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FolderIcon from '@mui/icons-material/Folder';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const [selectedIndex, setSelectedIndex] = useState(2); 

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen); 
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Users', icon: <PeopleIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Profile', icon: <PersonIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Tags', icon: <LocalOfferIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Settings', icon: <SettingsIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Cloud', icon: <CloudIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Receipts', icon: <ReceiptIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
    { text: 'Files', icon: <FolderIcon sx={{ color: 'lightgrey', ml: '-2px', fontSize: '1.3rem' }} /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: '#333333',height:'100vh',color:'lightgrey' }}>
    <Box sx={{ width: 250, mt: '5rem', backgroundColor: 'transparent' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => setSelectedIndex(index)}
              sx={{
                backgroundColor: selectedIndex === index ? 'blue' : 'transparent',
                color: selectedIndex === index ? 'white' : 'inherit',
              }}
            >
              <ListItemIcon sx={{ ml: -2, pl: 1, color: 'lightgrey' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: sidebarOpen ? 200 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? 200 : 60,
            boxSizing: 'border-box',
            mt: '4rem',
            backgroundColor: '#333333',
            color: 'lightgray',
            transition: 'width 0.3s ease-in-out',
          },
        }}
      >
        <List>
          <ListItem button onClick={toggleDrawer(true)}>
            <ListItemIcon>
              <NavigateNextIcon
                sx={{ color: 'white', backgroundColor: 'blue', padding: '0.2rem', borderRadius: '50%', mb: 1 }}
              />
            </ListItemIcon>
          </ListItem>
          <Divider sx={{ backgroundColor: 'lightgray', my: 1 ,width:'70%',ml:1}} /> 
          {menuItems.map((item, index) => (
            <ListItem key={index} button sx={{ justifyContent: 'start', pl: '-1rem', ml: -0.5, mr: '0.5rem', mb: -1.5 }}>
              <ListItemButton
                onClick={() => setSelectedIndex(index)}
                sx={{
                  backgroundColor: selectedIndex === index ? 'blue' : 'transparent',
                  color: selectedIndex === index ? 'white' : 'inherit',
                  borderRadius: selectedIndex === index ? '2rem' : '0',
                  width: selectedIndex === index ? '25px' : '50px',
                  height: selectedIndex === index ? '32px' : '50px',
                  fontSize: selectedIndex === index ? '0.5rem' : '0.6rem',
                }}
              >
                <ListItemIcon sx={{ ml: -2, pl: 1 }}>{item.icon}</ListItemIcon>
                {sidebarOpen && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ backgroundColor: 'transparent' }} 
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default SideBar;
