import {Container, Typography} from '@mui/material';

export default function Hero() {
  return (
    <Container maxWidth='lg' 
    sx={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        height: '100vh',
      }
    }
    >
      {/* className={classes.container} */}
      <Typography 
      variant='h3' 
      color='textPrimary' 
      gutterBottom
      sx={{fontWeight: 700}}
      >
        The Quantitative Imaging and<br/> Artificial Intelligence Lab
        </Typography>
      <Typography 
      variant='h5' 
      color='textSecondary'>
        Research group in the Radiation Department @ Christian Medical College Vellore.
        </Typography>
    </Container>
  )
}
