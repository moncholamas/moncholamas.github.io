import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';


const PersonalContainer = () => {
    return (
        <Container maxWidth={"lg"} sx={{minHeight:"400px"}} color="common.white">
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
              }}>Manuel Lamas <Typography component="span">{' [ Full Stack Developer ]'}</Typography></Typography>
              
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
            </Grid>
          </Grid>
        </Container>
    )
}

export default PersonalContainer;