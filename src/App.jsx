import React from 'react'
import { Header, Hero, Footer, BackToTop } from './components'
import { Collab, Funding, Upcoming, About, WhatWeDo, Team, Milestones, Contact, Positions, Alumni } from './contents';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/qirail.theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <BackToTop />
      <Hero />
      <About />
      <WhatWeDo />
      <Team />
      <Alumni />
      <Milestones />
      <Collab />
      <Funding />
      <Upcoming />
      <Positions />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
