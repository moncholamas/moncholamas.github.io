import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

const SectionTitle = ({seccion, divColor, lista}) => {
    return (<>
        <Typography variant="h4" sx={{fontSize:"1.5em"}}>{seccion}</Typography>
        <Divider sx={{ bgcolor: divColor }}>
        </Divider>
    </>)
}

export default SectionTitle;