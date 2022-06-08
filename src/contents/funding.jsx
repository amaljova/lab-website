import { fundingData } from '../data/funding.data';
import { Section } from '../components';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

export default function funding() {
  return (
    <div id="funding">
      <Section title='Funding'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {fundingData.map((item, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}
            sx={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',

            }}
            >
              <Card sx={{ maxWidth: 345 }} elevation={0}>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.image}
                  loading="lazy"
                  alt="Funding Agency"
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant='body1'
                    sx={{ fontWeight: 'bold' }} align='center' gutterBottom>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  )
}
