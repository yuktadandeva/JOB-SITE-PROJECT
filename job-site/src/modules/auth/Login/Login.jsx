import { Box, Typography } from "@mui/material"
import { ButtonSmall } from "../../../shared/widgets/Buttons/ButtonSmall"
import { useNavigate } from "react-router-dom"

export const Login = () => {
const navigate = useNavigate();

const handleNavigation= (path)=>{
navigate(path);
}
  return (
    <Box sx={{display:'flex', alignItems: "center",justifyContent:"center", height:"100vh"}}>
        <Box sx={{border:"1px solid grey", height:"70vh", width:"30%",padding:"40px"}}>
        <Typography variant="h3" sx={{textAlign:"center"}}>Login</Typography>
        <ButtonSmall value={"Register"} onClick={()=>handleNavigation('/register')}></ButtonSmall>
        </Box>
    </Box>
  )
}
