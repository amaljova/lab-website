import { Section } from '../components';
import { Typography } from '@mui/material';

export default function about() {
  return (
    <div id="about">
      <Section title='About'>
        <Typography
          align='justify'
          variant='body1'
          sx={
            {
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontWeight: 'bold',
            }
          }
        >
          Quanititaive Imaging Research and Artificial Intelligence Lab
          was started in Radiation Oncology department in Christian Medical College (CMC), Vellore in 2020 .
          Our vision is to be a premier laboratory of artificial intelligence (AI),
          quantitative imaging and Radiation Oncology in India.
          We have embarked on this mission to address various important issues in the fields by
          combining our strengths in Radiation Oncology, Medical imaging,
          Bioinformatics, Data science, Biology, and Medicine.
          The following are a few highlights of our current research focuses:<br />
        </Typography>
        <Typography variant='body1'
          sx={
            {
              fontSize: { xs: '1rem', md: '1.5rem' },
            }
          }
        >
          <ul>
            <li>Development of novel AI strategies for prognosis and outcome
              prediction, disease classification and therapeutic guidance.</li>
            <li>Benchmarking Electronic Patient Reported Outcomes for digital health technology.</li>
          </ul>
        </Typography>
      </Section>
    </div>
  )
}
