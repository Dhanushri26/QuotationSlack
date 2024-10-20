import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
const PropertyDetails = () => {
  return (
    <Card
      sx={{
        maxWidth: 365,
        borderRadius: 2, 
        boxShadow:'none',
        height:'100vh',
        mt:-1.5,
        pt:-10
      }}
    >
      <Box
        sx={{
          display: 'flex',
          p: 2,
          alignItems: 'center',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex',width:'32rem' }}>
        <CardMedia
          component="img"
          alt="Property Image 1"
          height="150"
          image="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D" 
          sx={{ flex: 1, marginRight: 1, borderRadius: 1 }} 
        />
        </Box>
        <Box display="flex" flexDirection="column" sx={{ padding: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 1"
                height="70"

                image="https://www.nobroker.in/blog/wp-content/uploads/2022/12/front-and-back-door-layouts-of-a-modest-small-house-design-1200x673.webp" 
                sx={{ borderRadius: 1 }} 
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 2"
                height="70"
                image="https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D" 
                sx={{ borderRadius: 1 }} 
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 3"
                height="70"
                image="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww" 
                sx={{ borderRadius: 1 }} 
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 4"
                height="70"
                image="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlfGVufDB8fDB8fHww" 
                sx={{ borderRadius: 1 }} 
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CardContent sx={{ padding: 1 }}>
        <Box display={'flex'} sx={{mt:'-1.5rem'}} >
        <Typography gutterBottom variant="h5" component="div" color="grey">
          Jumeirah Estate
        </Typography>
        <Typography  backgroundColor="lightgrey" sx={{ml:1,p:0.5,pb:-3,height:'0.7rem',fontSize:'0.6rem',mt:1}}>
          UNIT-1458
        </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Rubix Apartment, K Tower, Floor 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2 BHK • 2000 Sq Ft
        </Typography>
        <Typography variant="body2" color="text.primary">
          <span>2 Beds • 2 Baths • 2BHK • 2000 SqFt</span>
        </Typography>
      </CardContent>
      <Box
        mt={-2.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: 2 }}
        pl={-3}
        ml={-2.5}
      >
        <Box display="flex" alignItems="center">
          <TabletAndroidIcon style={
            {fontSize: '1rem', color: 'grey',marginLeft:'0.5rem'}
          }/>
          <Typography variant="body2" component="span">
            Handbook
          </Typography>
        </Box>
        <Typography
          variant="body2"
          component="a"
          href="#"
          sx={{
            marginLeft: '10px',
            textDecoration: 'underline',
            color: 'primary.main',
            '&:hover': {
              textDecoration: 'none', 
            },
          }}
        >
          View / Download
        </Typography>
      </Box>
    </Card>
  );
};

export default PropertyDetails;
