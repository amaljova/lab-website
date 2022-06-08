import { Typography, Box } from '@mui/material';


export default function TeamCard({ name, about, desig, department, src }) {
  return (
    <Box sx={{
      maxWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      margin: '1rem',
      borderRadius: '0.5rem',
    }}
      elevation={24}
    >
      <Box sx={
        {
          height: '150px',
          width: '150px',
          backgroundImage: `url(${src})`,
          loading:"lazy",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '50%',
        }
      }
        elevation={24}
      ></Box>
      <Typography align='center' variant='h6'>{name}</Typography>
      <Typography align='center' varient='h7'>{about}</Typography>
      <Typography align='center' varient='h8'>{desig}</Typography>
      <Typography align='center' varient='h9'>{department}</Typography>
    </Box>
  )
}

