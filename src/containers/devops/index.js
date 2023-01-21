import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';


const DevOpsContainer = () => {
    return (
        <Container maxWidth={"lg"} name="DevOps">
          <Grid
            container
            spacing={2}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={6}>
              <Typography variant="h3">DevOps</Typography>
              <Typography component="span">Full Stack Developer</Typography>
            </Grid>
          </Grid>
        </Container>
    )
}

export default DevOpsContainer;