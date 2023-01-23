import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import Section from '../../components/Section';


const DevOpsContainer = () => {
    return (
      <Section bgColor="#EEE">
        <Container maxWidth={"lg"} name="DevOps">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={5}>
              <Typography variant="h3">DevOps</Typography>
              <Typography component="span">CI: Continuous Improvement</Typography>
              <Typography
                color={"yellow"}
                sx={{fontSize:"12px", padding:"8px", backgroundColor:"#444", margin:"24px 0px", borderRadius:"4px"}}
              >
                manuel@cv:-$ sudo nano dev_ops_exp
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h3">DevOps</Typography>
              <Typography component="span">Full Stack Developer</Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
    )
}

export default DevOpsContainer;