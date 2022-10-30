// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import img from '../../assets/images/695ef9b9-5920-49c2-bf38-29f3a60ef391.jpg';
import img1 from '../../assets/images/332a4398717237.5ef6363bea295.png';
import img2 from '../../assets/images/fBKgC4L1cSXWxQgUlYIuEkwQshQHQHqZuDpY4Huu.jpg';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img} alt="" className="md:h-[22rem] h-48 w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="" className="md:h-[22rem] h-48 w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className="md:h-[22rem] h-48 w-auto" />
      </SwiperSlide>
    </Swiper>
    //       <div className="carousel w-full">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img src={img} className="w-full h-96" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide4" className="btn btn-circle">❮</a>
    //       <a href="#slide2" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img src={img1} className="w-full h-96" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide1" className="btn btn-circle">❮</a>
    //       <a href="#slide3" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img src={img2} className="w-full h-96" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide2" className="btn btn-circle">❮</a>
    //       <a href="#slide4" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img src={img} className="w-full h-96" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide3" className="btn btn-circle">❮</a>
    //       <a href="#slide1" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;
