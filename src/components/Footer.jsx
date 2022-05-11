import {Typography,Container,Box} from '@mui/material';

export default function Footer() {
  return (
    <Container maxWidth="100%"
    color="secondary"
    sx={
      {
        backgroundColor: '#6b6b6b',
        height: "auto",
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }
    }>
    <Container maxWidth="lg"
    sx={
      {
        height: "auto",
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        my: '2rem',
      }
    }>
    <Box maxWidth="lg"
    sx={
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }
    }>

       <Typography variant="h4" align='center' sx={{fontWeight: 'bold'}}>QIRAIL</Typography>
      <Typography variant="h6" align='center'>The Quantitative Imaging and Artificial Intelligence Lab</Typography>
      </Box>
      </Container>
      <Typography variant="h8" align="center" gutterBottom>
        Made with ❤️ by <a href='https://github.com/amaljova' 
        style={{
          // textDecoration: 'none',
          color: '#fff',
        }}>
    Amal Joseph Varghese</a></Typography>
      <Typography variant='subtitle2' align="center" gutterBottom>&copy; {(new Date().getFullYear())} QIRAIL. All rights reserved.</Typography>
  </Container>
  )
}
