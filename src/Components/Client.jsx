import {  Box, Typography, Paper } from '@mui/material';

const LeadDetailsComponent = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2.5, maxWidth: 1000,width:'19rem', 
      height:"61.5vh", ml:-2,mt:0,boxShadow:'none',fontFamily:'Nunito Sans',
    }}>
      <Box display="flex" alignItems="center" mb={2} sx={{ border: '1px solid lightgrey', padding: '0.5rem',borderRadius:'0.3rem' }}>
        <img
          alt="Tom Cruise"
          src="https://mui.com/static/images/avatar/1.jpg"
          style={{ width: 50, height: 50 }}
        />
        <Box ml={2}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h6" fontWeight="bold" fontSize={{ xs: 12, sm: 14 }}>
              Tom Cruise
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: 11, ml: '1rem', backgroundColor: 'lightgrey', paddingInline: '0.5rem' }}
            >
              Prospect
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontSize: 12, display: 'flex',color:'grey' }}>
            +919090808012&nbsp;• &nbsp;Tomcruise2515@mail.com
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{fontFamily:'Nunito Sans',fontWeight:'bold',color:'#4E5A6B'}}gutterBottom>
          Quotation Details
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, mt:2,fontFamily:'Nunito Sans'}}>
          <Box>
            <Typography sx={{mb:1}}
            fontSize={{ xs: 10, sm: 10 }} color="textSecondary">
              LEASE START DATE
            </Typography>
            <Typography variant="body1"fontWeight={'bold'} fontSize={{ xs: 10, sm: 14 }}><b>30 Jan 22</b></Typography>
          </Box>

          <Box>
            <Typography sx={{mb:1}}
               fontSize={{ xs: 10, sm: 10 }} 
            color="textSecondary">
              LEASE END DATE
            </Typography>
            <Typography 
            fontSize={{ xs: 10, sm: 14 }}fontWeight={'bold'}
            variant="body1"><b>30 Jan 23</b></Typography>
          </Box>
          <Box>
            <Typography sx={{mb:1}}
               fontSize={{ xs: 10, sm: 10 }} color="textSecondary">
              RENT START DATE
            </Typography>
            <Typography variant="body1"
            fontSize={{ xs: 10, sm: 14 }} 
            ><b>30 Jan 23</b></Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
         

          <Box>
            <Typography variant="subtitle2" 
            sx={{ fontSize: { xs: 10, sm: 10 },mb:1 }}
            color="textSecondary">
              GRACE PERIOD
            </Typography>
            <Typography variant="body1"
            fontSize={{ xs: 10, sm: 14 }}
            ><b>90 Days</b><span style={{color:'lightgrey'}}>(Beginning)</span></Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LeadDetailsComponent;
