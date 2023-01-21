import { Container, Divider, Grid, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PersonalContainer from './containers/home';
import BackEndContainer from './containers/backend';
import FrontEndContainer from './containers/frontend';
import DevOpsContainer from './containers/devops';
import ContactContainer from './containers/contact';
import MoreContainer from './containers/more';
import NavMenu from './components/NavMenu';


function App() {
  return (
    <div className="App">
      <NavMenu / >
      <Container maxWidth={false} sx={{marginTop:"100px"}}>
          <PersonalContainer />
          <BackEndContainer />
          <FrontEndContainer />
          <DevOpsContainer />
          <ContactContainer />
          <MoreContainer />
      </Container>
    </div>
  );
}

export default App;
