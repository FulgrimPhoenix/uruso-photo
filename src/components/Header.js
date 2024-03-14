import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";
import { MenuPopup } from "./MenuPopup";

export function Header() {
  const windowWidth = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu(value) {
    setIsMenuOpen(value);
  }

  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src={constants.header.logo}
          alt="логотип"
        />
        <nav className="header__menu">
          {windowWidth < 600 ? (
            <button
              className="header__menu-button"
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <img
                className="header__menu-icon"
                src={constants.header.menuIcon}
                alt="кнопка 'меню'"
              />
            </button>
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
      {isMenuOpen ? (
        <MenuPopup closePopup={handleMenu}>
          <ul className="header__menu-list">
            {constants.header.pageNavLinks.map((navLink) => {
              return (
                <li key={navLink.title} className="header__menu-list-item">
                  <a
                    className="header__menu-list-link"
                    href={navLink.link}
                    onClick={() => handleMenu(false)}
                  >
                    {navLink.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </MenuPopup>
      ) : (
        ""
      )}
    </>
  );
}
