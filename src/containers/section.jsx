import {Container, Typography,Box} from '@mui/material'


export default function section(props) {
    return (
        <Container maxWidth="lg">
                  <Typography variant='h3' component='h1' align='center' gutterBottom>{props.title}</Typography>
          <Box>{props.children}</Box>
      </Container>
    )
  };
  