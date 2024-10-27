import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import CarouselContainer from '../../components/Carousel';
import Programador from '../../components/Programador';
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import BadgeIcon from '@mui/icons-material/Badge';

const PresentationContainer = () => {
  const lista = ["CI/CD", "PM2", "Nginx Apache", "bash script"];
  const items = [
    {
      name: "Nodejs",
      description: "Javascript es sin dudas el lenguaje de programación donde más lineas de código hice.",
      parrafo1: "Donde construí desde APIs sencillas hasta sistemas de autogestión con respuestas automáticas con un bot! (mi actual proyecto)."
    },
    {
      name: "DBS",
      description: "Hello World!"
    },
    {
      name: "Laravel",
      description: "Hello World!",
      next: "FrontEnd"
    }
  ]
    return (
      <Section bgColor="#EEE">
        <Container maxWidth={"lg"} name="DevOps">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={5}>            
            <SectionTitle
              lista={lista}
              seccion="Presentation"
              icon={<BadgeIcon />}
            />
            </Grid>
            <Grid item xs={12} lg={7}>
            <Box sx={{ maxHeight: "420px", padding: "2em" }}>
              <Typography variant='body1'>I am Manuel and i been employed as a software developer for the past three years.</Typography>
              <Typography variant='body1'>I have experience working on the both backend and frontend development, but recently I've been preferring server-side work.</Typography>
              <Typography variant='body1'>At the moment, I reside in Jujuy, located in the north of Argentina. My faithfull companion is my dog.</Typography>
            </Box>
              {/* <CarouselContainer 
                items={items}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </Section>
    )
}

export default PresentationContainer;