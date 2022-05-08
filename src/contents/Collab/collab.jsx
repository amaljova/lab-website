// import style from './collab.module.css';

import {collabdata} from "../../constants/collaborators.data";
import Section from '../../containers/section';

export default function collab() {
  return (
    <Section title = 'Collaborations'>
      {
        collabdata.map((item, idx) => (
          <div key={idx}>
            <h2>{item.name}</h2>
            <p>{item.institution}</p>
            <p>{item.department}</p>
          </div>
        ))
      }
    </Section>
  )
}
