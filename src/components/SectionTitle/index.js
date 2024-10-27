import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

const SectionTitle = ({seccion, divColor, lista, icon}) => {
    return (<>
        <Typography variant="h4" sx={{fontSize:"1.5em"}}> {icon} {seccion}</Typography>
        <Divider sx={{ bgcolor: divColor }}>
        </Divider>
    </>)
}

export default SectionTitle;