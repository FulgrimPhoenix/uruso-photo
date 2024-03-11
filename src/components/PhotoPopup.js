import { constants } from "../utils/constants";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import {
  EffectCoverflow,
  EffectFlip,
  EffectCards,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";


export function PhotoPopup({
  isPopupOpen,
  openedPhotoList,
  togglePopup,
  activeSlide,
}) {
  function closePopup(e) {
    const overlay = document.querySelector(".popup_opened");

    if (e.target === overlay) {
      return togglePopup();
    }
    return;
  }

  return (
    <div className={`popup ${isPopupOpen ? "popup_opened" : "popup_closed"}`} onClick={(e) => closePopup(e)}>
      <button className="popup__exit-button" onClick={() => togglePopup()}>
        <img
          className="popup__exit-buttom-img"
          src={constants.popup.exitButton}
          alt="кнопка закрыть"
        />
      </button>
      <div className="popup__container">
        {isPopupOpen ? (
          <Swiper
            modules={[
              Mousewheel,
              EffectCards,
              Keyboard,
              Navigation,
              Pagination,
            ]}
            effect="cards"
            speed={800}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            navigation={true}
            initialSlide={activeSlide}
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
            {openedPhotoList.map((photo) => {
              return (
                <SwiperSlide key={photo.id}>
                  <img
                    className="popup__photo"
                    src={photo.link}
                    alt="развернутое фото"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
