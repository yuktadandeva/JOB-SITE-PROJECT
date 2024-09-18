import { Typography, Toolbar, Button,Box} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { ButtonSmall } from "../../widgets/Buttons/ButtonSmall";

export const Header = () => {
const navigate = useNavigate();

const handleNavigation = (path)=>{
    navigate(path);
}
  return (

        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>JOBSforYOU</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <Button variant="text">Home</Button>
        <Button variant="text">Notices</Button>
        <Button variant="text">something</Button>
        <Button variant="text">Help</Button>
        </Box>
        <ButtonSmall value={"Login/Register"} onClick={()=>handleNavigation('/login')}></ButtonSmall>
        </Toolbar>

  )
}
