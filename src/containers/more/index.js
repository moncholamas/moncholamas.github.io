import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import Section from '../../components/Section';


const MoreContainer = () => {
  return (
    <Section  variant="primary">
      <Container maxWidth={"lg"}>
        <Grid
          container
          spacing={2}
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Typography variant="h3">Mas info sobre mi</Typography>
            <Typography component="span">Full Stack Developer</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Programador />
          </Grid>
        </Grid>
      </Container>
    </Section>

  )
}

export default MoreContainer;