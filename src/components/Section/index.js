import { Container } from "@mui/system"

const Section = ({children, bgColor}) => {
    return (<Container maxWidth={false} disableGutters sx={{backgroundColor: bgColor || "#FFF", marginTop:"5em", padding:"3em 0"}}>
        {children}
    </Container>)
}

export default Section;