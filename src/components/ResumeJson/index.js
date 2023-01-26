import { Typography } from "@mui/material";
import { Box, padding } from "@mui/system";

const ResumeJson = ({ cvRows, exp }) => {
    const keys = Object.keys(cvRows);
    const keysExp = Object.keys(exp)
    return (
        <Box sx={{mt:"1em"}}>
        <RowFormat > Resume <Typography variant="span" color="primary"> {`: {`} </Typography> </RowFormat>
        <Box sx={{ ml: "30px" }}>
            {
                keys.map((prop) => {
                    return <RowFormat key={prop}> {prop} <Typography variant="span" color="primary"> {`:`} </Typography>  <Typography variant="span" sx={{color:"#333"}}> {cvRows[prop]}</Typography><Typography variant="span" color="primary">{`,`} </Typography>  </RowFormat> 
                })
            }
            <RowFormat>Experiencia Laboral Relacionada <Typography variant="span" color="primary"> {`: {`} </Typography>   </RowFormat>
            <Box sx={{ ml: "30px" }}>
                {
                    keysExp.map((prop) => {
                        return <RowFormat key={prop}> {prop} <Typography variant="span" color="primary"> {`:`} </Typography>  <Typography variant="span" sx={{color:"#333"}}> {exp[prop]}</Typography><Typography variant="span" color="primary">{`,`} </Typography> </RowFormat>
                    })
                }
            </Box>
            <RowFormat color="primary"> {`}`} </RowFormat>
        </Box>
        <RowFormat color="primary"> {`}`} </RowFormat>
    </Box>)
}


const RowFormat = ({ children, color }) => {
    return (
        <Typography sx={{ fontSize: "1em", padding:"0.3em" }} color={color}> {children} </Typography>
    )
}

export default ResumeJson;