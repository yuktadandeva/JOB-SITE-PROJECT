import { Box, Typography } from "@mui/material"
import { ButtonSmall } from "../../../shared/widgets/Buttons/ButtonSmall"
import { useNavigate } from "react-router-dom"

export const Login = () => {
const navigate = useNavigate();

const handleNavigation= (path)=>{
navigate(path);
}
  return (
    <Box sx={{display:'flex', alignItems: "center",justifyContent:"center"}}>
        <Box>
        <ButtonSmall value={"Register"} onClick={()=>handleNavigation('/register')}></ButtonSmall>
        </Box>
    </Box>
  )
}
