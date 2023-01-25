import { Typography } from "@mui/material";
import { Box, padding } from "@mui/system";

const ResumeJson = ({ cvRows, exp }) => {
    const keys = Object.keys(cvRows);
    const keysExp = Object.keys(exp)
    return (
        <Box sx={{mt:"1em"}}>
        <RowFormat> {`Resume: {`} </RowFormat>
        <Box sx={{ ml: "40px" }}>
            {
                keys.map((prop) => {
                    return <RowFormat key={prop}> {prop}: <Typography variant="span" sx={{color:"#333"}}> {cvRows[prop]} </Typography> </RowFormat>
                })
            }
            <RowFormat>ExperienciaLaboralRelacionada:  {`{`}  </RowFormat>
            <Box sx={{ ml: "40px" }}>
                {
                    keysExp.map((prop) => {
                        return <RowFormat key={prop}> {prop}: <Typography variant="span" sx={{color:"#333"}}> {exp[prop]} </Typography> </RowFormat>
                    })
                }
            </Box>
            <RowFormat> {`}`} </RowFormat>
        </Box>
        <RowFormat> {`}`} </RowFormat>
    </Box>)
}


const RowFormat = ({ children }) => {
    return (
        <Typography sx={{ fontSize: "1em", padding:"0.3em" }}> {children} </Typography>
    )
}

export default ResumeJson;