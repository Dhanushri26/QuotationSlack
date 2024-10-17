import MenuBar from "../Components/MenuBar"
import SideBar from "../Components/SideBar"
import QuotationSummary from "../Components/QuotationSummary"
import UnitDetails from "../Components/UnitDetails"
import Client from "../Components/Client";
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import Lands from "../Components/Lands";
import Navigator from "../Components/Navigator";
const CreateQuotation = () => {
  return (
    <Box sx={{overflow:'hidden',maxHeight:'100vh'}}>
      <MenuBar />
      <Box display="flex">
        <SideBar /> 
        <Box sx={{ flexGrow: 1, p: 0, width: '100%', maxWidth: '100%', height: '100vh', overflow: 'auto' ,display:'flex',flexDirection:'column',backgroundColor:'#F5F7FA'}}>
        <Box
      sx={{
        flexGrow: 1,
        p: 0,
        width: '100%',
        maxWidth: '100%',
        height: '4rem',
        overflow: 'auto',
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'space-between',
        mscrollbarWidth: 'none',
        scrollbarWidth:'none',
        pl:3
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ArrowBackIosNewIcon
          sx={{
            fontSize: '1rem',
            backgroundColor: 'lightgrey',
            borderRadius: '50%',
            padding: '0.5rem',
            marginRight: '0.5rem',
          }}
        />
        <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>
          Create Quotation to Existing Lead
        </Typography>
      </Box>
      
        <Lands/>
    </Box>
       
        <Box component="main" sx={{ flexGrow: 1, pl: 4,pt:2, width: '100%', maxWidth: '100%', height: '100vh', overflow: 'auto',flexDirection:'column' }}>
        <Box component="main" sx={{ flexGrow: 1,pl:1,width: '100%', maxWidth: '100%', height: '100vh', overflow: 'auto' }}>
          <Navigator/>
          <Box sx ={{display:'flex',width:'100%'}}> 
          <Client />
          <UnitDetails />
          <QuotationSummary />
          </Box> 
          </Box>
          <Box
      sx={{
        mt: "-9.3rem",
        height: '4rem',
        color: 'blue',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        backgroundColor: 'white',
        zIndex: '1',
        borderBottomLeftRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '0 1rem', 
      }}
    >
      <button style={{color:'black',backgroundColor:'white',boxShadow:'none',border:'1px solid lightgrey',borderRadius:'0.3rem',padding:'0.5rem'}}>
        Previous
      </button>
      <Box display="flex" sx={{pr:6
      }}>
      <button style={{color:'black',backgroundColor:'white',boxShadow:'none',border:'1px solid lightgrey',borderRadius:'0.3rem',padding:'0.5rem',}}>
        Cancel
      </button>
      <button style={{color:'white',backgroundColor:'blue',boxShadow:'none',border:'1px solid lightgrey',borderRadius:'0.3rem',padding:'0.5rem',marginLeft:"1rem"}}>
        Create Quotation
      </button>
      </Box>
    </Box>
          </Box>
          </Box>
          
      </Box>
    </Box>
  )
}

export default CreateQuotation