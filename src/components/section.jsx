import {Container, Typography} from '@mui/material'


export default function Section(props) {
    return (
        <Container maxWidth="xl">
                  <Typography 
                  variant='h2'
                  component='h2' 
                  align='center' 
                  gutterBottom
                  sx={{fontWeight: 900, m:'4rem'}}
                  >{props.title}
                  </Typography>
          <Container>{props.children}</Container>
      </Container>
    )
  };
  