import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';


const FrontEndContainer = () => {
    return (
        <Container maxWidth={"lg"} sx={{minHeight:"400px"}} name="FrontEnd">
          <Grid
            container
            spacing={2}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={6}>
              <Typography variant="h3">FrontEnd</Typography>
              <Typography component="span">Full Stack Developer</Typography>
            </Grid>
          </Grid>
        </Container>
    )
}

export default FrontEndContainer;