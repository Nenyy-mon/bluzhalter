import { NavLink } from "react-router-dom";
import logoPic from "../assets/images/logo/Asset 2.svg";
function MainMiddle() {
    return (
        <div className="middleMain">
            <NavLink  to={'/bluzhalter'}><img className="imageLogo" src={logoPic} alt="Logo"/></NavLink>
        </div>
    )
}

export default MainMiddle
