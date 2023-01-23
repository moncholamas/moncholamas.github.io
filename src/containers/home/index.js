import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import Section from '../../components/Section';


const PersonalContainer = () => {
    return (
      <Section >
        <Container maxWidth={"lg"} sx={{marginTop:"5em"}} color="common.white">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={6}>
              <Programador />
              <Typography variant="h1" sx={{
                fontSize: "2em"
              }}>Manuel Lamas <Typography component="span" color="primary">{' [ Full Stack Developer ]'}</Typography></Typography>
              <Typography variant="body1" >
                ¡Gracias por tomarte un tiempo para conocerme!
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Typography>
                {`
                { 
                  \n
                  Edad: 31, \r
                  Domicilio: "San Miguel de Tucumán", \n
                  Profesión: "Programador",
                  Mate: "Amargo"
                  Hijos: "Un can-hijo"
                }
                `}
              </Typography>
              <Button variant="outlined">
                Ver Perfil Técnico                
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Section>
    )
}

export default PersonalContainer;