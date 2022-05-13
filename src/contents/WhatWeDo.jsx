import { whatWeDo } from '../data/whatWeDo.data';
import { Section } from '../components';
import { Typography, Container } from '@mui/material';

export default function WhatWeDo() {
  return (
    <div id="whatwedo">
      <Section title='What We Do'>
        {whatWeDo.map((item, index) => (
          <Container key={index}>
            <Typography variant='h5' align='left' gutterBottom>{item.title}</Typography>
            {
              item.points.map((point, idx) => (
                <ul key={idx}
                  sx={{
                    // p: '20px'
                  }}>
                  <li><Typography variant='h6' >{point.tag}</Typography></li>
                  <Typography variant='body2' >{point.sub}</Typography>
                </ul>
              ))
            }
          </Container>
        ))}
      </Section>
    </div>
  )
}
