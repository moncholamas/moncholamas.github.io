import { red, blue , blueGrey, grey} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: blue.A700,
        },
        text:{
            main: grey.A400
        }
    },
    typography: {
        fontFamily: 'Kdam Thmor Pro',
        allVariants:{
            color: grey[700]
        }
    }
});

export default theme;