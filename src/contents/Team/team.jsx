import {TeamCard} from '../../components'
import { mainTeam, clinicalTeam } from '../../constants/team.data';
import Section from '../../containers/section';
import {Typography, Grid,Container} from '@mui/material';


export default function team() {
  return (
    <Section title="The Team">
      <Container key='main'>
        <Typography variant='h4' align='left' gutterBottom>{mainTeam.group}</Typography >
        <Grid container spacing={12}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        >
        {
          mainTeam.subTeam.map((sub,idx) => (
                sub.members.map((member,idx) => (
                  <Grid item key={idx}
                  >
                  <TeamCard
                  label = {sub.title}
                  name = {member.name}
                  about = {member.about}
                  department = {member.department}
                  src = {member.image}
                  /></Grid>
                ))
          ))
        }
        </Grid>
        </Container>
        <Container key='clinical'>
        <Typography variant='h4' align='left' gutterBottom>{clinicalTeam.group}</Typography >
        <Grid container spacing={12}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        >
        {
          clinicalTeam.subTeam.map((sub,idx) => (
                sub.members.map((member,idx) => (
                  <Grid item key={idx} align>
                  <TeamCard
                  label = {sub.title}
                  name = {member.name}
                  about = {member.about}
                  department = {member.department}
                  src = {member.image}
                  /></Grid>
                ))
          ))
        }
        
        </Grid>
        </Container>
    </Section>
  )
}
