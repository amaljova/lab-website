import {Typography, Box} from '@mui/material';
import {TimelineItem,TimelineSeparator,TimelineConnector,TimelineDot,TimelineContent,TimelineOppositeContent} from '@mui/lab';


export default function MilestoneItem(props) {
  return (
    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          // align="right"
          variant="body2"
          color="text.secondary"
        >
          {props.year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {props.title} 
          </Typography>
            <Box>
                {props.events.map((e,idx) =>(
                    <Typography key={idx}>{e}</Typography>
                )
                )}
            </Box>
        </TimelineContent>
      </TimelineItem>
  )
}




