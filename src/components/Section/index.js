import { Container } from "@mui/system"
import { useTheme } from '@mui/material/styles';


const Section = ({children, bgColor, variant}) => {
    const theme = useTheme();

    if( variant === "primary"){
        return (<Container maxWidth={false} disableGutters sx={{backgroundColor: theme.palette.primary.main, color:"#FFF", padding:"2em 1em"}}>
        {children}
    </Container>)
    }
    return (<Container maxWidth={false} disableGutters sx={{backgroundColor: bgColor || "#FFF", padding:"2em 1em"}}>
        {children}
    </Container>)
}

export default Section;