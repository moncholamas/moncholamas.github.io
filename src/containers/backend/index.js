import { ButtonGroup, Container, Divider, Grid, List, ListItem, ListItemText, Typography, Button } from '@mui/material'
import { useState } from 'react';
import CarouselContainer from '../../components/Carousel';
import Programador from '../../components/Programador';
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

const BackEndContainer = () => {
  const [selected, setSelected] = useState(0);
  const items = [
    {
      name: "Javascript",
      list: ["Api de archivos", "Middleware propios"],
      description: "Javascript es sin dudas el lenguaje de programación donde más lineas de código hice.",
      parrafo1: "Donde construí desde APIs combinando distintas tecnologías como ser Redis.",
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

  const submenu = ["JavaScript", "PHP", "C#"];
  return (
    <Section bgColor={"#222"}>
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
              seccion="BackEnd"
              divColor={"#616161"}
              icon={<CloudDoneIcon/>}
            />
          </Grid>
          {/* <Typography
              color={"white"}
              sx={{ fontSize: "12px", padding: "8px", backgroundColor: "#444", margin: "24px 0px", borderRadius: "4px" }}
            >
              SELECT * FROM dev_tools_back ORDER BY experiense DESC;
            </Typography> */}
          <Grid item xs={12} lg={7}>
              {
                submenu.map((sub, index) => {
                  const color= index !== selected ? "inherit" : "primary";
                  return (<Button key={index}  variant="outlined" size="small" onClick={ () => setSelected(index)} color={color}>
                    {sub}
                  </Button>)
                }
                )
              }

          </Grid>
        </Grid>
      </Container>

    </Section>
  )
}

export default BackEndContainer;