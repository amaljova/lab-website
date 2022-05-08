import {whatWeDo} from '../../constants/whatWeDo.data';
import Section from '../../containers/section';

export default function WhatWeDo() {
  return (
    <Section title='We Do ...'>
      {
        whatWeDo.map((item,idx)=>(
          <div key={idx}>
      <h2>{item.title}</h2>
      {
        item.points.map((p,idx) => (
          <li key={idx}>{p}</li>
        ))
      }
      
      </div>
        ))
      }
      
    </Section>
  )
}
