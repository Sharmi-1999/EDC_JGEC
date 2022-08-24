import { Swiper, SwiperSlide, Pagination, Autoplay } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function NewsSlider({data, error}) {
  if(error) return <div>Failed to load data</div>
  if(!data) return <div> Loading...</div>
  return (
    <div>
      <Swiper
        autoplay={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {item.type === "image" ? (
                <>
                  <Image src={item.url} alt={item.title} />
                  <h5>{item.title}</h5>
                </>
              ) : (
                <>
                  <video controls>
                    <source src={item.title} type="video/mp4" />
                  </video>
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}