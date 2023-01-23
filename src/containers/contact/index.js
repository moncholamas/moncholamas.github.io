import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';


const ContactContainer = () => {
    return (
        <Container maxWidth={"lg"} sx={{minHeight:"400px"}} name="Contacto">
          <Grid
            container
            spacing={2}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={12} textAlign="center">
              <Typography variant="h3">Contacto</Typography>
              <Typography component="span">Full Stack Developer</Typography>
            </Grid>
          </Grid>
        </Container>
    )
}

export default ContactContainer;