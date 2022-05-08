import {milestonesData} from '../../constants/milestones.data';
import Section from '../../containers/section';
import {MilestoneItem} from '../../components';
import Timeline from '@mui/lab/Timeline';
// import {Typography, Box} from '@mui/material';
// import {TimelineItem,TimelineSeparator,TimelineConnector,TimelineDot,TimelineContent,TimelineOppositeContent} from '@mui/lab';

export default function milestones() {
  return (
    <Section title='Milestones'>
     <Timeline position="alternate">
      {
        milestonesData.map((stone,idx) => (
          <MilestoneItem key={idx} {...stone} />
        ))
      }
      </Timeline>
    </Section>
  )
}
