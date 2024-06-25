import { NavLink } from "react-router-dom"
import logopic from "../assets/images/logo/Asset 2.svg"

function PrelandMiddle() {
    return (
        <div className="allMiddle">
            <div className="logoDiv">
                <img src={logopic} alt="logopic" className="logopic" />
                <NavLink to={'/bluzhalter/main'}><p>CONTINUE TO WEBSITE</p></NavLink>
            </div>
            <div className="aboutDiv">
                <p>
                Oficijalni vebsajt kreirali 
                <NavLink className='linkse' to={'https://www.instagram.com/skweyk?igsh=empicnhwZzU3anB5'}>Matija Petrovic</NavLink> 
                i 
                <NavLink className='linkse' to={'https://www.instagram.com/jasamsone/?igsh=NWUxd283Yjl0d2l0'}>Nenad Jovanovic</NavLink>
                </p>
            </div>
            <div className="bottomDiv">
                www.bluzhalter.com
            </div>
        </div>
    )
}

export default PrelandMiddle
