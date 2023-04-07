import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

const SectionTitle = ({seccion, divColor, lista}) => {
    return (<>
        <Typography variant="h3">{seccion}</Typography>
        <Divider sx={{ bgcolor: divColor }}>
        </Divider>
    </>)
}

export default SectionTitle;