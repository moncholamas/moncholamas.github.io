import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

const SectionTitle = ({seccion, divColor, lista}) => {
    return (<>
        <Typography variant="h3">{seccion}</Typography>
        <Divider sx={{ bgcolor: divColor }}>
        </Divider>
        <List dense={true}>
            {
                lista.map(item => (
                    <ListItem>
                        <ListItemText
                            primary={item}
                        />
                    </ListItem>
                ))
            }
        </List>
    </>)
}

export default SectionTitle;