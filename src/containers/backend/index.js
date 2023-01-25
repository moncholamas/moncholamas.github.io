import { Container, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import CarouselContainer from '../../components/Carousel';
import Programador from '../../components/Programador';
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';


const BackEndContainer = () => {
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

  const lista = ["JavaScript", "SQL", "PHP / C#", "NoSQL"]
  return (
    <Section bgColor={"#333"}>
      <Container maxWidth={"lg"} name="BackEnd">
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
              seccion="BackEnd"
              divColor={"#616161"}
            />
          </Grid>
          {/* <Typography
              color={"white"}
              sx={{ fontSize: "12px", padding: "8px", backgroundColor: "#444", margin: "24px 0px", borderRadius: "4px" }}
            >
              SELECT * FROM dev_tools_back ORDER BY experiense DESC;
            </Typography> */}
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

export default BackEndContainer;