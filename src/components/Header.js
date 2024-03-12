import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";

export function Header() {
  const windowWidth = useWindowSize();

  return (
    <div className="header">
      <img className="header__logo" src={constants.header.logo} alt="логотип" />
      <nav className="header__menu">
        {windowWidth < 700 ? (
          ""
        ) : (
          <ul className="header__menu-list">
            {constants.header.pageNavLinks.map((navLink) => {
              return (
                <li key={navLink.title} className="header__menu-list-item">
                  <a className="header__menu-list-link" href={navLink.link}>
                    {navLink.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
}
