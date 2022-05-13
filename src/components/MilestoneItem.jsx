import { Typography } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent, TimelineOppositeContent } from '@mui/lab';
// import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';


export default function MilestoneItem(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {props.title}
      </TimelineOppositeContent>


      <TimelineSeparator>
        <TimelineConnector sx={{ display: { xs: 'none', md: 'flex' } }} />
        <TimelineDot>
        </TimelineDot>
        <TimelineConnector sx={{ display: { xs: 'none', md: 'flex' } }} />
      </TimelineSeparator>


      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          {props.year}
        </Typography>
      </TimelineContent>

    </TimelineItem>
  )
}




