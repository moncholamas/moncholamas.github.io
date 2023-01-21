import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';


const BackEndContainer = () => {
    return (
        <Container maxWidth={"lg"} sx={{minHeight:"400px"}}>
          <Grid
            container
            spacing={2}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={6}>
              <Typography variant="h3">BackEnd</Typography>
              <Typography component="span">Full Stack Developer</Typography>
            </Grid>
          </Grid>
        </Container>
    )
}

export default BackEndContainer;