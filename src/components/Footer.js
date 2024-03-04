import { constants } from "../utils/constants";

export function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">{constants.footer.title}</h2>
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
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
