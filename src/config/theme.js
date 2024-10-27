import { red, blue , blueGrey, grey} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: blue[600],
        },
        text:{
            main: grey.A400
        }
    },
    typography: {
        fontFamily: 'Outfit',
        fontSize: 13,
        allVariants:{
            color: grey[700]
        }
    }
});

export default theme;