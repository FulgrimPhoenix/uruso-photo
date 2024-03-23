import { SwiperSlide, Swiper } from "swiper/react";
import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { useInView } from "react-intersection-observer";

export function Cooperation() {
  const windowWidth = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: "0px",
  });

  return windowWidth < 600 ? (
    <section id="cooperation" className="cooperation">
      <h2 className="section-title">{constants.cooperation.sectionTitle}</h2>
      <h3 className="section-subtitle">
        {constants.cooperation.sectionSubtitle}
      </h3>
      <ul ref={ref} className={`cooperation__menu ${inView ? "cooperation__menu_visible" : ""}`}>
        <Swiper
          modules={[
            Mousewheel,
            Keyboard,
            Navigation,
            Pagination,
          ]}
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
          {constants.cooperation.companies.map((company) => {
            return (
              <SwiperSlide key={company.title}>
                <li
                  className={`cooperation__menu-item cooperation__menu-item_${company.color}`}
                >
                  <div className="cooperation__item-cell">
                    <img
                      className="cooperation__item-photo"
                      src={company.logo}
                      alt={company.title}
                    />
                    <h3 className="cooperation__item-title">{company.title}</h3>
                  </div>
                  <a
                    className={`cooperation__item-overlay cooperation__item-overlay_${company.color}`}
                    target="blank"
                    href={company.link}
                  />
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
    </section>
  ) : (
    <section id="cooperation" className="cooperation">
      <h2 className="section-title">{constants.cooperation.sectionTitle}</h2>
      <h3 className="section-subtitle">
        {constants.cooperation.sectionSubtitle}
      </h3>
      <ul ref={ref} className={`cooperation__menu ${inView ? "cooperation__menu_visible" : ""}`}>
        {constants.cooperation.companies.map((company) => {
          return (
            <li
              key={company.title}
              className={`cooperation__menu-item cooperation__menu-item_${company.color}`}
            >
              <div className="cooperation__item-cell">
                <img
                  className="cooperation__item-photo"
                  src={company.logo}
                  alt={company.title}
                />
                <h3 className="cooperation__item-title">{company.title}</h3>
              </div>
              <a
                className={`cooperation__item-overlay cooperation__item-overlay_${company.color}`}
                target="blank"
                href={company.link}
              ></a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
