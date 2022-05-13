import { Section } from '../components';
import { Typography, Container } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

export default function contact() {
  return (
    <div id="contact">
      <Section title='Contact Us'>
        <Container maxWidth="md"
          sx={
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',

            }
          }
        >
          <Typography variant="h6" align='center' gutterBottom>
            Quantitative Imaging Research and Artificial Intelligence Lab
          </Typography>
          <Typography variant="h6" align='center' gutterBottom>
            Department of Radiation Oncology, Unit II
          </Typography>
          <Typography variant="h6" align='center' gutterBottom>
            Christian Medical College Vellore
          </Typography>
          <PhoneEnabledIcon />
          <Typography variant="body1" gutterBottom>
            <a href="tel:04162282046" style={
              {
                textDecoration: 'none',
              }
            }>{' 0416-2282046'}</a>
          </Typography>
        </Container>
      </Section>
    </div>
  )
}
