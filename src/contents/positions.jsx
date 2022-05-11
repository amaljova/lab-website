import {Section} from '../components';
import {Typography,Container} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function positions() {
  return (
    <div id="positions">
    <Section title='Open Positions'>
      <Container maxWidth="xl" sx={
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

        }
      }>
      <Typography variant='h5' align='justify' gutterBottom>
      We are always looking for motivated students interested in our research.
       You can get also involved through various means: internships, project staff positions, etc.
      </Typography>
      <EmailIcon/>
      <Typography variant='h8' align='center' gutterBottom sx={{fontWeight:900,}}>
        <a href="mailto: hannah.thomas@cmcvellore.ac.in" style={
          {
            textDecoration: 'none',
          }
        }>{' hannah.thomas@cmcvellore.ac.in'}</a>
      </Typography>
      </Container>
    </Section>
    </div>
  )
}
