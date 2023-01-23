import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import ResumeJson from '../../components/ResumeJson';
import Section from '../../components/Section';

const PersonalContainer = () => {
  const cvRows = {
    Edad: 31,
    Domicilio: "S. M. de Tucumán",
    Profesión: "Programador",
  }
  const exp = {
    "Dev Full Stack": "Gestión y Servicios SRL",
    "Ayudante de Cátedra": "Universidad Nacional de Tucumán",
  }
  return (
    <Section >
      <Container maxWidth={"lg"} sx={{ marginTop: "3em" }} color="common.white">
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
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography>
              <ResumeJson
                cvRows={cvRows}
                exp={exp}
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid 
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{marginTop:"1em"}}
      >
        <Button variant="outlined">
          Ver Perfil Técnico
        </Button>
      </Grid>
    </Section>
  )
}

export default PersonalContainer;