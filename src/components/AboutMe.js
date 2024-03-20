import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";

export function AboutMe() {
  const windowWidth = useWindowSize();
  return (
    <section id="aboutMe" className="about-me">
      <h2 className="section-title">{constants.aboutMe.sectionTitle}</h2>
      <div className="about-me__cells">
        <div className="about-me__text-cells">
          <h3 className="about-me__title">{constants.aboutMe.title}</h3>
          <p className="about-me__description">
            {constants.aboutMe.description}
          </p>
        </div>
        <img
          src={constants.aboutMe.photo}
          className="about-me__photo-cell"
          alt="мое фото"
        />
      </div>
      <nav className="about-me__menu">
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
