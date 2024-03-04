import { constants } from "../utils/constants";

export function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={constants.header.logo} alt="логотип" />
      <nav className="header__menu">
        <ul className="header__menu-list">
          {constants.header.pageNavLinks.map((navLink) => {
            return (
              <li key={navLink.title} className="header__menu-list-item">
                <a className="header__menu-list-link" href={navLink.link}>{navLink.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
