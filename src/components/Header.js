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
          {windowWidth <= 940 ? (
            <>
              <a
                href={constants.header.phoneLink}
                target="blank"
                className="header__telephone-cell header__telephone-cell_small"
              >
                <img
                  className="header__telephone-icon swing"
                  src={constants.header.phoneIcon}
                  alt="иконка телефона"
                />{" "}
                +79096695149
              </a>
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
            </>
          ) : (
            <>
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
              {windowWidth <= 1028 ? (
                <a
                  href={constants.header.phoneLink}
                  target="blank"
                  className="header__telephone-cell"
                >
                  <img
                    className="header__telephone-icon swing"
                    src={constants.header.phoneIcon}
                    alt="иконка телефона"
                  />{" "}
                  +79096695149
                </a>
              ) : (
                <span className="header__telephone-cell">
                  <img
                    className="header__telephone-icon swing"
                    src={constants.header.phoneIcon}
                    alt="иконка телефона"
                  />{" "}
                  +79096695149
                </span>
              )}
            </>
          )}
        </nav>
      </div>
      {isMenuOpen && windowWidth <= 940 ? (
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
          <a
            href={constants.header.phoneLink}
            target="blank"
            className="header__telephone-cell"
          >
            <img
              className="header__telephone-icon swing"
              src={constants.header.phoneIcon}
              alt="иконка телефона"
            />{" "}
            +79096695149
          </a>
        </MenuPopup>
      ) : (
        ""
      )}
    </>
  );
}
