import { Container, Divider, Grid, Typography } from '@mui/material'
import CarouselContainer from '../../components/Carousel';
import Programador from '../../components/Programador';
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';


const FrontEndContainer = () => {
  const lista = [
    "React",
    "Html5 Css3",
    "MUI Bootstrap"
  ]

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
    <Section>
      <Container maxWidth={"lg"} name="FrontEnd">
        <Grid
          container
          spacing={2}
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={5} textAlign="right">
            <SectionTitle
              lista={lista}
              seccion="FrontEnd"
            />
            {/* <Typography
                color={"white"}
                sx={{fontSize:"12px", padding:"8px", backgroundColor:"#444", margin:"24px 0px", borderRadius:"4px", textAlign:"left"}}
              >
                npm install -D experience experience-front 
              </Typography> */}
          </Grid>
          <Grid item xs={12} lg={7}>
            <CarouselContainer
              items={items}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default FrontEndContainer;