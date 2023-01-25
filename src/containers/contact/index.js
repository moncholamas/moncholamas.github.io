import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import Section from '../../components/Section';


const ContactContainer = () => {
  return (
    <Section variant="primary">
      <Container maxWidth={"lg"} sx={{ minHeight: "400px" }} name="Contacto">
        <Grid
          container
          spacing={2}
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={12} textAlign="center">
            <Typography variant="h3" color="inherit">Contacto</Typography>
            <Typography component="span" color="inherit">Full Stack Developer</Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>

  )
}

export default ContactContainer;