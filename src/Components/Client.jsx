import {  Box, Typography, Paper } from '@mui/material';
const LeadDetailsComponent = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2.5, maxWidth: 1000,width:'20.8rem', 
      height:"65.5vh", ml:-2,mt:0,boxShadow:'none',fontFamily:'Nunito Sans', overflow:'hidden',pl:3.5
    }}>
       <Typography sx={{fontSize:'0.9rem',fontWeight:'bold',fontFamily:'Nunito Sans',mt:-1,mb:1,ml:1}}>
          Lead Details
        </Typography>
      <Box display="flex" alignItems="center" mb={2} sx={{ border: '1px solid lightgrey', padding: '0.5rem',borderRadius:'0.3rem',ml:0.2,fontFamily:'Nunito Sans' }}>
       
        <img
          alt="Tom Cruise"
          src="https://mui.com/static/images/avatar/1.jpg"
          style={{ width: 50, height: 50 }}
        />
        <Box ml={2} >
          
          <Box display="flex" flexDirection="row" alignItems="center" >
          <Typography variant="h6" fontWeight="bold" sx={{fontSize:'0.8rem',fontFamily:'Nunito Sans'}}>
              Tom Cruise
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: 11, ml: '0.5rem', backgroundColor: '#5078E11E', paddingInline: '0.5rem',borderRadius:'0.12rem',color:'#091B29' ,fontWeight:'bold',fontFamily:'Nunito Sans' }}
            >
              Prospect
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontSize: 9.8, display: 'flex',color:'grey',width:"100%",mt:1,fontFamily:'Nunito Sans' }}>
            +919090808012&nbsp;• &nbsp;Tomcruise2515@mail.com
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{fontFamily:'Nunito Sans',fontWeight:'bold',color:'#4E5A6B',pl:1,fontSize:'0.95rem'}}gutterBottom >
          Quotation Details
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, mt:2,fontFamily:'Nunito Sans',pl:1}}>
          <Box>
            <Typography sx={{mb:1,fontWeight:'bold',fontSize:'9px',mr:1,fontFamily:'Nunito Sans'}}
             color="textSecondary">
              LEASE START DATE
            </Typography>
            <Typography variant="body1"fontWeight={'bold'} fontSize={{ xs: 10, sm: 13 }}><b>30 Jan 22</b></Typography>
          </Box>

          <Box>
            <Typography sx={{mb:1,fontWeight:'bold',fontSize:'9px',fontFamily:'Nunito Sans'}}
            color="textSecondary">
              LEASE END DATE
            </Typography>
            <Typography 
            fontSize={{ xs: 10, sm: 13 }}fontWeight={'bold'}
            variant="body1"><b>30 Jan 23</b></Typography>
          </Box>
          <Box>
            <Typography sx={{mb:1,fontWeight:'bold',fontSize:'9px',fontFamily:'Nunito Sans'}}
               fontSize={{ xs: 10, sm: 10 }} color="textSecondary">
              RENT START DATE
            </Typography>
            <Typography variant="body1"
            fontSize={{ xs: 10, sm: 13 }} 
            ><b>30 Jan 23</b></Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1,pl:1 }}>
         

          <Box>
            <Typography variant="subtitle2" 
            sx={{ fontSize: '9px',mb:1,fontFamily:'Nunito Sans'}}
            color="textSecondary">
              GRACE PERIOD
            </Typography>
            <Typography variant="body1"
            fontSize={{ xs: 10, sm: 13 }}
            ><b>90 Days</b><span style={{color:'lightgrey',pl:1}}>(Beginning)</span></Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LeadDetailsComponent;
