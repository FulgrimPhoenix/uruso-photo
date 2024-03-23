import { SwiperSlide, Swiper } from "swiper/react";
import { useWindowSize } from "../hooks/useWindowSize";
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
import { useInView } from "react-intersection-observer";

export function PhotoPortfolioPhotoGrid({
  animationPlaying,
  photoList,
  togglePopup,
}) {
  const windowWidth = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <ul
      ref={ref}
      className={`photoPortfolio__list-items ${
        animationPlaying && inView ? "appearance" : "disappearance"
      }`}
    >
      {windowWidth <= 600 ? (
        animationPlaying ? (
          <Swiper
            modules={[
              Mousewheel,
              EffectCoverflow,
              Keyboard,
              Navigation,
              Pagination,
            ]}
            effect="coverflow"
            speed={800}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            navigation={false}
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
            {photoList.map((photo) => {
              return (
                <SwiperSlide key={photo.id}>
                  <img
                    className="photoPortfolio__item-photo"
                    src={photo.link}
                    alt="развернутое фото"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          ""
        )
      ) : (
        photoList.map((photo) => {
          return (
            <li key={photo.id} className={`photoPortfolio__list-item`}>
              <img
                className="photoPortfolio__item-photo"
                onClick={() => togglePopup(photo.id)}
                src={photo.link}
                alt="фото"
              />
            </li>
          );
        })
      )}
    </ul>
  );
}
