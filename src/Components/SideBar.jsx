import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon  sx={{color:'lightgray'}}/> },
    { text: 'Users', icon: <PeopleIcon sx={{color:'white',backgroundColor:'blue',padding:'0.2rem',borderRadius:'50%'}}/> },
    { text: 'Profile', icon: <PersonIcon sx={{color:'lightgray'}}/> },
    { text: 'Tags', icon: <LocalOfferIcon sx={{color:'lightgray'}}/> },
    { text: 'Settings', icon: <SettingsIcon sx={{color:'lightgray'}} /> },
    { text: 'Cloud', icon: <CloudIcon  sx={{color:'lightgray'}}/> },
    { text: 'Receipts', icon: <ReceiptIcon  sx={{color:'lightgray'}}/> },
    { text: 'Files', icon: <FolderIcon  sx={{color:'lightgray'}}/> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 200 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 200 : 60,
          boxSizing: 'border-box',
          mt:'4rem',
          backgroundColor:'#333333',
          color:'lightgray',
          transition:'all 0.3s ease-in-out',
        },
      }}
    >
      <List>
        <ListItem button onClick={handleToggle}>
          <ListItemIcon>
            <NavigateNextIcon sx={{color:'white',backgroundColor:'blue',padding:'0.2rem',borderRadius:'50%'}}/>
          </ListItemIcon>
        </ListItem>

        {menuItems.map((item, index) => (
          <ListItem key={index} button sx={{justifyContent: 'start',pl:'-1rem',ml:0,mr:'0.5rem'}}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

