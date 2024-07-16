import { Avatar, Box, Button, ButtonGroup, Container, Divider, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import Programador from '../../components/Programador';
import ResumeJson from '../../components/ResumeJson';
import { Link, animateScroll as scroll } from "react-scroll";
import profile from "../../assets/images/profile.png"
import { FileDownload } from '@mui/icons-material';
import Section from '../../components/Section';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PersonalContainer = () => {
  const cvRows = {
    "Full Name": "Manuel Lamas",
    "Profession": "Software Developer",
  }

  const actual = {
    "Full Stack Dev": "GyS SRL",
  }

  const exp = {
    "Back End Dev": "SIU - Pilagá",
    "Full Stack Dev": "Sitenso",
    "Professor Assistant": "UNT - FaCET",
  }
  return (
    <Section bgColor={"#333"}>
      <Container maxWidth={"xl"} sx={{ marginTop: "2.5em" }} color="common.white">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} lg={12} textAlign="center" alignContent={"center"}>
                <Box sx={{display:'block'}}>
                  <img  src={profile} alt="profile" />  
                </Box>
              </Grid>
              <Grid item lg={12} xs={12} textAlign="center">
                <Typography variant="h1" sx={{ fontSize: "1.5em", color: "#AAA" }}>
                  Software Developer
                </Typography>
              </Grid>
              <Grid  textAlign="center">
              <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
                <Button startIcon={<FileDownload />}>
                  Resume
                </Button>
                <Tooltip title="LinkedIn">
                <IconButton color="inherit" aria-label="LinkedIn" component="label">
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton color="inherit" aria-label="upload picture" component="label">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp">
                <IconButton color="inherit" aria-label="upload picture" component="label">
                  <WhatsAppIcon />
                </IconButton>
              </Tooltip>
              </ButtonGroup>
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