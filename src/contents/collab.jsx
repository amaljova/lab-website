import {collabdata} from "../data/collaborators.data";
import {Section} from '../components';
import {Typography, Card,Paper,Grid,CardContent} from '@mui/material';

export default function collab() {
  return (
    <div id="collaborations">
    <Section title = 'Collaborating Groups'>
      <Grid container spacing={3}>
          {collabdata.map((collab, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card key={index}
              elevation={0}
              sx={{
                  minHeight: '300px',
                  minWidth: 300 ,
                }}>
                 <CardContent>
                <Typography variant='h5' align="center" sx={{fontWeight: 'bold'}} gutterBottom>{collab.institution}</Typography>
                {
                  collab.people.map((person, index) => (
                    <Paper key={index} sx={{m:'10px',p:'10px', backgroundColor:'#b8b8b865'}} elevation={0}>
                      <Typography variant='h6' gutterBottom>{person.name}</Typography>
                      <Typography variant='h7'gutterBottom>{person.department}</Typography>
                    </Paper>
                  ))
                }
              </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>  
    </Section>
    </div>
  )
}