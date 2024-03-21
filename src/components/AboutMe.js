import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";

export function AboutMe() {
  const windowWidth = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: windowWidth <= 600 ? "700px" : "500px"
  });

  return (
    <section id="aboutMe" className="about-me">
      <h2 className="section-title">{constants.aboutMe.sectionTitle}</h2>
      <div className={`about-me__cells`}>
        <div ref={ref} className={`about-me__text-cells ${inView ? "about-me__text-cells_visible" : ""}`}>
          <h3 className="about-me__title">{constants.aboutMe.title}</h3>
          <p className="about-me__description">
            {constants.aboutMe.description}
          </p>
        </div>
        <img
          src={constants.aboutMe.photo}
          className={`about-me__photo-cell ${inView ? "about-me__photo-cell_visible" : ""}`}
          alt="мое фото"
        />
      </div>
      <nav ref={ref} className={`about-me__menu ${inView ? "about-me__menu_visible" : ""}`}>
        <h3 className="about-me__menu-title">
          {constants.aboutMe.navBarTitle}
        </h3>
        <ul className="about-me__menu-items">
          {constants.aboutMe.navBar.map((ref) => {
            if (windowWidth >= 600) {
              if (ref.title === "Телефон") {
                return <></>
              }
            }
            return (
              <li key={ref.title} className="about-me__menu-item">
                <a
                  href={ref.link}
                  className="about-me__item-link"
                  target="blank"
                  alt={ref.title}
                >
                  <img className="about-me__item-icon" src={ref.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
