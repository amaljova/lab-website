import {fundingData} from '../constants/funding.data';
import {Section} from '../components';
import {Typography, Grid,Box} from '@mui/material';

export default function funding() {
  return (
    <div id="funding">
    <Section title = 'Funding'>
      <Grid container spacing={3}>
        {fundingData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
             <Box sx={{ maxWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1rem',
      borderRadius: '0.5rem',
    }}
    // elevation={24}
    >
       <Box sx={
          {
            height: '250px',
            width: '250px',
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            
          }
       }
      //  elevation={24}
       ></Box>
        <Typography variant='body1' gutterBottom>{item.title}</Typography>
    </Box>
          </Grid>
        ))}
      </Grid>

    </Section>
    </div>
  )
}
