import { Container, Typography, Grid } from '@mui/material'
import { Section } from '../components';
import { alumniData } from "../data/alumni.data";

export default function Alumni() {
    return (
        <div id="formermembers ">
            <Section title='Former Members'>
                <Container>
                    <Grid container spacing={12}
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center">
                        {
                            alumniData.map((alumni, index) => {
                                return (
                                    <Grid item key={index}>
                                        <div>
                                            <Typography variant='h6'>{alumni.name}</Typography>
                                            <Typography variant='body2'>{alumni.designation}</Typography>
                                            <Typography variant='body2'>{alumni.from}</Typography>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Section>
        </div>
    )
}
