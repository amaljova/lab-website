import { Container, Typography } from '@mui/material'


export default function Section(props) {
  return (
    <Container maxWidth="xl" sx={{ my: '5rem' }}>
      <Typography
        variant='h2'
        component='h2'
        align='center'
        gutterBottom
        sx={{ fontWeight: 900, mb: '5rem' }}
      >{props.title}
      </Typography>
      <Container maxWidth="xl">{props.children}</Container>
    </Container>
  )
};
