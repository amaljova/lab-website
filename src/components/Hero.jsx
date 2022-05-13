import { Container, Typography, IconButton, Collapse } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useState, useEffect } from 'react';
import { Link as Scroll } from 'react-scroll';
import background from "../images/svg/Wireframe-Head.svg";

export default function Hero() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Container maxWidth='xl'
      sx={
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'space-evenly',
          height: '80vh',
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right',
        }
      }
    >

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontWeight: 900,
            fontSize: '2.9rem',
          }}
          color='textPrimary'
          align='left'
        >
          The Quantitative Imaging<br /> and Artificial Intelligence<br /> Lab
        </Typography>
        <Typography
          variant='h4'
          color='textSecondary'
          gutterBottom>
          Research group in the Radiation Oncology Department @ Christian Medical College Vellore.
        </Typography>
        <Container maxWidth='xl' sx={
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }
        }>
          <Scroll to="about" smooth={true} offset={-150}>
            <IconButton>
              <ExpandCircleDownIcon sx={
                {
                  fontSize: '4rem',
                }
              } />
            </IconButton>
          </Scroll>
        </Container>
      </Collapse>
    </Container>
  )
}
