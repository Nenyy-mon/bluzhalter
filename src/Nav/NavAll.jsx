import arrow from '../assets/images/pics/logospng/ArrowAsset 3.svg'
import instaLogo from '../assets/images/pics/logospng/instagram-with-circle.svg'
import tiktokLogo from '../assets/images/pics/logospng/Asset 2.svg'
import youtubeLogo from '../assets/images/pics/logospng/youtube-with-circle.svg'
import spotifyLogo from '../assets/images/pics/logospng/spotify-with-circle.svg'
import { NavLink } from "react-router-dom"
import './nav.css'
import { useEffect, useState } from "react"
function NavAll() {
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [bioActive,setBioActive] = useState(false)
    const [gallActive,setGallActive] = useState(false)
    const [merchActive,setMerchActive] = useState(false)
    

    useEffect(() => {
        handleActive()
    },[])

    function handleActive() {
        if(window.location.href.includes('bio')) {
            setBioActive(true)
            setMerchActive(false)
            setGallActive(false)
        } else if(window.location.href.includes('gallery')) {
            setBioActive(false)
            setMerchActive(false)
            setGallActive(true)
        } else if(window.location.href.includes('merch')) {
            setBioActive(false)
            setMerchActive(false)
            setGallActive(true)
        }
    }
    return (
        <>
        <div onClick={() => {
            if(open == true) {
                setOpen(false)
                setVisible(false)
            } else {
                setOpen(true)
                setVisible(true)
            }
        }} className={open ? "icon-active" : "icon-one"}>
            <div className="burgerMenu"></div>
        </div> 
        <div className={visible ? "mainNavActive" : "mainNav"}> 
            <ul className="listAll">
            <NavLink className='strel' to={'/bluzhalter/main'}>
                <img className='arr' src={arrow}  />
            </NavLink>

            <NavLink to={'/bluzhalter/bio'}><li className={bioActive ? "listItems" : "activelistItems"}>BIOGRAPHY</li></NavLink>
            <NavLink to={'/bluzhalter/gallery'}><li className={gallActive ? "listItems" : "activelistItems"}>GALLERY</li></NavLink>
            <NavLink to={'/bluzhalter/merch'}><li className={merchActive ? "listItems" : "activelistItems"}>MERCH</li></NavLink>
            </ul>

            <ul className="listIcons">
            <NavLink to={'https://www.instagram.com/bluzhalter?igsh=MWF2bHQwaXJpNXQ5NQ=='}><img className='iconsLogo' src={instaLogo} alt="LogoInsta" /></NavLink>
            <NavLink><img className='iconsLogo' src={tiktokLogo} alt="LogoTiktok" /></NavLink>
            <NavLink><img className='iconsLogo' src={youtubeLogo} alt="LogoYoutube" /></NavLink>
            <NavLink><img className='iconsLogo' src={spotifyLogo} alt="LogoSpotify" /></NavLink>

            </ul>
            <div className="copyright">Bluzhalter 2024 © Created by <NavLink className='links' target='blank'  to={'https://www.instagram.com/skweyk?igsh=empicnhwZzU3anB5'}>Matija</NavLink> and <NavLink className='links' target='blank'  to={'https://www.instagram.com/jasamsone/?igsh=NWUxd283Yjl0d2l0'}>Nenad</NavLink></div>
        </div>
        </>
    )
}

export default NavAll
