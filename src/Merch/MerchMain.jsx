import NavAll from "../Nav/NavAll";
import MiddleMerch from "./MiddleMerch";
import './merch.css'

function MerchMain() {
    return (
        <div className="merchAll">
            <div className="secondMerch">
                <NavAll/>
                <MiddleMerch/>
            </div>
        </div>
    )
}

export default MerchMain;
