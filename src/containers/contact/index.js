import { Button, ButtonGroup, Checkbox, Container, Divider, FormControlLabel, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import Section from '../../components/Section';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/system';

const ContactContainer = () => {
  return (
    <Section variant="primary">
      <Container maxWidth={"lg"} name="Contacto">
        <Grid
          container
          spacing={2}
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={12} textAlign="center">
            <Typography variant="h4" color="inherit">Contacto</Typography>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="center">
            <ButtonGroup aria-label="text button group" size="large" variant="outlined">
              <Tooltip title="LinkedIn">
                <IconButton color="inherit" aria-label="LinkedIn" component="label">
                  <LinkedInIcon fontSize='large' />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton color="inherit" aria-label="upload picture" component="label">
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp">
                <IconButton color="inherit" aria-label="upload picture" component="label">
                  <WhatsAppIcon fontSize='large' />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="center">
            <Box component={"form"}>
              <TextField
                id="outlined-multiline-flexible"
                label="Correo"
                variant="filled"
                fullWidth
                type={"email"}
                sx={{ input: {color:"white" }}}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: '#DDD'}, 
               }}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Mensaje"
                rows={5}
                multiline
                type={"text"}
                variant="filled"
                fullWidth
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: '#DDD'}, 
               }}
              />
              <FormControlLabel control={<Checkbox defaultChecked color='success' sx={{borderColor:"#EEE"}} />} label="Autorizo a recibir la respuesta a mi correo electrónico." color="inherit" />
              <Button color="inherit" variant="outlined" sx={{ mt: "2em" }}>
                Enviar Mensaje
              </Button>
              <Button color="inherit" sx={{ mt: "2em" }}>
                Borrar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} textAlign="center" sx={{ mt: "3em" }}>
            <Typography variant="body2" color="inherit">Manuel Lamas - 2023</Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>

  )
}

export default ContactContainer;