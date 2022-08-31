import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
export default function NewsSlider({ data, error }) {
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div> Loading...</div>;
  return (
    <div>
      <Swiper
        autoplay={true}
        modules={[Pagination, Autoplay, EffectCards]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={10}
        loop={true}
        speed={1000}
        centeredSlides={true}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              (
              <div
                style={{
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={item.url} alt={item.title} />
                <h5
                  style={{
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  {item.title}
                </h5>
              </div>
              )
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
