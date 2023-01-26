import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import ResumeJson from '../../components/ResumeJson';
import Section from '../../components/Section';
import { Link, animateScroll as scroll } from "react-scroll";


const PersonalContainer = () => {
  const cvRows = {
    Edad: `"31 años"`,
    Domicilio: `"S. M. de Tucumán"`,
    Profesión: `"Programador"`,
  }
  const exp = {
    "Back End Dev": `"Sitenso"`,
    "Full Stack Dev": `"GyS SRL"`,
    "Ayudante de Cátedra": `"UNT - FaCET"`,
  }
  return (
    <Section >
      <Container maxWidth={"lg"} sx={{ marginTop: "2.5em" }} color="common.white">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} lg={12} textAlign="center">
                <Programador />
              </Grid>
              <Grid lg={12} xs={12} textAlign="center">
                <Typography variant="h1" sx={{
                  fontSize: "2em"
                }}>Manuel Lamas
                </Typography>
              </Grid>
              <Grid lg={6} xs={8} textAlign="center">
                <Divider sx={{
                  "&::before, &::after": {
                    borderColor: "primary.main",
                  },
                }}>
                  <Typography component="span" color="primary"> Full Stack Developer</Typography>
                </Divider>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ResumeJson
              cvRows={cvRows}
              exp={exp}
            />
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "1em" }}
      >
        <Link to="BackEnd" smooth offset={-100}>
          <Button variant="outlined" sx={{ marginBottom: "-2em" }}>
            Navegar
          </Button>
        </Link>

        <Button variant="text" sx={{ marginBottom: "-2em", ml: "14px" }} disabled={true}>
          Descargar CV
        </Button>
      </Grid>
    </Section>
  )
}

export default PersonalContainer;