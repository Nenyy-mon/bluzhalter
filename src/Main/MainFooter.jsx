import instaLogo from '../assets/images/pics/logospng/instagram-with-circle.svg'
import tiktokLogo from '../assets/images/pics/logospng/Asset 2.svg'
import youtubeLogo from '../assets/images/pics/logospng/youtube-with-circle.svg'
import spotifyLogo from '../assets/images/pics/logospng/spotify-with-circle.svg'
import { NavLink } from 'react-router-dom'
function MainFooter() {
    return (

        <div className="footerAll">
            
            <div className="icons"><NavLink target="blank" to={'https://www.instagram.com/bluzhalter?igsh=MWF2bHQwaXJpNXQ5NQ=='}><img className='iconsLogos' src={instaLogo} alt="LogoInsta" /></NavLink>
            <NavLink target="blank"><img className='iconsLogos' src={tiktokLogo} alt="LogoTiktok" /></NavLink>
            <NavLink target="blank"><img className='iconsLogos' src={youtubeLogo} alt="LogoYoutube" /></NavLink>
            <NavLink target="blank"><img className='iconsLogos' src={spotifyLogo} alt="LogoSpotify" /></NavLink>
            </div>
            <div className="copyrights">Bluzhalter 2024 © Created by <NavLink className='links' target='blank'  to={'https://www.instagram.com/skweyk?igsh=empicnhwZzU3anB5'}>Matija</NavLink> and <NavLink className='links' target='blank'  to={'https://www.instagram.com/jasamsone/?igsh=NWUxd283Yjl0d2l0'}>Nenad</NavLink></div>
        </div>
    )
}

export default MainFooter;
