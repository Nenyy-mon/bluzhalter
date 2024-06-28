
const gallery = Object.values(import.meta.glob('../assets/images/smallerGall/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url'}))

import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';
import { EffectCoverflow} from "swiper/modules";

function MiddleGallery() {
    console.log(gallery)
    return (
        <div className="gallMiddle">
            <h1 className="gallery">
                GALLERY
            </h1>
            <div className="galler">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        // autoplay={{
        //     delay: 3500,
        //   disableOnInteraction: false,
        // }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
    {gallery.map((img,i) => {
        return (
            <SwiperSlide key={i}>
                <img src={img} alt={i} key={i} />
            </SwiperSlide>
        )
    })}
      </Swiper>
            </div>
           
        </div>
    
    )
}

export default MiddleGallery
