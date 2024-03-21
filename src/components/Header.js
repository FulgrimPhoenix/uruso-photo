import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";
import { MenuPopup } from "./MenuPopup";
import { useInView } from "react-intersection-observer";

export function Header() {
  const windowWidth = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  function handleMenu(value) {
    setIsMenuOpen(value);
  }

  return (
    <>
      <div ref={ref} className={`header ${inView ? "header_visible" : "header_invisible"}`}>
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
                {constants.header.phoneNumber}
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
                  {constants.header.phoneNumber}
                </a>
              ) : (
                <span className="header__telephone-cell">
                  <img
                    className="header__telephone-icon swing"
                    src={constants.header.phoneIcon}
                    alt="иконка телефона"
                  />{" "}
                  {constants.header.phoneNumber}
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
            {constants.header.phoneNumber}
          </a>
        </MenuPopup>
      ) : (
        ""
      )}
    </>
  );
}
