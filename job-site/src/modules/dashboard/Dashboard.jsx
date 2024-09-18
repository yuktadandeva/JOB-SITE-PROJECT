import { useNavigate } from "react-router-dom"
import { ButtonSmall } from "../../shared/widgets/Buttons/ButtonSmall"
import { useEffect } from "react";
import { Header } from "../../shared/components/Header/Header";
export const Dashboard = () => {
// const navigate = useNavigate();

// const handleNavigation = (path)=>{
//     navigate(path);
// }
  return (
    <div>
           <Header></Header>
        {/* <ButtonSmall value={"Login/Register"} onClick={()=>handleNavigation('/login')}></ButtonSmall> */}
    </div>
  )
}
