import {Typography, Box} from '@mui/material';


export default function TeamCard({name, about, department,src}) {
  return (
    <Box sx={{ maxWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1rem',
      borderRadius: '0.5rem',
    }}
    elevation={24}
    >
       <Box sx={
          {
            height: '250px',
            width: '250px',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50%',
          }
       }
       elevation={24}
       ></Box>
        <Typography>{name}</Typography>
        <Typography>{about}</Typography>
        <Typography>{department}</Typography>
    </Box>
  )
}

