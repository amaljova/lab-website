import React from 'react'
import {Header,Hero,Footer} from './components'
import {Collab,Funding,Upcoming,About,WhatWeDo,Team,Milestones} from './contents';
import {CssBaseline} from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero/>
      <About/>
      <WhatWeDo/>
      <Team/>
      <Milestones/>
      <Collab/>
      <Funding/>
      <Upcoming/>
      <Footer/>
      </>
  )
}
