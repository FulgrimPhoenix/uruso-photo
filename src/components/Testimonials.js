import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { constants } from "../utils/constants";
import { useWindowSize } from "../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";

export function Testimonials() {
  const windowSize = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: windowSize <= 1028 ? "130px" : "0px",
  });

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">{constants.testimonials.sectionTitle}</h2>
      <h3 className="section-subtitle">
        {constants.testimonials.sectionSubtitle}
      </h3>
      <div ref={ref} className={`testimonials__cells ${inView ? "testimonials__cells_visible" : ""}`}>
        <Swiper
          modules={[
            Mousewheel,
            Keyboard,
            Navigation,
            Pagination,
            EffectCoverflow,
          ]}
          effect="coverflow"
          speed={800}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={windowSize <= 600 ? false : true}
          pagination={{
            dynamicBullets: true,
          }}
          mousewheel={{
            sensitivity: 1,
          }}
          keyboard={{
            enabled: true,
          }}
        >
          {constants.testimonials.reviews.map((client) => {
            return (
              <SwiperSlide key={client.name}>
                <div className="testimonials__review-cell">
                  <img
                    className="testimonials__cell-icon"
                    src={constants.testimonials.reviewIcon}
                    alt={"иконка"}
                  />
                  <p className="testimonials__cell-text">{client.review}</p>
                  <img
                    className="testimonials__cell-photo"
                    src={client.photo}
                    alt={"фото клиента"}
                  />
                  <p className="testimonials__cell-client-name">
                    {client.name}
                  </p>
                  <span className="testimonials__post">{client.post}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
