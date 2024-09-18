import { Typography } from "@mui/material"
import { ButtonSmall } from "../../../shared/widgets/Buttons/ButtonSmall"
import { useNavigate } from "react-router-dom"

export const Login = () => {
const navigate = useNavigate();

const handleNavigation= (path)=>{
navigate(path);
}
  return (
    <div>
        <Typography variant="h1">
hello
        </Typography>

        <ButtonSmall value={"Register"} onClick={()=>handleNavigation('/register')}></ButtonSmall>
    </div>
  )
}
