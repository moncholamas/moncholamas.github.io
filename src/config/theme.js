import { red, blue , blueGrey} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: blue[50],
        },
    },
    typography: {
        fontFamily: 'Kdam Thmor Pro',
    }
});

export default theme;