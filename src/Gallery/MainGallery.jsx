import NavAll from "../Nav/NavAll";
import MiddleGallery from "./MiddleGallery";
import './gallery.css'
function MainGallery() {
    return (
        <div className="allGall">
            <div className="second">
                <NavAll/>
                <MiddleGallery/>
            </div>
        </div>
    )
}

export default MainGallery;
