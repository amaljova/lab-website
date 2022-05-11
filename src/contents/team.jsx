import { TeamCard } from '../components'
import { mainTeam, clinicalTeam } from '../constants/team.data';
import { Section } from '../components';
import { Typography, Grid, Container } from '@mui/material';


export default function team() {
  return (
    <div id="team">
      <Section title="Our Team">
        <Container key='main'>
          <Typography variant='h4' align='center' color='textSecondary' sx={{
            fontWeight: 'bold',
            m: '40px'
          }} gutterBottom>{mainTeam.title}</Typography >
          <Grid container spacing={12}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {
              mainTeam.members.map((member, idx) => (
                <Grid item key={idx}>
                  <TeamCard
                    name={member.name}
                    about={member.about}
                    department={member.department}
                    src={member.image}
                    desig={member.designation}
                  /></Grid>
              ))
            }
          </Grid>
        </Container>
        <Container key='clinical'>

          <Typography variant='h4' align='center' color='textSecondary' sx={{
            fontWeight: 'bold',
            m: '40px'
          }} gutterBottom>{clinicalTeam.group}</Typography >

          {
            clinicalTeam.subTeam.map((sub, idx) => (
              <Container key={idx}>
                <Typography
                  variant='h5'
                  align='center'
                  sx={{
                    fontWeight: 'bold',
                    m: '40px'
                  }}
                  gutterBottom>
                  {sub.title}
                </Typography >
                <Grid container spacing={12}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  {
                    sub.members.map((member, idx) => (
                      <Grid item key={idx} align>
                        <TeamCard
                          name={member.name}
                          about={member.about}
                          department={member.department}
                          src={member.image}
                          desig={member.designation}
                        />
                      </Grid>
                    ))
                  }
                </Grid>
              </Container>
            ))
          }
        </Container>
      </Section>
    </div>
  );
}
