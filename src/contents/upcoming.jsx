import { upcomingEvents } from '../data/upcoming.data';
import { Section } from '../components';
import { Typography, Container, Paper } from '@mui/material';


export default function upcoming() {
  return (
    <div id="upcoming">
      <Section title='Upcoming Events'>
        <Container maxWidth="xl" sx={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {upcomingEvents.map((event, index) => (
            <Paper key={index}
              sx={
                {
                  margin: '10px',
                  display: 'flex',
                  alignItems: 'center',

                }}
              elevation={0}
            >
              <Typography variant='h6' align='center' gutterBottom>{event.title}</Typography>
              <Typography variant='h6' align='center' gutterBottom>{event.date}</Typography>
              <Typography variant='h6' align='center' gutterBottom>{event.location}</Typography>
              <Typography variant='h6' align='center' gutterBottom>{event.description}</Typography>
            </Paper>
          ))}
        </Container>
      </Section>
    </div>
  )
}
