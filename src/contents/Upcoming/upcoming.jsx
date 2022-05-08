import {upcomingEvents} from '../../constants/upcoming.data';
import Section from '../../containers/section';

export default function upcoming() {
  return (
    <Section title='Upcoming Events'>
      {upcomingEvents.map((e,idx)=>(
        <div key={idx}>
        <li>{e}</li>
        </div>
      ))}
    </Section>
  )
}
