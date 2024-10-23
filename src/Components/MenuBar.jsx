import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import icon from '../assets/icon1.png';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Bala from '../assets/person1.webp';
import { Divider } from '@mui/material';
function MenuBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#1C1C1C' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={icon} alt="logo" style={{ width: 'auto', height: '1.5rem' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: "0.5rem",
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '0.8rem',
            }}
          >
           |  PROPERTY MANAGEMENT SOLUTION
          </Typography>
          <Box sx={{ width: '48%', maxWidth: 700, display: 'flex', alignItems: 'center',ml:'3rem',pl:'5rem' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon  sx={{color:'white'}}/>
            </InputAdornment>
          ),
          sx: { height: '2.5rem', paddingRight: '0', backgroundColor: '#5D5D5D', borderRadius: '0.4rem',width:'25rem',color:'white' }
        }}
      />
    </Box>
    <Box sx={{ color: 'action.active',mr:'1.5rem' ,borderRight:'1px solid lightg'}}>
      <Badge color="primary" variant="dot" sx={{mt:1}} >
        <NotificationsNoneOutlinedIcon sx={{color:'white',mt:"-0.5rem",mr:"-0.5rem",fontSize:'2em'}} />
      </Badge>
    </Box>
    <Divider orientation="vertical" flexItem sx={{ borderColor: 'lightgrey', height: '40px', ml: '0.2rem',mr:'1rem',mt:'0.7rem' }} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Box sx={{display:'flex'}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Bala" src= {Bala} />
              </IconButton>
              <Box sx={{mt:'0.5rem',ml:'0.5rem',width:'5rem'}}>
                <Typography sx={{ textAlign: 'center',fontSize:"0.8rem" }}>Bala Ganesh</Typography>
                <Typography sx={{ textAlign: 'start',fontSize:"0.7rem",pl:'0.2rem'
                 }}>Super admin</Typography>
              </Box>
              <ExpandMoreOutlinedIcon sx={{fontSize:'1.5rem',mt:'0.5rem'}}/>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: '46px',ml:'20px',color:'grey' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                backgroundColor:'grey'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{display:'flex',padding:'1rem' }}>
              <Avatar alt="Bala" src= {Bala} />
              <Box sx={{mt:'-0.2rem',ml:'0.5rem',width:'8rem',}}>
              <Typography sx={{ textAlign: 'center',fontSize:"1rem",ml:0.5 }}>Bala Ganesh</Typography>
              <Typography sx={{ textAlign: 'center',fontSize:"1rem",ml:0.5 }}>Super Admin</Typography>
              </Box>
              </Box>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuBar;
