// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import { Navigation, EffectCoverflow } from "swiper";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";

const SwiperContent = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={card1} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card2} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card3} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card1} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card2} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card3} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card1} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card2} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={card3} />
            <h4>Texto</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperContent;
