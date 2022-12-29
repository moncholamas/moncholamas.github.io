import './App.css';
import { Container, Divider, Grid, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Container sx={{ backgroundColor: "#DDD" }}>
        <Typography variant="h2" > Manuel Lamas
          <Divider></Divider>
          <Typography component="span">Full Stack Developer</Typography>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h3">Front End</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3">Back End</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3">DevOps</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3">Otros</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
