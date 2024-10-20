import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PiNumberCircleFourFill } from "react-icons/pi";
import Box from '@mui/material/Box';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Navigator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Add Contact
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Lead Details
    </Link>,
    <Typography key="3" sx={{ color: 'primary', fontWeight: 'bold',fontSize:'14px',fontFamily:'Nunito Sans' }}>
      Preview and Create Lead
    </Typography>,
    <Typography key="3" sx={{  color: 'primary', fontWeight: 'bold',fontSize:'14px',fontFamily:'Nunito Sans' }}>
Quotation Details  </Typography>,
 <Box display="flex" alignItems="center" mt={0} key="3">
 <PiNumberCircleFourFill style={{ fontSize: '1.5rem', marginRight: '8px', marginTop: '2px' }} />
 <Typography 
   sx={{ 
     color: 'primary.main', 
     fontWeight: 'bold', 
     fontSize: '14px', 
     fontFamily: 'Nunito Sans' 
   }}
 >
   Preview and create
 </Typography>
</Box>

  ];

  return (
    <Stack spacing={2} sx={{ width: '99.9%',ml:'-1rem',borderBottom:'1px solid lightgrey', }}>
      <Breadcrumbs sx={{width:'100%',backgroundColor:'white',height:'2.5rem',color:'blue',fontWeight:'bold',fontSize:'1rem',alignItems:'center',pt:'1rem',pl:'20px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}