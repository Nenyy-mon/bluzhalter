import { NavLink } from "react-router-dom"

function MainNav() {
    return (
        <div className="allNav">
            <ul className="list">
                <NavLink to={'/bluzhalter/bio'}><li className="listItem">BIOGRAPHY</li></NavLink>
                <NavLink to={'/bluzhalter/gallery'}><li className="listItem">GALLERY</li></NavLink>
                <NavLink to={'/bluzhalter/merch'}><li className="listItem">MERCH</li></NavLink>
            </ul>
        </div>
    )
}

export default MainNav
