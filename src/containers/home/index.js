import { Avatar, Box, Button, ButtonGroup, Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import ResumeJson from '../../components/ResumeJson';
import Section from '../../components/Section';
import { Link, animateScroll as scroll } from "react-scroll";
import profile from "../../assets/images/profile.png"


const PersonalContainer = () => {
  const cvRows = {
    Nombre: `Manuel Lamas`,
    Edad: `31 años`,
    Domicilio: `S. M. de Tucumán`,
    Profesión: `Programador`,
  }

  const actual = {
    "Back End Dev": `Sitenso`,
  }

  const exp = {
    "Full Stack Dev": `GyS SRL`,
    "Ayudante de Cátedra": `UNT - FaCET`,
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
              <Grid item xs={12} lg={12} textAlign="center" alignContent={"center"}>
                <Avatar sx={{ width: 140, height: 140, margin: "0.6em auto", border: "none" }} src={profile} alt="profile" />
              </Grid>
              <Grid lg={12} xs={12} textAlign="center">
                <Typography variant="h1" sx={{
                  fontSize: "2em"
                }}>Software Developer
                </Typography>
              </Grid>
              <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
                <Button>
                  Curriculum Vitae
                </Button>
                <Button>
                  Recomendaciones
                </Button>
              </ButtonGroup>
              <Grid lg={6} xs={8} textAlign="center">

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ResumeJson
              cvRows={cvRows}
              exp={exp}
              actual={actual}
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
      </Grid>
    </Section>
  )
}

export default PersonalContainer;