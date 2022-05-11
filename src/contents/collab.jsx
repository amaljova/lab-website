// import style from './collab.module.css';

import {collabdata} from "../constants/collaborators.data";
import {Section} from '../components';
import {Typography, Grid,Box} from '@mui/material';

export default function collab() {
  return (
    <div id="collaborations">
    <Section title = 'Collaborating Groups'>
      <Grid container spacing={12}
        direction="row"
        justifyContent="space-around"
        alignItems="center">
      {
        collabdata.map((item, idx) => (
          <Grid item key={idx}>
          <Box key={idx}
          sx={{
            maxWidth: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem',
            padding: '1rem',
            border: '1px solid #000000'
          }}
          >
            <Typography align='center' variant="h6">{item.name}</Typography>
            <Typography align='center'>{item.institution}</Typography>
            <Typography align='center'>{item.department}</Typography>
          </Box>
          </Grid>
        ))
      }
      </Grid>
    </Section>
    </div>
  )
}
