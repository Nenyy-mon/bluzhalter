import MainFooter from "./MainFooter"
import MainMiddle from "./MainMiddle"
import MainNav from "./MainNav"
import './main.css'

function Mainpage() {
    return (
        <div className="allMain">
            <div className="secondMain">
        <MainNav/>
        <MainMiddle/>
        <MainFooter/>
            </div>
        </div>
    )
}

export default Mainpage
