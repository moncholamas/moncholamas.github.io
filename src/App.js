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
import PresentationContainer from './containers/presentation';


function App() {
  return (
    <div className="App">
      <NavMenu />
          <PersonalContainer />
          <PresentationContainer />
          <BackEndContainer />
          <FrontEndContainer />
          <DevOpsContainer />
          <MoreContainer />
          <ContactContainer />
    </div>
  );
}

export default App;
