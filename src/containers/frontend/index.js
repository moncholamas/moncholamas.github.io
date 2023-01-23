import { Container, Divider, Grid, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import Section from '../../components/Section';


const FrontEndContainer = () => {
    return (
      <Section>
        <Container maxWidth={"lg"} sx={{minHeight:"400px"}} name="FrontEnd">
          <Grid
            container
            spacing={2}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={5} textAlign="right">
              <Typography variant="h3">FrontEnd</Typography>
              <Typography component="span">De maquetar a no reinventar la rueda</Typography>
              <Typography
                color={"white"}
                sx={{fontSize:"12px", padding:"8px", backgroundColor:"#444", margin:"24px 0px", borderRadius:"4px", textAlign:"left"}}
              >
                npm install -D experience experience-front 
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h3">algo</Typography>
              <Typography component="span">Full Stack Developer</Typography>
            </Grid>
          </Grid>
        </Container>
        </Section>
    )
}

export default FrontEndContainer;