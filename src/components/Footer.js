import { constants } from "../utils/constants";

export function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">{constants.footer.title}</h2>
      <div className="footer__menu-cell">
        <h3 className="footer__menu-title">{constants.footer.menuTitle}</h3>
        <ul className="footer__menu">
          {constants.footer.navBar.map((ref) => {
            return (
              <li key={ref.title} className="footer__menu-item">
                <a
                  href={ref.link}
                  className="footer__item-link"
                  target="blank"
                  alt={ref.title}
                >
                  <img
                    className="footer__item-icon"
                    src={ref.icon}
                    alt={ref.title}
                  />
                  <span className="footer__link-text">{ref.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="footer__author">{constants.footer.author}</p>
    </footer>
  );
}
